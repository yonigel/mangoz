const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const Deck = require('./server/controllers/deck.controller');
const socketController = require('./server/controllers/socket.controller');
const http = require('http').Server(app);

socketController.initSocket(http);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/dist/mangoz'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/mangoz/index.html'));
});



http.listen(port, function(){
  console.log(`listening on port ${port}`);
});
