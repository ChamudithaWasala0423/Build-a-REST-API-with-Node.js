const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`server is running on port ${port}`));

app.get("/", (req, res) => {
  res.send("Success");
});

app.get("/blogs", (req, res) => {
  res.send("Blogs called!");
});
