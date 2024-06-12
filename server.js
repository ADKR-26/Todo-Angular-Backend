const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const todoRouter = require("./controllers/todo.controller");

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", todoRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
