import express from "express";
import userController from "../controller/user.controller.js";
import {login, forgetPassword} from "../controller/auth.controller.js";
import {authentication} from "../middleware/authentication.js";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", login);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

router.get("/get", authentication, userController.getAllUsers);
router.get("/:id", userController.getSingleUser);
router.post("/forgetPassword", forgetPassword);

export default router;