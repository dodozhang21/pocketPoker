var Scores = {
		'rf': {points: 3000, 	name: 'Royal Flush'},
		'sf': {points: 250, 	name: 'Straight Flush'},
		'fa': {points: 125, 	name: 'Four of A Kind'},
		'fh': {points: 40, 		name: 'Full House'},
		'fl': {points: 25, 		name: 'Flush'},
		'st': {points: 20, 		name: 'Straight'},
		'ta': {points: 15, 		name: 'Three of A Kind'},
		'tp': {points: 10,		name: 'Two Pair'},
		'jb': {points: 5,		name: 'Jacks or Better'}
};

var Game = function() {
	this.totalPoints = 0;
	this.deck = null;
	this.hand = null;
};

Game.prototype = {
	reset : function() {
		this.deck = new Deck();
		this.deck.shuffle();
		this.hand = new Hand();
		this.draw();
	},
	
	draw : function() {
		var numbersToDeal = this.hand.getNumberOfCardsToDeal();
		var dealtCards = this.deck.deal(numbersToDeal);
		this.hand.addCards(dealtCards);
	},
	
	getHand : function() {
		return this.hand;
	},
	
    sortCards : function(cards) {
    	var sortable = [];
    	for(index in cards) {
    		sortable.push(cards[index]);
    	}
    	return sortable.sortBy(function(card) {
    		return card.number;
    	});
    },
    
    isRoyalFlush : function(sortedNumbers, suits) {
    	return this.isStraightFlush(sortedNumbers, suits)
    			&& sortedNumbers[0] == 10;
    },
    
    isStraightFlush : function(sortedNumbers, suits) {
    	return this.isStraight(sortedNumbers)
    			&& this.isFlush(suits);
    },
    
    isFourOfAKind : function(sortedNumbers) {
    	return sortedNumbers.unique().length == 2;
    },
    
    isFullHouse : function(sortedNumbers) {
    	var numberOfRepeatedElements = [];
    	for(var i in sortedNumbers) {
    		var number = sortedNumbers[i];
    		var occurrences = sortedNumbers.filter(number);
    		numberOfRepeatedElements.push(occurrences.length);
    	}
    	
    	return numberOfRepeatedElements.filter(2).length == 2
    			&& numberOfRepeatedElements.filter(3).length == 3;
    },
    
    isFlush : function(suits) {
    	return suits.unique().length == 1;
    },
    
    isStraight : function(sortedNumbers) {
    	var start = sortedNumbers[0];
    	var end = sortedNumbers.last();
    	var straight = [];
    	for(var i = start; i <= end; i++) {
    		straight.push(i);
    	}
    	return straight.intersect(sortedNumbers).length == straight.length;
    },
    
    isThreeOfAKind : function(sortedNumbers) {
    	return sortedNumbers.unique().length == 3;
    },
    
    isTwoPair : function(sortedNumbers) {
    	var numberOfRepeatedElements = [];
    	for(var i in sortedNumbers) {
    		var number = sortedNumbers[i];
    		var occurrences = sortedNumbers.filter(number);
//    		console.log('number='+number+',occurrences='+occurrences);
    		numberOfRepeatedElements.push(occurrences.length);
    	}
    	// at least 4 elements have 2
    	return numberOfRepeatedElements.filter(2).length == 4;
    },
    
    isJacksOrBetter : function(sortedNumbers) {
    	for(var i in sortedNumbers) {
    		var number = sortedNumbers[i];
    		if(number >= 11) {
    			return true;
    		}
    	}
    	return false;
    },
    
    getScore : function(cards) {
    	var sortedCards = this.sortCards(cards);
    	var sortedNumbers = jQuery.map(sortedCards, function(card){
        	return card.getNumber();
        });
    	var suits = jQuery.map(sortedCards, function(card){
        	return card.getSuit();
        });
    	
    	var score = {points: 0, name: ''};
    	
    	if(this.isRoyalFlush(sortedNumbers, suits)) {
    		score = Scores['rf'];
    	} else if(this.isStraightFlush(sortedNumbers, suits)) {
    		score = Scores['sf'];
    	} else if(this.isFourOfAKind(sortedNumbers)) {
    		score = Scores['fa'];
    	} else if(this.isFullHouse(sortedNumbers)) {
    		score = Scores['fh'];
    	} else if(this.isFlush(suits)) {
    		score = Scores['fl'];
    	} else if(this.isStraight(sortedNumbers)) {
    		score = Scores['st'];
    	} else if(this.isThreeOfAKind(sortedNumbers)) {
    		score = Scores['ta'];
    	} else if(this.isTwoPair(sortedNumbers)) {
    		score = Scores['tp'];
    	} else if(this.isJacksOrBetter(sortedNumbers)) {
    		score = Scores['jb'];
    	}
    	
    	this.totalPoints += score.points;
    	return score;
    },
    
    getTotalPoints : function() {
    	return this.totalPoints;
    }

};