require('dotenv').config({silent: true});

const express = require('express');
const bodyParser = require('body-parser');
const query = require('./lib/query.js')


const assistant = require('./lib/assistant.js');
const port = process.env.PORT || 3000;

const tesseract = require('./lib/tesseract-ocr.js');
const mainDriver = require('./lib/main.js');

const http = require('http');
const querystring = require('querystring');

const atob = require('atob');
const fs = require('fs');

const app = express();
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 50000 }));

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
    var base64 = "data:image/jpg;base64," + req.body.photo;

    var post_data = querystring.stringify({
          'apikey': 'b2c7baf64b88957',
          'base64image': base64,
          'scale' : true,
          'OCREngine' : 2
      });

    var post_options = {
      host: 'api.ocr.space',
      path: '/parse/image',
      method: 'POST',
      headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length
        }
    };

    var post_req = http.request(post_options, function(response) {
      response.setEncoding('utf8');
      response.on('data', async function (chunk) {
          let text = JSON.parse(chunk);
          let words = text["ParsedResults"][0].ParsedText.replace(/\n/g, " ").toLowerCase().split(/[\s,.;:]+/);

          query.open();

          var list_of_ingreds = []
          for (i = 0; i < words.length; ++i) {
            let resp = await query.select_ingred(words[i]);
            if (resp.length != 0) { list_of_ingreds.push(resp); }
          }
          console.log(list_of_ingreds)
          res.send(list_of_ingreds);
          query.close();
      });
    });

    post_req.write(post_data);
    post_req.end();
 });

const server = app.listen(port, () => {
   const host = server.address().address;
   const port = server.address().port;
   console.log(`SolutionStarterKitDisastersServer listening at http://${host}:${port}`);
   testConnection();
});
