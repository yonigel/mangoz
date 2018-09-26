const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const Deck = require('./server/controllers/deck.controller');

let deck = new Deck();
console.log(`cards order before shuffling`)
for (let i = 0; i < deck.cards.length; i ++) {
    console.log(deck.cards[i]);
}

deck.shuffle();
for (let i = 0; i < deck.cards.length; i ++) {
    console.log(deck.cards[i]);
}

let card = deck.draw();
console.log(`got card ${card}`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/dist/mangoz'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/dist/mangoz/index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));