const fs = require("fs");
fs.readFile("js/input.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
