const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
var methodOverride = require("method-override");

const postController = require("./controllers/postController");
const pageController = require('./controllers/pageController');

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
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// Routes
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);

const port = 3377;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
