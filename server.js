const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");

const indexRouters = require("./routes/index");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout"); // Main layout file
app.use(expressLayouts);

// Middleware to serve static files (CSS, JS, Images)
app.use(express.static("public"));

// Connection to MongoDB
const mongoose = require("mongoose");
mongoose.connect(process.env.Database_URL, {
    useNewUrlparser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


app.use("/", indexRouters);

// Start the server
app.listen(process.env.PORT || 3000)
