const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

//template engine
app.set("view engine", "ejs");

// Mıddleware
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});

const port = 3377;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
