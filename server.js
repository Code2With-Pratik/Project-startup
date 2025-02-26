const express = require("express");
const path = require("path");
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // ✅ Correct way to set views path

// Middleware
app.use(express.static("public"));

// Import routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
