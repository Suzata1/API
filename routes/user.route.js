import userController from "../controller/user.controller.js";
import {Router} from "express";

const router = Router()

router.get("/",userController.getUsers);
router.get("/:id",userController.getUserById);
router.post("/",userController.registerUser);
router.delete("/:id",userController.deleteUser);
router.put("/update/:id",userController.updateUser);

export default router


