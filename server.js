const express = require("express");
const app = express();
const port = 3000;

//create a middleware for converting json to object
app.use(express.json());

//create a middleware for convert id
const convertId = (req, res, next) => {
  const id = req.params.id;
  req.params.id = parseInt(id);
  next();
};

app.get("/", (req, res) => {
  res.send("Success");
});

const blog = [];

app.get("/blogs", (req, res) => {
  res.send(blog);
});

app.post("/blogs", (req, res) => {
  blog.push({ id: blog.length + 1, ...req.body });
  res.status(201).send("Success post");
});

app.put("/blogs/:id", convertId, (req, res) => {
  const id = req.params.id;
  const index = blog.findIndex((item) => item.id === id);
  //console.log(index);
  blog[index] = req.body;
  res.send(blog[index]);
});

//REST API can asccess single object
app.get("/blogs/:id", convertId, (req, res) => {
  const id = req.params.id;
  const index = blog.findIndex((item) => item.id === id);
  res.send(blog[index]);
});

//delete single object
app.delete("/blogs/:id", convertId, (req, res) => {
  const id = req.params.id;
  const index = blog.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).send("Not found");
  }
  blog.splice(index, 1);
  res.send("Success delete");
});

app.listen(port, () => console.log(`server is running on port ${port}`));
