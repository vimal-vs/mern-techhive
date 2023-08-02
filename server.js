const express = require('express');
const cors = require('cors')
const app = express();

const http = require('http');
const server = http.createServer(app);

app.use(cors());
app.set('port',3001);


app.get('/', function(req, res) {
    res.send('ok');
})


server.listen(3001);