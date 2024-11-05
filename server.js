const express = require("express");

const app = express();

const routes = express.Router();

app.use(express.json());

app.use(
  "/api",
  routes.get("/testing", (req, res) => {
    console.log("Get Request");

    res.status(200).json({ message: "Hello" });
  })
);

app.listen(8000, () => {
  console.log("Port is Using");
});
