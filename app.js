const express = require("express");

const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is working...");
});

module.exports = { app };
