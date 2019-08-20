const http = require('http');
const app = require('./index');

const port = process.env.PORT || 3000;

const server = http.createServer(app);
console.log("listening on port 3000");
server.listen(port);