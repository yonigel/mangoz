let Deck = require('../controllers/deck.controller');
module.exports = Room;

function Room(name) {
    this.name = name;
    this.deck = new Deck();
    this.isGameStarted = false;
}

Room.prototype.startGame = function() {
    this.isGameStarted = true;
}