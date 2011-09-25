var NumberOfCardsInHand = 5;

var Hand = function() {
	this.cards = [];
	for(var i = 0; i < NumberOfCardsInHand; i++) {
		this.cards.push(false);
	}
};

Hand.prototype = {
		
	getCards : function() {
		return this.cards;
	},

    getNumberOfCardsToDeal : function() {
        var numberOfCardsToDeal = 0;
        for(index in this.cards) {
        	var card = this.cards[index];
        	if(!card) {
        		numberOfCardsToDeal++;
        	}
        }
        return numberOfCardsToDeal;
    },
    
    addCards : function(cardsToAdd) {
    	for(index in this.cards) {
        	var card = this.cards[index];
        	if(!card) {
        		this.cards[index] = cardsToAdd.pop();
        	}
        }
    }

};