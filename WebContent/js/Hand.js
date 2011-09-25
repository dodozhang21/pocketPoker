var NumberOfCardsInHand = 5;

var Hand = function() {
	this.cards = [];
	for(var i = 0; i < NumberOfCardsInHand; i++) {
		cards.push(null);
	}
};

Hand.prototype = {

    getNumberOfCardsToDeal : function() {
        return this.number + '_' + this.suit;
    }

};