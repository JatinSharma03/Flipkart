import { products } from "./constants/product.js";
import productType from "./model/productSchema.js";

const defaultData = async ()=>{

    try{
        await productType.deleteMany({});
        await productType.insertMany(products);
        console.log("data has imported succesfully")
    }
    catch(error){
        console.log(`Error in defaultData.js: ${error.message}`)
    }
}

export default defaultData;