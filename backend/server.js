import "express-async-error"
import  * as dotenv from "dotenv"
dotenv.config();

import express from "express";
const app = express();

const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    return res.status(200).json({msg:"hello world"}) 
})

const server = () => {
    app.listen(port, () => { console.log("hi")})
}

server()