import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/volunteers", volunteerRoutes);
app.get("/",(req, res)=>{
    res.send("Volunteer Management System API is running...");   
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running in ${PORT}`)
})