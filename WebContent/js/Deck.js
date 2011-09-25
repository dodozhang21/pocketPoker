function shuffle(arr) {
	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	return arr;
}

var Deck = function() {
	this.cards = [];
	// initialize cards
	for(sIndex in Suits) {
		var suit = Suits[sIndex];
		for(nIndex in Numbers) {
			var number = Numbers[nIndex];
			this.cards.push(new Card(number, suit));
		}
	}
};

Deck.prototype = {

    getCards : function() {
        return this.cards;
    },
    
    shuffle : function() {
    	var currentCards = this.cards;
    	this.cards = [];
		this.cards = shuffle(currentCards);
    },
    
    deal : function(numberOfCards) {
    	var cardsToDeal = [];
    	if(this.cards.length >= numberOfCards) {
        	for(var i = 0; i < numberOfCards; i++) {
        		cardsToDeal.push(this.cards.pop());
        	}
    	}
    	return cardsToDeal;
    }

};