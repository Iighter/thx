const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use('/', (req, res) => {
  const url = 'https://discord.com' + req.originalUrl;
  const headers = {
    'User-Agent': req.get('User-Agent'),
    'Referer': 'https://discord.com',
    'Host': 'discord.com'
  };
  req.pipe(request({url, headers})).pipe(res);
});

app.listen(port, () => {
  console.log(`Webproxy listening at http://localhost:${port}`);
});
