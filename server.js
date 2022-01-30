const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./dist")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) return console.log(err);
  console.log("Running...");
});
