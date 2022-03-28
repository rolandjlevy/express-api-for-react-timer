const express = require('express');
const app = express();
const { PORT, ORIGIN_URI } = process.env;
const moment = require('moment-timezone');
moment.tz.setDefault('Europe/London');
const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
  const origins = [ORIGIN_URI];
  if (origins.includes(req.query.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.query.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }
  next();
});

app.get('/', (req, res) => {
  res.json('OK');
});

app.get('/cutoff', (req, res) => {
  res.status(200).json({ time: moment().add(90, 'minutes').format() });
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
});