const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: { type: String },
});

//collection creation
const tasklist = new mongoose.model("tasklist", taskSchema);

module.exports = tasklist;
