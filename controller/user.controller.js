import userModel from "../model/user.model.js";
 
const userController = {}

userController.registerUser = async (req, res) => {
    try {
        const { username, email, password, role, gender } = req.body;
        //validation
        if (!username || !email || !password || ! gender) {
            return res.status(400).json({
                message: "user cannot be empty",
                success: false,
            });
        }
        
        //check if the user already exists
    const user = await userModel.findOne({$or: [{ email: email }, { username: username }]})
       

    if (user) {
        return res.status(400).json({
            message: "user already exists",
            success: false,
        });
    }
    //create new user
    const newUser = await userModel.create({
        username,
        email,
        password,
        role,
        gender
    })
    
        await newUser.save();
        //response
        res.status(201).json({
            message: "user register successfully",
            success: true,
            data: newUser
        })
    } catch (error) {
 res.status (500).json({
    message: error.message || "internal server error",
    success: false,
 })
}

    }
    
    //update user(id, body)
    userController.updateUser = async (req, res) => {
        try {
            
            const id = (req.params.id);
            const { username, email, password, role, gender } = req.body;
            //validation
            if (!username || !email || !password || !role
                || !gender) {           
                return res.status(400).json({
                    message: "user cannot be empty",
                    success: false,
                });
            }

            const user = await userModel.findById(id);
            if (!user) {
                return res.status(404).json({   
                    message: "user not found",
                    success: false,
                });
            }

            //update user
            const updatedUser = await userModel.findByIdAndUpdate(id, {
                username: username,
                email: email,
                password: password,
                role: role,
                gender: gender
            }) 
            
            await updatedUser.save();

            
                res.status(201).json({
                    message: "user updated successfully",
                    success: true,
                    data: updatedUser
                })
            }catch (error) {
            res.status(500).json({
                message: error.message || "internal server error",  
                success: false,
             })
        }

    }
    //delete user(id)
    userController.deleteUser = async (req, res) => {
        try {
                const id = req.params.id;
                const user = await userModel.findById(id);
            if (!user) {
                 res.status(404).json({
                    message: "user not found",
                    success: false
                })
            }   

            await userModel.findByIdAndDelete(id);
           
                res.status(200).json({
                    message: "user deleted successfully",
                    success: true,
                })

            } catch (error) {
            res.status(500).json({
                message: error.message || "internal server error",
                success: false,
            })
        }
    }

    userController.getAllUsers = async (req, res) => {
        try {
            const user = await userModel.find();
            if (!user){
            res.status(400).json({
                message: "users not found",
                success: false,
            })
        }
        res.status(200).json({
            message: "users fetched successfully",
            success: true,
            data: user,

        })
    }catch (error) {
            res.status(500).json({
                message: error.message || "internal server error",  
                success: false,
             })
        }
    }

    userController.getSingleUser = async (req, res) => {
        try{
            const id = req.params.id;
            const user = await userModel.findById(id);
            if (!user) {
                res.status(404).json({
                    message: "user not found",
                    success: false,
                })
            }
            res.status(200).json({
                message: "user fetched successfully",
                success: true,
                data: user,
            })
            

        }catch (error) {
            res.status(500).json({
                message: error.message || "internal server error",  
                success: false,
             })
        }
    }

export default userController;