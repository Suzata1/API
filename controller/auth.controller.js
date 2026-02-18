 import jwt from 'jsonwebtoken';
import userModel from '../model/user.model.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
 export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Validate user credentials (this is just a placeholder, you should implement your own logic)
        if (!email || !password) {
            response.status(400).json({
                message: "Email and password are required",
                success: false,
            });
        }
        // Assuming you have a User model and a method to validate credentials
        const user = await userModel.findOne({ email });
        if (!user ) 
             res.status(400).json({
                message: " user with this email does not exits ",
                success: false,
            });
        
          const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
                res.status(400).json({
                message: "Invalid password",
                success: false,
            });
        
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // res.cookie('token', token, {
        //     age : 1000*60*60*24,
        //     sameSite:"strict"
        // });
        res.status(200).json({
            message: "Login successful",
            success: true,
            data : {
                id:user._id,
                name: user.name,
                email: user.email
            },
            token: token
        })
    
}
        
    }catch (error) {
        res.status(500).json({
            message: error.message || "internal server error",
            success: false,
        })
    }   
 }
export const forgetPassword = async (req, res) => {
    try{
        const { email } = req.body;
        if (!email) {
            res.status(400).json({
                message: "Email is empty",
                success: false,
            });
        }
            const exitUser = await userModel.findOne({ email });
            // console.log(exitUser);
            //4 digit otp
            const otp = () =>{
                let num=[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
                let otpVal = "";
                for(let i=0; i<4; i++){
                    const digit = num[Math.floor(Math.random() * num.length)];
                    otpVal += digit;
                }
                return otpVal;
            };
            const otpVal = otp();

            const otpExpiries = new Date(Date.now() + 10 * 60 * 1000);

            exitUser.otp = otpVal;
            exitUser.otpExpiries = otpExpiries;
            exitUser.otpVerified = false;

            await exitUser.save();

          const transporter = nodemailer.createTransport({
 
  service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
    }
});
 const mailOptions = {
    from: process.env.EMAIL_ID,
    to: email,
    subject: 'OTP for password reset',
    text: `Your OTP for password reset
        is ${otpVal}`

 }  
 const mailResponse = await transporter.sendMail(mailOptions);
 res.status(200).json({
    message: "OTP sent to email",
    success: true,
    // data: {
    //     otp: otpVal,
    //     mailResponse: mailResponse.response
    // }
    })

    }
    catch (error) {
        res.status(500).json({
            message: error.message || "internal server error",
            success: false,
        })
    }   
}

export  const verifyOtp = async (req, res) => {
    try{
        const { email, otp } = req.body;
        const user =await userModel.findOne({ email });
        if (!user) {
            res.status(400).json({
                message: "User with this email does not exist",
                success: false,
            });
        }
        console.log("User.otp", otp);
        console.log("User OTP", user.otp);
        if(user.otp.trim() !== otp ) {
            res.status(400).json({
                message: "Invalid OTP",
                success: false,
            });
        }
       if (user.otpExpiries <  Date.now()) {
        res.status(400).json({
            message: "OTP has expired",
            success: false,
        });
       }
       user.otpVerified = true;
         await user.save();
         res.status(200).json({
            message: "OTP verified successfully",
            success: true,
        })

                    

    }catch (error) {
        res.status(500).json({
            message: error.message || "internal server error",
            success: false,
        })  

    }
}
//rest password and matching new password and confirm password and otp verification
export const resetPassword = async (req, res) => {
    try{
        const { email, newPassword, confirmPassword } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(404).json({
                message: "User with this email does not exist",
                success: false,
            });
        }
        //logic 
        if (newPassword !== confirmPassword) {
            res.status(400).json({
                message: "New password and confirm password do not match",
                success: false,
            });
        }
        if (!user.otpVerified) {
            res.status(400).json({
                message: "OTP is  not verified",
                success: false,
            });
        }
       const salt = await bcrypt.genSalt(10);
       const hashPassword = await bcrypt.hash(newPassword, salt);
         
        user.password = hashPassword;
        user.otp = null;
        user.otpExpiries = null;
        user.otpVerified = false;
        await user.save();
        res.status(200).json({
            message: "Password reset successfully",
            success: true,
        })

    }catch (error) {
        res.status(500).json({
            message: error.message || "internal server error",  
            success: false,
        })
    }
}