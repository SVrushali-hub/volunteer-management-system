import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://volunteer-management-system-sepia.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/admin", adminRoutes);
app.get("/",(req, res)=>{
    res.send("Volunteer Management System API is running...");   
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running in ${PORT}`)
})
