import http from "http";
import path from "path";
import fs from "fs";

const handleRequest = (request, response) => {
  let pathname = request.url;

  if (pathname === "/") {
    pathname = "/index.html";
  }

  const ext = path.extname(pathname);
  const mapExtToType = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css"
  };

  const contentType = mapExtToType[ext] || "text/plain";

  fs.readFile(path.resolve(path.dirname("")) + pathname, (error, data) => {
    if (error) {
      response.writeHead(500);
      return response.end("cannot load " + pathname);
    }

    response.writeHead(200, {
      "Content-Type": contentType
    });
    response.end(data);
  });
};

let server = http.createServer(handleRequest);
server.listen(8080);
console.info("Server started at port 8080");
