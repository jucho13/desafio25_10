import { generateProducts } from '../utils.js'
import EErrors from '../services/errors/errors-enum.js';

export const getProducts = async (req, res) => {
    try {
        let products = []
        for (let i = 0; i < 100; i++) {
            products.push(generateProducts());
        }
        res.send({ status: 'success', payload: products })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error, message: "No se pudo obtener los productos:" });
    }
};
export const saveProducts = (req, res) =>{ 
    try {

    console.log(req.body);
    const { title, price, description, thumbnail, id, code, stock, status } = req.body;

    
    if (code === 'AF23') {

            CustomError.createError({
            name: "Product Creation Error",
            cause: generateUserErrorInfo({ title, price, description, thumbnail, id, code, stock, status }),
            message: "Error tratando de crear el producto",
            code: EErrors.INVALID_TYPES_ERROR
        })
    }

    
    res.status(201).send({ status: "success", payload: userDto });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.code, message: error.message });
    }
}