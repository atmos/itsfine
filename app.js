const http = require("http")
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
  res.writeHead(301,
    { Location: "https://user-images.githubusercontent.com/38/34930232-6b7e1e7e-f97d-11e7-94c0-8df3f46f41e4.gif" }
  );
  res.end();
}).listen(PORT)
