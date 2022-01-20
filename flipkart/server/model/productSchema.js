
import Mongoose from "mongoose";

const productSchema = new Mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})

const productType = Mongoose.model("productofjin",productSchema);

export default productType;