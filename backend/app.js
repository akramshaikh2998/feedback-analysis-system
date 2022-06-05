const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const auth = require("./routes/auth");
const port = process.env.port || 8080;
const { ValidationError } = require("express-validation");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb://localhost:27017/studentsdata",
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(error);
    }

    const db = mongoose.connection;

    db.on("error", () => {
      console.log("error in conection");
    });
    db.once("open", () => {
      console.log("Connected");
    });

    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    app.use(cors({ origin: "http://localhost:4200" }));

    app.use("/", auth);

    app.use(function (err, req, res, next) {
      if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
      }

      return res.status(500).json(err);
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
);
