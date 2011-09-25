
TestCase('DeckTest', {

    testGetCardsInit : function() {
        var deck = new Deck();
        var totalNumberOfCards = Suits.length * Numbers.length;
        var cards = jQuery.map(deck.getCards(), function(card){
        	return card.getImgSrc();
        });
        assertEquals('Should have ' + totalNumberOfCards + ' number of cards in the initial deck.', totalNumberOfCards, cards.length);
        
        for(nIndex in Numbers) {
        	var number = Numbers[nIndex];
        	for(sIndex in Suits) {
        		var suit = Suits[sIndex];
        		var theCard = new Card(number, suit);
            	var deckIndex = jQuery.inArray(theCard.getImgSrc(), cards);
        		assertNotEquals('The card ' + theCard.getImgSrc() + ' should exist in the deck.', -1, deckIndex);
        	}
        }
//        for(index in cards) {
//        	var card = cards[index];
//        	console.log(card);
//        }
    },
    
    testShuffle : function() {
        var deck = new Deck();
        var cardsInit = jQuery.map(deck.getCards(), function(card){
        	return card.getImgSrc();
        });
//        console.log(cardsInit);
        var numberOfDifferentIndexes = 20;
        // assert that all of the cards are still in there but just in a different order
        // 1. all cards still exist as in the original deck
        // 2. no new cards introduced - verify length are the same
        // 3. at least 20 indexes are different (hard to test randomness http://stackoverflow.com/questions/2938708/junit-test-method-with-randomized-nature)
        deck.shuffle();
        var cardsShuffled = jQuery.map(deck.getCards(), function(card){
        	return card.getImgSrc();
        });
        assertEquals('Length should be the same.', cardsInit.length, cardsShuffled.length);
        var differentIndexes = [];
        for(index in cardsShuffled) {
        	var cardShuffled = cardsShuffled[index];
//        	console.log('shuffled card = ' + cardShuffled);
        	var originalDeckIndex = jQuery.inArray(cardShuffled, cardsInit);
//        	console.log('index in original deck is ' + originalDeckIndex);
        	assertNotEquals('Should in the original deck', -1, originalDeckIndex);
        	if(index != originalDeckIndex) {
        		differentIndexes.push(cardShuffled);
        	}
        }
        assertTrue('At least ' + numberOfDifferentIndexes + ' cards are at different locations.', differentIndexes.length > numberOfDifferentIndexes);
    },
    
    testDealSuccess : function() {
        var deck = new Deck();
        var totalNumberOfCards = deck.getCards().length;
        var cardsToDeal = totalNumberOfCards - 5;
        var dealtCards = deck.deal(cardsToDeal); 
        assertEquals('Dealt ' + cardsToDeal + ' cards.', cardsToDeal, dealtCards.length);
        
        dealtCards = deck.deal(5); 
        assertEquals('Dealt 5 cards.', 5, dealtCards.length);
    },
    
    testDealFail : function() {
        var deck = new Deck();
        var totalNumberOfCards = deck.getCards().length;
        var cardsToDeal = totalNumberOfCards + 1;
        var dealtCards = deck.deal(cardsToDeal); 
        
        assertEquals('Dealt 0 cards.', 0, dealtCards.length);
    }
});
