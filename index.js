import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"

const app = express();
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB.");
}catch(error) {
    throw error;
}
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB Disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!")
})

app.listen(8170, ()=>{
    connect()
    console.log("Connected to Backend.");
});