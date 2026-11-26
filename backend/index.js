import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.connect.js";
import { sequelize } from "./models/index.js";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
);

app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined', {
    stream: accessLogStream
}));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});


const startServer = async () => {
    try {
        await connectDB();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();