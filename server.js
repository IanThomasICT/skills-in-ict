const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

let distDir = __dirname + "/dist/"
app.use(express.static(distDir))




var server = app.listen(process.env.PORT || 8080, () => {
  var port = server.address().port;
  console.log(`Express server is running on ${port}`)
})


