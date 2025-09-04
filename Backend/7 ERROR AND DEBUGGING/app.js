const http = require('http');
const testingSyntax = require('./syntax');
const runtime = require('./runtime');
const logicalError = require('./logical');

const requestHandler = require('./user');

const server = http.createServer(requestHandler);

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   testingSyntax();
//   runtime();
//   logicalError();
// });
const PORT = 301;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});