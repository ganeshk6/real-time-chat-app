
import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to database:", error.message);
    throw error;
  }
};
