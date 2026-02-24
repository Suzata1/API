import documentController from "../controller/document.controller.js";
import {Router } from "express";
import upload from "../middleware/upload.js";   

const router = Router();

router.post("/upload", upload.array ("file" , 2), documentController.uploadDocument);   
export default router;