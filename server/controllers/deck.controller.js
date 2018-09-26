let Card = require('../models/card.model');

module.exports = Deck;

function Deck() {
    let cards = [];
    for (let i = 1; i < 14; i++) {
        cards.push(i);
    }
    let suits = ['heart', 'dimond', 'spade', 'club'];
    for (let i = 0; i < cards.length; i ++) {
        for(let j = 0; j < suits.length; j ++) {
            let newCard = new Card(cards[i], suits[j]);
            this.cards.push(newCard);
        }
    }
}

Deck.prototype.cards = [];

Deck.prototype.shuffle = function() {
    let oldDeck = this.cards;
    let newDeck = [];
    while(oldDeck.length > 0) {
        let randomIndex = Math.floor(Math.random() * oldDeck.length);
        let randomCard = oldDeck.splice(randomIndex, 1);
        newDeck.push(randomCard);
    }
    this.cards = newDeck;
}

Deck.prototype.draw = function() {
    return this.cards.shift();
}

