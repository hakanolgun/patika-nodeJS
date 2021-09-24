const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const Post = require("./models/Post");

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//template engine
app.set("view engine", "ejs");

// Mıddleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});
app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  console.log(req.body);
  res.redirect('/');
});

const port = 3377;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
