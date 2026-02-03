import {  book } from "../model/book.model.js";

const bookController = {};

/* GET ALL BOOKS */
bookController.getBooks = (req, res) => {
 const datas = book;

  if (!datas) {
    return res.status(404).json({
      message: "Book data not found",
      success: false
    });
  }

  res.status(200).json({
    message: "Book data retrieved successfully",
    success: true,
    data: datas
  });
};

/* GET BOOK BY ID */
bookController.getBookById = (req, res) => {
  const id = Number(req.params.id);

   const ById =book.find((value)=>{
          return value.id === id;
         });

  if (!ById) {
    return res.status(404).json({
      message: `Book with id ${id} not found`,
      success: false
    });
  }

  res.status(200).json({
    message: "Book data retrieved successfully",
    success: true,
    data: ById
  });
};

/* POST REGISTER BOOK */
bookController.registerBook = (req, res) => {
  const { title, author, edition, Volumn, Genera } = req.body;

  if (!title || !author || !edition || !Volumn || !Genera) {
    return res.status(400).json({
      message: "Please provide all required fields",
      success: false
    });
  }

 const books = book.push({
                id:book.length + 2,
                title,
                author,
                edition,
                Volumn,
                Genera  
            });

 

  res.status(201).json({
    message: "Book registered successfully",
    success: true,
    
  });
};

/* PATCH UPDATE BOOK */
bookController.updateBook = (req, res) => {
  const id = Number(req.params.id);
  const book = book.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: `Book with id ${id} not found`,
      success: false
    });
  }

  Object.assign(book, req.body);


  res.status(200).json({
    message: "Book updated successfully",
    success: true,
   
  });
 
  
};

export default bookController;
