import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try{
            const response = await api.post("/auth/login", credentials);
            return response.data.data;
        }catch(error){
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
)

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData, { rejectWithValue }) => {
        try{
            const response = await api.post("/auth/register", userData);
            return response.data?.data;
        }catch(error){
            return rejectWithValue(error.response?.data?.message || "Registration failed");
        }
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try{
            const response = await api.post("/auth/logout");
            return response.data;
        }catch(error){
            return rejectWithValue(error.response?.data?.message || "Logout failed");
        }
    }
)

export const getMe = createAsyncThunk(
    "auth/getMe",
    async (_, { rejectWithValue }) => {
        try{
            const response = await api.get("/auth/me");
            return response?.data?.data;
        }catch(error){
            return rejectWithValue(error.response?.data?.message || "Fetching user data failed");
        }
    }
)