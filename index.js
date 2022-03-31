const express = require('express');
const app = express();
const { PORT, ORIGIN_URI_1, ORIGIN_URI_2 } = process.env;
const moment = require('moment-timezone');
moment.tz.setDefault('Europe/London');
const cors = require('cors');
app.use(cors());

const defaultLoopDuration = 0.5;

app.get('/', (req, res) => {
  res.send('OK');
});

const corsOptions = {
  origin: [ORIGIN_URI_1, ORIGIN_URI_2],
  allowedHeaders: ['Origin', 'Accept', 'Content-Type', 'X-Requested-With'] | '*',
  optionsSuccessStatus: 200
}

app.get('/cutoff', cors(corsOptions), (req, res) => {
  const { loopDuration = defaultLoopDuration } = req.query;
  res.status(200).json({ time: moment().add(loopDuration, 'minutes').format() });
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});