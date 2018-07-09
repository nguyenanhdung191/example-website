const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/", "home.html"));
});
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/", "home.html"));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/", "about.html"));
});
app.get("/challenge", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/", "challenge.html"));
});

app.listen(6789, () => console.log("Example app listening on port 6789!"));
