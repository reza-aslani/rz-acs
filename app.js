const http = require('http');
const xmlparser = require('express-xml-bodyparser');

const port = 7777;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.headers['content-type'].startsWith('text/xml')) {
    let xml = '';

    req.on('data', (chunk) => {
      xml += chunk;
    });

    req.on('end', () => {
      console.log(`Received SOAP message: ${xml}`);
      // Handle the SOAP message here
      res.statusCode = 200;
      res.end();
    });
  } else {
    res.statusCode = 400;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`ACS running at http://localhost:${port}/`);
});
