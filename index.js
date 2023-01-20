require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { port } = require("./config/key");
// const routes = require("./routes");
const cors = require("cors");
const TestSchema = require("./models/test");

const url =
  "mongodb+srv://admin:anasalam786@my-project.96wsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

// app.use(routes);
app.get("/", (req, res) => res.send("Working"));

app.post("/api/server", (req, res) => {
  TestSchema.insertMany([
    {
      data: req.body,
    },
  ])
    .then((res) => {
      console.log(res);
      res.send("Success");
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400).json(err);
    });
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on ${port}`);
});
