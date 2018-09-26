const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const Deck = require('./server/controllers/deck.controller');

const http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/dist/mangoz'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/mangoz/index.html'));
});



http.listen(port, function(){
  console.log(`listening on port ${port}`);
});
