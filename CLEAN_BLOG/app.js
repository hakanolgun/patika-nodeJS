const express = require('express');

const app = express();

app.get('/', (req, res) => {

  const blog = {
    id: 1,
    title: "Blog Title",
    description: "Blog description"
  }
  res.send(photo)
})

const port = 3377;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});