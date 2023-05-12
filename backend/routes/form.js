const express = require("express");
const router = express.Router();
const formModel = require("../models/formModel");
const multer = require("multer");

const upload = multer({ dest: "assets/" });

// Set main Page
router.get("/", async (req, res) => {
  const form = await formModel.find();
  res.json(form);
});

// Delete Data from database through ID
router.get("/:id", async (req, res) => {
  const post = await formModel.findById(req.params.id);
  res.send(post);
});

// Send data to Database
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file.filename;
    const form = await formModel({ name, description, price, image });
    await form.save();
    res.send(form);
  } catch (error) {
    console.log(error);
  }
});

// Delete Data from database through ID
router.delete("/:id", async (req, res) => {
  const post = await formModel.findById(req.params.id);
  post.delete();
  res.send(post);
});

// Update Data from database through ID
router.put("/:id", async (req, res) => {
  const post = await formModel.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });
  res.send(post);
});

module.exports = router;
