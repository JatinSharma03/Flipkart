import express from "express";

import connection from "./database/db.js";
import defaultData from "./defaultData.js";

const app = express();

const port = 8000;
const username = "SMKDOONA";
const password = 52846;

connection(username,password);

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})

defaultData();