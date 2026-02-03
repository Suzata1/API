//logic
import {data} from "../model/user.model.js"
const userController = {}

userController.getUsers = (req, res) => {
    const datas = data

    if(!datas){
        res.status(404).json({
            message:"User Data not found    ",
            success:false
            
        })
    }
        res.status(200).json({
            message:"User Data retrieved successfully",
            success:true,
            data:datas
        })
    }
    userController.getUserById = (req,res)=>{
        const id = Number(req.params.id)
        
       const ById =data.find((value)=>{
        return value.id === id;
       });
         if(!ById){
            res.status(404).json({
                message:"data of Id ${id} not found",
                success:false

            })
         }
         res.status(200).json({
            message:"User Data retrieved successfully for this id",
            success:true,
            data:ById
         })
        };

        userController.registerUser= (req,res)=>{
            const {name,age,email} = req.body

            if(!name || !age || !email){
                res.status(400).json({
                    message:"Please provide all required fields",
                    success:false
                })
            }
            const users = data.push({
                id:data.length + 2,
                name,
                email,
                age 
            });
           
           res.status(201).json({
            message:"Books registered successfully",
            success:true,
           
           });
        };

userController.deleteUser = (req,res)=>{

    const id = Number(req.params.id)   

    const UserIndex = data.findIndex((value)=>{
        return value.id === id;
    })

    if(UserIndex === -1){
        res.status(404).json({
            message:`User  not found`,
            success:false
        })
    }
    const deleteData = data.splice(UserIndex,1); //removing 1 element from the index
    res.status(200).json({
        message:"User deleted successfully",
        success:true,
        data:deleteData
    })       


}
userController.updateUser = (req,res)=>{
    const id = Number(req.params.id);
    const {name,age,email} = req.body;
   
    if (!name || !age || !email){
        res.status(400).json({
            message:"Please provide all required fields",
            success:false
        });
    
    }
    const UserFind = data.find((value)=>{
        return value.id === id;
    });
    UserFind.name = name,
    UserFind.age = age,
    UserFind.email = email

    
   res.status(201).json({
        message:"User updated successfully",
        success:true,
        payload:{
        id:id,
        name:name,
        age:age,
        email:email,
        }
    });
    console.log(UserFind);
    }

    export default userController