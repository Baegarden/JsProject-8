const express = require('express');
const server = express();
const cors = require('cors');
server.use(
  cors({
    origin: '*',
  })
);

const request = require('request');

server.use(express.json());
server.post('/', (req, res) => {
  request(req.body.url, (error, response, body) => {
    if (error) throw error;
    res.json(body);
  });
});

server.listen(3000, () => {
  console.log('Server is running');
});
