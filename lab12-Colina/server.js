const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    if (req.url === "/image" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.readFile("picture.jpg", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.write(data);
          res.end();
        }
      });
    } else if (req.url === "/pdf" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/pdf" });
      fs.createReadStream("http-lesson.pdf").pipe(res);
    } else if (req.url === "/about" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      let textFile = fs.readFileSync("about.txt");
      res.end(textFile);
    } else if (
      (req.url === "/home" || req.url === "/") &&
      req.method === "GET"
    ) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to my website");
    } else {
      res.writeHead(404);
      res.end("Error 404 : NOT FOUND");
    }
  })
  .listen(3000);
