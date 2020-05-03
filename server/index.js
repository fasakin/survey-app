const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "Hello world" });
});

app.listen(5000, () => {
  console.log("Web server is listening on port 5000");
});
