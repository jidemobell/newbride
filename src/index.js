require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require('path')

const tracer = require('tracer');
const colors = require('colors');

// eslint-disable-next-line import/prefer-default-export
const logger = tracer.colorConsole({
  filters: [
    colors.underline, colors.green,
    {
      warn: colors.yellow,
      error: [colors.red, colors.bold],
    },
  ],
});

const app = express()
app.use(cors)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log(process.env.PORT)



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

if (!module.parent) {
  app.listen(process.env.PORT || 5000, () => {
    logger.info(`CORS-enabled web server listening on port ${process.env.PORT || 5000}`);
  });
}

module.exports = app;