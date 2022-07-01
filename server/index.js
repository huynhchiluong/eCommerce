const express = require("express");
const app = express();
const port = 5000;

const ProductsRouter = require("./routes/products");

app.use("/products", ProductsRouter);
app.use("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Sever is listening on port " + port);
});
