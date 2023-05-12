const express = require("express");
const app = express();
const form = require("./routes/form");

const mongoose = require("mongoose");
//require("dotenv/config");
const cors = require("cors");
const bodyParser = require("body-parser");

// const static = require("express-static");

// Port Connection
app.listen(6100, () => {
  console.log("Port is connected AT " + 6100);
});
app.use(cors());
app.use(express.static("assets"));

// Database Connection Established
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/ecom", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("Database Connected");
});

app.use(bodyParser.json());
app.use("/forms", form);

const colors = require("colors");
const AccountSchema = require("./LogModel");

const contactSchema = require("./models/ContactModel");

//Api for Signup function
app.post("/signup", async (req, res) => {
  const userDetails = await AccountSchema(req.body);

  try {
    const userExist = await AccountSchema.findOne({
      email: req.body.email,
    });
    //Asume email already exist_
    if (userExist) {
      res.json("Email Already Exist");
    } else {
      //for new user
      userDetails.save();
      res.json("User Created Successfully");
    }
  } catch {
    console.log("Api failed");
  }
});
// API For Login
app.post("/login", async (req, res) => {
  try {
    const LoginUser = await AccountSchema.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    //assume condition true/ credentials matched
    if (LoginUser) {
      res.json({ message: "Login Successfully", LoginUser: LoginUser });
    } else {
      res.json("userName or password is invalid");
    }
  } catch {
    console.log("Api failed");
  }
});

// for creating the API of contact
app.post("/contact", (req, res) => {
  const data = contactSchema(req.body);
  data
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});
