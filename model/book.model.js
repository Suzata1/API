// import mongoose from "mongoose";
// const bookSchema = new mongoose.Schema({
//     title:String,
//     author:String,
//     edition:String,
//     genera:String,
//     price:Number,
// }) 

// const   Book = new mongoose.model("book",bookSchema)

// export default Book
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
       type: String,
       required: true,
       unique: true
    },
    author: {
         
        type: String,
        required: true,
    },
    edition: {
        type: String,
        required: true,
    },
    genera: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
   
},{
    timestamps: true
})
const Book = mongoose.model("Book", bookSchema);
export default Book;