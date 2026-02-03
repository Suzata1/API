
import bookController from "../controller/book.controller.js";
import {Router} from "express";


const router = Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.registerBook);
router.put("/:id", bookController.updateBook);
 router.patch("/:id", bookController.updateBook);
// router.delete("/:id", bookController.deleteBook);

export default router;
