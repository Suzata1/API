import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authentication = (req, res, next) => {
    try{
        const token = req.headers.authorization;
        // Assuming token is sent as "Bearer

        if (!token) {
         res.status(401).json({
                message: "Access denied. No token provided.",
                success: false,
            });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        req.user = decodedToken; // Attach user info to the request object
        next(); // Proceed to the next middleware or route handler

    }catch(err){
        res.status(500).json({
            message: err.message || "internal server error",      
            success: false,
        })
    }   
}
