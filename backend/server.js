require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.route");
// const blogPostRoutes = require("./routes/blocPost.route");
// const commentRoutes = require("./routes/comment.route");
// const dashboardRoutes = require("./routes/dashboard.route");
// const aiRoutes = require("./routes/ai.route");

const app = express();

// middleware to handle CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["content-Type", "Authorization"],
    })
);

// connect Database
connectDB();

// middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/posts", blogPostRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/dashboard-summary", dashboardRoutes);

// app.use("/api/ai", aiRoutes);

// server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "upload"), {}));

// start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));