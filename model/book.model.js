import mongoose from "mongoose";
const bookSchem = new mongoose.Schema({
    title:String,
    author:String,
    edition:String,
    genera:String,
    price:Number,
}) 

const   Book = new mongoose.model("book",bookSchem)

export default Book