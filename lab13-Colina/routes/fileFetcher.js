const express = require("express");
const path = require("path");
const options = {
  caseSensitive: false,
};

const router = express.Router(options);

router.get("/student-image", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "lab12-Colina/picture.jpg"));
});

router.get("/lesson-pdf", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "lab12-Colina/http-lesson.pdf")
  );
});

router.get("/about-text", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "lab12-Colina/about.txt"));
});

module.exports = router;
