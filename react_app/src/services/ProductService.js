import axios from "axios";

const initProducts = [
    {
        id: 1,
        name: 'Monitor Samsung 65',
        price: 500,
        description: 'El monitor es bueno'
    },
    {
        id: 2,
        name: 'Iphone 13',
        price: 800,
        description: 'El celular es bueno'
    }
];

export const listProduct = () => {
    return initProducts;
}

const baseUrl = 'http://localhost:8080/products'

export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}
export const create = async ({name, description, price}) => {
    try {
        const response = await axios.post(baseUrl, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.log(error)
    }
    return undefined;
}
export const update = async ({id, name, description, price}) => {
    try {
        const response = await axios.put(baseUrl+'/'+id, {
            id: id,
            name: name,
            description: description,
            price: price
        });
        return response;
    } catch (error) {
        console.log(error)
    }
    return undefined;
}
export const remove = (id) => {
    try {
        axios.delete(baseUrl+'/'+id);
    } catch (error) {
        console.log(error)
    }
}