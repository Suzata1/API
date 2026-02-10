import getAllBooks from "../controllers/book.controller.js"

 export const getAllBooks = async (req, res) => {
    try{
        const books = await bookModel.find();
        if (!books){
            res.status(400).json({
                message:" no book found",

                success: false
            })
        }

           if (books.length == 0){
            res.status(400).json({
                message:"book collection is empty",
                success: false
            })
        }

            res.status(200).json({
                message:"book collection retrieved successfully",
                success: true,
                data : books
            })

        

    }catch (error){
res.status(500).json({
    message:error.message || "internal server error",
    success:false,

})
    }
 }

 export const createBook = async (req, res) => {
    try {
        const { title, author, edition, genera, price } = req.body;
        //check if the body is empty or not
        if (!title || !author || !edition || !genera || !price) {       
             res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
    
        const newBook = new bookModel({
            title,
            author, 
            edition,
            genera,
            price

        }) 
        if (!newBook) {
            res.status(400).json({
                message: "Failed to create book",
                success: false
            })
        }   
        await newBook.save();
        res.status(201).json({
            message: "Book created successfully",
            success: true,
            data: newBook
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal server error",
            success: false
        })
    }
    }
