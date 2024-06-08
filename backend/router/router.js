const express = require("express");
const tasklist = require("../model/model");
const router = express.Router();

router.post("/addtask", async (req, res) => {
  const {inputtask} = req.body;
  
  const newTask = await tasklist.create({inputtask});
  console.log(newTask);
  res.send("task added successfully");
});

router.get("/displaytask", async (req, res) => {
  const alltask = await tasklist.find();
  res.send(alltask);
});

module.exports = router;
