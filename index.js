const http = require('http');
const generator = require('chinese-address-generator/generator4');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);

  const address = generator.fabricateFullAddress(hasCode = true);
  const code = address.code.slice(0, 6);
  const data = {
    region: address.region,
    code: code
  };
  const json = JSON.stringify(data);

  res.end(json);
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});