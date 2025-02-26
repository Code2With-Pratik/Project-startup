if (process.env.NODE_ENV !== "production") {
    require("dotenv").config(); // ✅ Correct dotenv usage
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout"); // Main layout file
app.use(expressLayouts);

// Middleware to serve static files (CSS, JS, Images)
app.use(express.static("public"));

// Connection to MongoDB
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to Mongoose"))
    .catch(error => console.error("MongoDB connection error:", error));

const db = mongoose.connection;
db.on("error", console.error); // Logs errors directly

// Import routes
const indexRouters = require("./routes/index");
app.use("/", indexRouters);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
