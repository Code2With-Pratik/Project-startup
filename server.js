const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", __dirname + "/views");
app.set("layout", "layouts/main"); // Main layout file

// Middleware to serve static files (CSS, JS, Images)
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.render("index", { title: "Home Page" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
