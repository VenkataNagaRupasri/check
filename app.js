// app.js
// This script applies SSL certificates to the server for https. 

// https server
const https = require('https');

// Express GET and POST requests
const express = require('express');
const app = express();

// Local file system and pathing
const fs = require('fs');
const path = require('path');

// Serve static files from 'website' folder
app.use(express.static(path.join(__dirname, 'website')));

// SSL options
const options = {
  key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))
};

// Create HTTPS server
https.createServer(options, app).listen(443)

console.log(`HTTPS Server running on https://localhost:443`);
