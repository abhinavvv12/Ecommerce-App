import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

// function for add product
const addProduct = async (req, res) => {
    console.log("✅ addProduct route hit");
    try {
        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        console.log("1. Controller started");


        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        console.log("2. Images:", images);

        console.log("3. Before Cloudinary");

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' }
                );
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestSeller: bestSeller === 'true' ? true : false,
            sizes:JSON.parse(sizes),
            image:imagesUrl,
            date: Date.now()

        }

        console.log("4. Cloudinary done");

        const product = new productModel(productData);

        console.log("5. Before save");
        await product.save()
        console.log("6. Saved");

        res.json({success:true, message:"Product Added"})

    } catch (error) {
        console.log(error);
        console.log(error.message);

        res.json({
            success: false,
            message: error.message
        })
    }

}

// function for list product
const listProduct = async (req, res) => {

    try{
        const products = await productModel.find({});
        res.json({success:true, products})
    }catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message
        })
    }

}

// function for removing product
const removeProduct = async (req, res) => {

    try{
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Removed"})
    }catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message
        })
    }
}

// function for single product info
const singleProduct = async (req, res) => {

    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message
        })
    }
}

export { listProduct, addProduct, removeProduct, singleProduct }
