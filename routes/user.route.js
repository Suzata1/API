import express from "express";
import userController from "../controller/user.controller.js";
import {login, forgetPassword, verifyOtp, resetPassword} from "../controller/auth.controller.js";
import {authentication} from "../middleware/authentication.js";
import upload from "../middleware/upload.js";


const router = express.Router();

router.post("/register",upload.single("profilePicture"), userController.registerUser);
router.post("/login", login);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

router.get("/get", authentication, userController.getAllUsers);
router.get("/:id", userController.getSingleUser);
router.post("/forgetPassword", forgetPassword);
router.post("/verifyOtp", verifyOtp);
router.post("/resetPassword", resetPassword);

export default router;