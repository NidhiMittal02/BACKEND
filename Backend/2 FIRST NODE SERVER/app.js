const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

const port = 3010;
server.listen(port,()=>{
  console.log(`Server is running on address http://localhost:${port}`);
});