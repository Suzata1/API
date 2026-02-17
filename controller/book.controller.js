import bookModel from "../model/book.model.js";
const bookController = {}
//  export const getAllBooks = async (req, res) => {
//     try{
//         const books = await bookModel.find();
//         if (!books){
//             res.status(400).json({
//                 message:" no book found",

//                 success: false
//             })
//         }

//            if (books.length == 0){
//             res.status(400).json({
//                 message:"book collection is empty",
//                 success: false
//             })
//         }

//             res.status(200).json({
//                 message:"book collection retrieved successfully",
//                 success: true,
//                 data : books
//             })

        

//     }catch (error){
// res.status(500).json({
//     message:error.message || "internal server error",
//     success:false,

// })
//     }
//  }
// const bookController = {}

//  bookController . createBook = async (req, res) => {
//     try {
//         const { title, author, edition, genera, price } = req.body;
//         //check if the body is empty or not
//         if (!title || !author || !edition || !genera || !price) {       
//              res.status(400).json({
//                 message: "All fields are required",
//                 success: false
//             })
//         }
    
//         const newBook = new bookModel({
//             title,
//             author, 
//             edition,
//             genera,
//             price

//         }) 
//         if (!newBook) {
//             res.status(400).json({
//                 message: "Failed to create book",
//                 success: false
//             })
//         }   
//         await newBook.save();
//         res.status(201).json({
//             message: "Book created successfully",
//             success: true,
//             data: newBook
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: error.message || "Internal server error",
//             success: false
//         })
//     }
//  }

 
// //   bookController.createBook = async (req, res) => {
// //      try {
// //          const { title,
// //     author,
// //     edition,
// //     genre,
// //     price,
// // postedBy } = req.body;
// //          //validation
// //          if (!title || !author || !edition || !genre || !price || !postedBy ) {
// //              return res.status(400).json({
// //                  message: "All fields are required",
// //                  success: false,
// //              });
// //          }
         
// //          //check if the book already exists
// //      const book = await bookModel.findOne({$or: [{ title: title }, { author: author }]})
        
 
// //      if (book) {
// //          return res.status(400).json({
// //              message: "book already exists",
// //              success: false,
// //          });
// //      }
// //      //create new book
// //      const newBook = await bookModel.create({
// //          title,
// //          author,
// //          edition,
// //          genre,
// //          price,
// //      postedBy
// //      })
     
// //          await newBook.save();
// //          //response
// //          res.status(201).json({
// //              message: "book register successfully",
// //              success: true,
// //              data: newBook
// //          })
// //      } catch (error) {
// //   res.status (500).json({
// //      message: error.message || "internal server error",
// //      success: false,
// //   })
// //  }
 
// //      }
     
//      //update user(id, body)
//      bookController.updateBook = async (req, res) => {
//          try {
             
//              const id = (req.params.id);
//              const { title, author, edition, genre, price, postedBy } = req.body;
//              //validation
//              if (!title || !author || !edition || !genre || !price || !postedBy) {           
//                  return res.status(400).json({
//                      message: "All fields are required",
//                      success: false,
//                  });
//              }
 
//              const book = await bookModel.findById(id);
//              if (!book) {
//                  return res.status(404).json({   
//                      message: "book not found",
//                      success: false,
//                  });
//              }
 
//              //update book
//              const updatedBook = await bookModel.findByIdAndUpdate(id, {
//                  title: title,
//                  author: author,
//                  edition: edition,
//                  genre: genre,
//                  price: price,
//                  postedBy: postedBy
//              }) 
             
//              await updatedBook.save();
 
             
//                  res.status(201).json({
//                      message: "book updated successfully",
//                      success: true,
//                      data: updatedBook
//                  })
//              }catch (error) {
//              res.status(500).json({
//                  message: error.message || "internal server error",  
//                  success: false,
//               })
//          }
 
//      }
//      //delete user(id)
//      bookController.deleteBook = async (req, res) => {
//          try {
//                  const id = req.params.id;
//                  const book = await bookModel.findById(id);
//              if (!book) {
//                   res.status(404).json({
//                      message: "user not found",
//                      success: false
//                  })
//              }   
 
//              await bookModel.findByIdAndDelete(id);
            
//                  res.status(200).json({
//                      message: "user deleted successfully",
//                      success: true,
//                  })
 
//              } catch (error) {
//              res.status(500).json({
//                  message: error.message || "internal server error",
//                  success: false,
//              })
//          }
//      }
 
//      bookController.getAllBook = async (req, res) => {
//          try {
//              const book = await bookModel.find().populate("postedBy", "username email role");
//              if (!book){
//              res.status(400).json({
//                  message: "books not found",
//                  success: false,
//              })
//          }

//          res.status(200).json({
//              message: "books fetched successfully",
//              success: true,
//              data: book,
 
//          })
//      }catch (error) {
//              res.status(500).json({
//                  message: error.message || "internal server error",  
//                  success: false,
//               })
//          }
//      }
 
//      bookController.getSingleBook = async (req, res) => {
//          try{
//              const id = req.params.id;
//              const book = await bookModel.findById(id);
//              if (!book) {
//                  res.status(404).json({
//                      message: "book not found",
//                      success: false,
//                  })
//              }
//              res.status(200).json({
//                  message: "book fetched successfully",
//                  success: true,
//                  data: user,
//              })
             
 
//          }catch (error) {
//              res.status(500).json({
//                  message: error.message || "internal server error",  
//                  success: false,
//               })
//          }
//      }


//      export default bookController;


// import bookModel from "../model/book.model.js";

bookController. getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();

    if (!books) {
      res.status(400).json({
        message: "No Books Found",
        success: false,
      });
    }

    if (books.length === 0) {
      res.status(400).json({
        message: "Book Collection is Empty",
        success: false,
      });
    }

    res.status(200).json({
      message: "Books Fetched Successfully",
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

bookController. createBook = async (req, res) => {
  try {
    const { title, author, edition, genera, price, postedBy } = await req.body;

    // check if the body is empty
    if (!title || !author || !edition || !genera || !price) {
      res.status(400).json({
        message: "All Fields are Required!",
        success: false,
      });
    }

    const newBook = new bookModel({
      title,
      author,
      edition,
      genera,
      price,
      postedBy,
    });

    if (!newBook) {
      res.status(400).json({
        message: "Failed to Create Book",
        success: false,
      });
    }

    await newBook.save();

    res.status(201).json({
      message: "Book Created Successfully",
      success: true,
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

bookController.getSingleBook = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await bookModel.findById(id);
    if (!book) {
      res.status(404).json({
        message: "Book Not Found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Book Fetched Successfully",
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

//delete book

bookController . deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await bookModel.findById(id);
    if (!book) {
      res.status(404).json({
        message: "Book Not Found",
        success: false,
      });
    }

    await bookModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "Book Deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

// update book

bookController.updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, edition, genera, price, postedBy } = await req.body;

    if (!title || !author || !edition || !genera || !price) {
      res.status(400).json({
        message: "All Fields are Required!",
        success: false,
      });
    }

    const book = await bookModel.findById(id);
    if (!book) {
      res.status(404).json({
        message: "Book Not Found",
        success: false,
      });
    }

    const updatedBook = await bookModel.findByIdAndUpdate(id, {
      title,
      author,
      edition,
      genera,
      price,
      postedBy,
    });

    await updatedBook.save();

    res.status(200).json({
      message: "Book Updated Successfully",
      success: true,
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

export default bookController;