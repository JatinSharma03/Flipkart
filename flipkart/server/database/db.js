import mongoose from "mongoose";

const connection = async (username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.hfszv.mongodb.net/PROJECT_0?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true});
        console.log("connected to database");
    }
    catch(error){
        console.log(`ERROR in db.js: ${error.message}`)
    }
}

export default connection;