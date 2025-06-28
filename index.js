const express = require('express');
const { readFile } = require('fs');
const app = express();

app.get('/', (req, res) => {

  readFile('home.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.send(data);
  });   

})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 