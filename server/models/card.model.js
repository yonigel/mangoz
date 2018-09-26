module.exports = Card;

function Card(number, symbol) {
    this.number = number;
    this.symbol = symbol;
}

Card.prototype.number = 0;

Card.prototype.symbol = '';
