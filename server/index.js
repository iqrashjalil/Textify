import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/error-middleware.js";

const app = express();
const Port = process.env.PORT || 4000;
const DatabaseUrl = process.env.DATABASE_URL;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);

const server = app.listen(Port, () => {
  console.log(`Server is Running On ${Port}`);
});

const ConnectDB = async () => {
  try {
    await mongoose.connect(DatabaseUrl);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

ConnectDB();

app.use(errorMiddleware);

export default app;
