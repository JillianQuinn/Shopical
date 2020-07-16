require('dotenv').config({silent: true});

const express = require('express');
const bodyParser = require('body-parser');

const assistant = require('./lib/assistant.js');
const port = process.env.PORT || 3000;

const tesseract = require('./lib/tesseract-ocr.js');

const app = express();
app.use(bodyParser.json());

const testConnection = () => {
  return assistant.session()
    .then(sessionid => {
      console.log('Successfully connected to Watson Assistant');
      return 'ok';
    })
    .catch(err => {
      const msg = 'Failed to connect to Watson Assistant';
      console.error(msg);
      console.error(err);
      return msg;
    });
}

const handleError = (res, err) => {
  const status = err.code !== undefined && err.code > 0 ? err.code : 500;
  return res.status(status).json(err);
};

app.get('/', (req, res) => {
  testConnection().then(status => res.json({ status: status }));
});

app.get('/api/session', (req, res) => {
  assistant
    .session()
    .then(sessionid => res.send(sessionid))
    .catch(err => handleError(res, err));
});

app.post('/api/message', (req, res) => {
  const text = req.body.text || '';
  const sessionid = req.body.sessionid;

  assistant
    .message(text, sessionid)
    .then(result => res.json(result))
    .catch(err => handleError(res, err));
});

// OCR API
app.post('/api/ocr', (req, res) => {
  console.log(req.body);
 tesseract
   .recognize(req.body.image)
   .then(result => res.json(result))
   .catch(err => handleError(res, err));
});

const server = app.listen(port, () => {
   const host = server.address().address;
   const port = server.address().port;
   console.log(`SolutionStarterKitDisastersServer listening at http://${host}:${port}`);
   testConnection();
});
