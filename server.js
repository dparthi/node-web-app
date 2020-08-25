'use strict';

const express = require('express');
var os = require("os");
var hostname = os.hostname();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello my dear. This is ' + hostname);
  console.log(JSON.stringify(req.headers));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

