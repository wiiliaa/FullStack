const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
const app = express();
const cors = require("cors");
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://datduong010:datduong010@cluster0.stpxebw.mongodb.net/test"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(4000);
  })
  .catch((error) => console.log(error));

app.use(cors());
app.use("/books", router, (req, res, next) => {});
app.use("/", (req, res, next) => {
  res.send("ok em");
});
