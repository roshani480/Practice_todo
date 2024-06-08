const express = require("express");
const tasklist = require("../model/model");
const router = express.Router();

router.post("/addtask", async (req, res) => {
  const taskadd = req.body;
  console.log(taskadd);

  const newTask = await tasklist.create({ taskadd } );
  console.log(newTask);
  res.send("task added successfully");
});

module.exports = router;
