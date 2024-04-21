const express = require("express");
const app = express();
const studentRouter = require("./route/studentRouter.js");

app.use(express.json());

app.use("/students", studentRouter);

//Function to catch an invalid URL
app.use((req, res, next) => {
  res.status(404).json({ message: "We cannot retrieve the requested page" });
});

//Error function
app.use(function (err, req, res, next) {
  console.log("We encountered an error : " + err);
  res.send(err);
});

//bootup
app.listen(process.env.PORT, () => {
  console.log("Server is running at port " + process.env.PORT);
});
