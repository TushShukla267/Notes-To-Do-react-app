const express = require("express");
const connectDB = require("./connection");

const app = express();

// Connect to the database
connectDB();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(1000, () => {
    console.log("Server is running on port 1000");
});
