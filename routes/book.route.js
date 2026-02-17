import express from "express";
import bookController from "../controller/book.controller.js";



const router  = express.Router ();

router.get("/", bookController.getAllBooks);
router.post("/create", bookController.createBook);
router.put("/update/:id", bookController.updateBook);
router.delete("/delete/:id", bookController.deleteBook);

router.get("/:id",bookController.getSingleBook);







export default router ;