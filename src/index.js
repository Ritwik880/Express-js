const path = require("path");
const express = require('express')
const app = express()
const port = 3000

const staticPath = path.join(__dirname, '../public');
console.log(__dirname);

app.use(express.static(staticPath));

app.get('/', function(req, res) {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})