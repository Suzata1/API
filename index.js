import express from "express";
import userRoutes from "./routes/user.route.js";
import bookRoutes from "./routes/book.route.js";
import 'dotenv/config.js';
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import documentRoutes from "./routes/document.route.js";
import  cloudinary  from './config/cloudinary.js';

connectDB();
const app = express()
const PORT = process.env.PORT || 4001;

const key = process.env.SECRET_KEY;
console.log("Secret Key is :",key);
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cloudinary configuration
const upload = cloudinary.uploader.upload(
    "https://static.wikia.nocookie.net/mrbean/images/2/29/Mrbeanliveactionnobackground.png/revision/latest?cb=20251028232901",
    {
        folder: "documents",
        resource_type: "auto",
        public_id: "mrbeanliveactionnobackground",
    }
);



app.use("/users",userRoutes)
 app.use("/books",bookRoutes)
app.use("/documents", documentRoutes);


app.use("/",(req,res)=>{
    res.send("Backend is running properly"  )
})

app.use((req,res,next)=>{
    res.status(404).send("API endpoint not found")
})

app.listen(PORT,()=>{
    console.log(`Server is running on Url  http://localhost:${PORT}`);
}); 

//env to save the port and other secret keys
//ORM=object relational mapping  0 to many 1 to many many to many

//scheme =database ko blueprint
