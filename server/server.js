const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Serve the static files from the public folder
app.use(express.static(__dirname + "/public"));
// Redirect all traffic to the index

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/sayHello", (req, res) => {
  return res.send("Hello from backend");
});

app.listen(9090, (err) => {
  if (err) {
    console.log("can not listen");
    return;
  }
  console.log("Server listening to prt 9090");
});
