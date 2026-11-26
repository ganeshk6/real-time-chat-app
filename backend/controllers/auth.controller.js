import User from "../models/user.model.js";
import { successResponse, errorResponse } from "../utils/response.js";
import { generateToken, setTokenCookie, clearTokenCookie} from "../utils/auth.utils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try{
        const { name, email, phone, password } = req.body;

        if(!name || !email || !phone || !password){
            return errorResponse(res, "All fields are required", 400);
        }

        const existingUser = await User.findOne({ where: { email: email.toLowerCase() } });

        if(existingUser){
            return errorResponse(res, "User already exists", 400);
        }

        const existingPhone = await User.findOne({
            where: { phone },
        });

        if (existingPhone) {
            return errorResponse(res, "Phone number is already registered", 409);
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            email: email.toLowerCase(),
            phone,
            password: hashedPassword
        });


        const token = generateToken(user.id);

        setTokenCookie(res, token);

        return successResponse(res, 
            {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                token,
            }, 
        "User registered successfully", 201);

    }catch(error){
        return errorResponse(res, error.message, 500);
    }
}

export const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        if(!password || !email){
            return errorResponse(res, "Email and password are required", 400);
        }

        const user = await User.findOne({
            where: { email: email.toLowerCase() }
        })

        if(!user){
            return errorResponse(res, "Invalid credentials", 401);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return errorResponse(res, "Invalid credentials", 401);
        }

        const token = generateToken(user.id);
        setTokenCookie(res, token);

        return successResponse(res, {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token,
        }, "User logged in successfully", 200);

    }catch(error){
        return errorResponse(res, error.message, 500);
    }
}

export const logoutUser = async (req, res) => {
    try{
        clearTokenCookie(res);
        return successResponse(res, null, "User logged out successfully", 200);
    }catch(error){
        return errorResponse(res, error.message, 500);
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: {
                exclude: ["password"],
            },
        });

        if (!user) {
            return errorResponse(res, "User not found", 404);
        }

        return successResponse(res, user, "User fetched successfully", 200);

    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};