import documentController from "../controller/document.controller.js";
import {Router } from "express";
import upload from "../middleware/upload.js";   
import cloudinary from "../middleware/cloudinary.middleware.js";

const router = Router();

router.post("/upload", upload.single("file"), documentController.uploadDocument);   
export default router;