const http = require('http');
const url = require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const u = url.parse(req.url);
  console.log(u)
  const q = querystring.parse(u.query)
  console.log(q)
  let text = ''
  Object.keys(u).map((x) => {
    text += `${x}=${q[x]} \n`
  })
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${ text }`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
