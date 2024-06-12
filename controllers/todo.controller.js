const express = require("express");
const todoModel = require("../model/todo.model");
const router = express.Router();

router.get("/getTodos", (req, res) => {
  todoModel
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error getting data");
    });
});

router.post("/addTodo", async (req, res) => {
  try {
    const newTodo = new todoModel(req.body);
    const data = await newTodo.save();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error Adding data");
  }
});

router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const data = await todoModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error Deleting data");
  }
});

router.put("/updateTodo/:id", async (req, res) => {
  try {
    const data = await todoModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Data Updated Successfully", previousData: data });
  } catch (err) {
    res.status(400).json({ message: "Error", data: err });
  }
});

module.exports = router;
