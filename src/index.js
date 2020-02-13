const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express()
app.use(cors)


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

if (!module.parent) {
  app.listen(5000, () => {
    console.log(`CORS-enabled web server listening on port 5000`);
  });
}

module.exports = app;