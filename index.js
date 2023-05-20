const express = require("express");
const app = express();

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});

// server running
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
