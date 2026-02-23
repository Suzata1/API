import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
       type: String,
       required: true,
       unique: true
    },
    email: {
         
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    role: {
        type: String,
        enum: ["admin","user","guest"],
        default:"user"
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    }, 
    profilePicture: {
        type: Object,
    },
    otp:{
        type: String,
    },
    otpExpiries:{
        type: Date,
    },
    otpVerified:{
        type: Boolean,
        default: false,
    }
    
},
{
    timestamps: true
})
const User = mongoose.model("User", userSchema);
export default User;