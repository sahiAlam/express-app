const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Calculation</h1>");
});

// calculator
app.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/calculator.html");
});
app.post("/calculator", (req, res) => {
  const sum = Number(req.body.num1) + Number(req.body.num2);
  console.log(sum);
  res.send(`<h2>Result is = ${sum} </h2>`);
});

// BMI Calculator
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  const height = req.body.height;
  const weight = req.body.weight;
  const BMI = weight / (height * height);

  res.send(`<h2>BMI is ${BMI}</h2>`);
});

// server running
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
