const express = require("express");
const connectDB = require("./Config/db");
require("dotenv").config();
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}.`);
});
