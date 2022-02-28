import product from "../models/product"

export const createProduct = async (req, res) => {

    const {name, description, price, imgUrl} = req.body

    const newProduct= new product({ name, description, price, imgUrl}); 
    const productSaved = await newProduct.save()

    res.status(201).json("productSaved")
}

export const getProducts = (req, res) => {
    res.json("get product")
}

export const getProductById = (req, res) => {

}

export const updateProductById = (req, res) => {

}

export const deleteProductById = (req, res) => {

}