const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.json());

app.post("/login", (req, res) => {
  console.log(req.body);
  const {  secret, email, password, expiresIn } = req.body;

  // Generate the token
  const token = jwt.sign({ email, password }, secret, {
    expiresIn: expiresIn,
  });

  res.json({ token });
});

app.get("/index.css", (req, res) => {
  return res.sendFile(path.join(__dirname, "/index.css"));
});

app.get("/background6.jpg", (req, res) => {
  return res.sendFile(path.join(__dirname, "/background6.jpg"));
});

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
