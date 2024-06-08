const mongoose = require("mongoose");

const mongoDbCon = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/doapp");
    console.log("mongodb connected");
  } catch (err) {
    console.log("error occured", err);
  }
};

module.exports = mongoDbCon;
