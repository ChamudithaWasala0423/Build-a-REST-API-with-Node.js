const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Success");
});

const blog = [];

app.get("/blogs", (req, res) => {
  res.send(blog);
});

app.post("/blogs", (req, res) => {
  blog.push({ id: blog.length + 1, ...req.body });
  res.status(201).send("Success");
});

app.listen(port, () => console.log(`server is running on port ${port}`));
