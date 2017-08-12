const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const timestampStr = '### Creation Timestamp:';

function timestampCacheManifest() {
  const now = Date.now();
  let str = `${timestampStr} ${now}`;
  fs.readFile(`${__dirname}/static/offline.manifest`, 'utf8', (err, data) => {
    const idx = data.indexOf(timestampStr);
    if (idx >= 0) { // remove existing timestamp
      const dataMinusTimestamp = data.substr(0, idx); // assuming timestamp is last line of file
      fs.writeFile(`${__dirname}/static/offline.manifest`, dataMinusTimestamp, (err, data) => {
        if (err) throw err;
        console.log('Removed old timestamp.');
      });
    }
    fs.appendFile(`${__dirname}/static/offline.manifest`,
      str, (error) => {
        if (error) throw error;
        console.log(`Updated manifest with ${now}.`);
      });
  });
}

timestampCacheManifest();

app.set('port', (process.env.PORT || 5050));
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
