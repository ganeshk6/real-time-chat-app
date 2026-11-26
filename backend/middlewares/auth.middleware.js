import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/response.js";

export const authenticateToken = (req, res, next) => {
    try{
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if(!token){
            return errorResponse(res, "Unauthorized", 401);
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                return errorResponse(res, "Invalid token", 403);
            }
            req.user = decoded;
            next();
        });
    }catch(error){
        return errorResponse(res, error.message, 500);
    }
}