import { useEffect, useState } from "react"
import { findAll, listProduct, update, create, remove } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductForm } from "./ProductForm";

export const ProductApp = () => {

    const [products, setProducts] = useState([]);

    //Listar (GET)
    const getProducts = async () => {
        const result = await findAll();
        console.log(result)
        setProducts(result.data._embedded.products);
    }
    useEffect(() => {
        getProducts();
    }, [])

    //Insertar (POST) y editar (PUT)
    const handlerAddProduct = async (product) => {
        console.log(product)
        if(product.id > 0){
            const response = await update(product);
            setProducts(products.map(prod => {
                if(prod.id == response.data.id){
                    return {...response.data}
                }
                return prod;
            }));
        }else{
            const response = await create(product);
            setProducts([...products, { ...response.data }]);
        }
    }
    //Eliminar (DELETE)
    const handlerRemoveProduct = (id) => {
        remove(id);
        setProducts(products.   filter(product => product.id != id));
    }
    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    })
    const handlerProductSelected = (product) => {
        setProductSelected({...product});
    }

    return (
        <>
            <div className="container my-4">
                <h2>Productos</h2>
                <div className="row">
                    <div className="col">
                        <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected} />
                    </div>
                    <div className="col">
                        {
                            products.length == 0 ? 
                             <div className="alert alert-warning">No hay productos en el sistema!</div>
                             : 
                             <ProductGrid handlerProductSelected={handlerProductSelected} products={products} handlerRemove={handlerRemoveProduct} />
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )

}