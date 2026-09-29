import express from "express";
import "dotenv/config";
import connectDB from "./database/db.js";
import authRoute from "./routes/authRoute.js";
import websiteRoute from "./routes/websiteRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();


// middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://your-frontend-domain.vercel.app"
    ],
    credentials:true
}));


// database
connectDB();


// test route
app.get("/", (req,res)=>{
    res.send("IntelliSite Backend Running 🚀");
});


// routes
app.use("/api/auth", authRoute);
app.use("/api/website", websiteRoute);
app.use("/api/payment", paymentRoute);


// export for Vercel
export default app;


// only for local development
if(process.env.NODE_ENV !== "production"){
    const PORT = process.env.PORT || 8000;

    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
}