const express = require('express');
const app = express();
const moment = require('moment-timezone');
const cors = require('cors');
const { PORT, ORIGIN_URI } = process.env;
app.use(cors());

app.use((req, res, next) => {
  let origins = [ORIGIN_URI];
  if (origins.includes(req.query.origin)) {
    res.header("Access-Control-Allow-Origin", req.query.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }
  next();
});

app.get('/', (req, res) => {
  res.json('OK');
});

app.get('/cutoff', (req, res) => {
  moment.tz.setDefault('Europe/London');
  const data = moment().add(2, 'minutes').format();
  res.json({ data });
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
});