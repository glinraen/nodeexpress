var http = require("http"),
  express - require("express");

const app = express();

const server = new http.Server(app);

server.listen(3000, () => {
  console.log('Server started on Port 3000');
});
