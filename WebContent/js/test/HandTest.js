
TestCase('HandTest', {

    testGetNumberOfCardsToDeal : function() {
        var hand = new Hand();
        assertEquals('Should have ' + NumberOfCardsInHand + ' cards to deal', NumberOfCardsInHand, hand.getNumberOfCardsToDeal());
        
        hand.addCards([new Card('2', 'spades')]);
        var newNumberOfCardsToDeal = NumberOfCardsInHand - 1;
        assertEquals('Should have ' + newNumberOfCardsToDeal + ' cards to deal', newNumberOfCardsToDeal, hand.getNumberOfCardsToDeal());
    },
    
    testAddAndGetCards : function() {
    	var hand = new Hand();
    	var card1 = new Card('9', 'diamonds');
    	var card2 = new Card('Q', 'spades');
    	
    	hand.addCards([card1, card2]);
    	assertEquals('Should always have ' + NumberOfCardsInHand + ' cards in hand.', NumberOfCardsInHand, hand.getCards().length);
    	
    	assertEquals('Should have 3 cards to deal.', 3, hand.getNumberOfCardsToDeal());
    }
});
