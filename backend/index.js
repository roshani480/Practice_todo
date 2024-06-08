const express = require("express");
const mongoDbCon = require("./dbcon");
const app = express();
const userRoutes = require("./router/router");

mongoDbCon();

app.use(express.json());

app.use("/api", userRoutes);

app.listen(8000, () => {
  console.log("server is listening on 8000");
});
