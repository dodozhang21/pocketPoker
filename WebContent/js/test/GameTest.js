
TestCase('GameTest', {

    testSortCards : function() {
    	var game = new Game();
    	
        var card1 = new Card(2, 'spades');
        var card2 = new Card(11, 'diamonds');
        var card3 = new Card(3, 'diamonds');
        var card4 = new Card(8, 'hearts');
        var card5 = new Card(4, 'clubs');
        
        var original = [card1, card2, card3, card4, card5];
        var sorted = game.sortCards(original);
        
        assertEquals('Should have the same length', original.length, sorted.length);

        var originalhouldBe = ['2_spades', 'J_diamonds', '3_diamonds', '8_hearts', '4_clubs'];
        var originalDisplays = jQuery.map(original, function(card){
        	return card.getImgSrc();
        });
        assertEquals('Original should be untouched.', originalhouldBe, originalDisplays);
        
        var sortedShouldBe = ['2_spades', '3_diamonds', '4_clubs', '8_hearts', 'J_diamonds'];
        var sortedDisplays = jQuery.map(sorted, function(card){
        	return card.getImgSrc();
        });
        assertEquals('Sorted should be correct.', sortedShouldBe, sortedDisplays);
    },
    
    testIsFlush : function() {
    	var game = new Game();
    	assertTrue("Should be flush.", game.isFlush(['diamonds', 'diamonds', 'diamonds']));
    	assertFalse("Should not be flush.", game.isFlush(['diamonds', 'hearts', 'diamonds', 'diamonds', 'clubs']));
    },
    
    testIsFourOfAKind : function() {
    	var game = new Game();
    	assertTrue("Should be four of a kind.", game.isFourOfAKind([2, 2, 4, 2, 2]));
    	assertFalse("Should not be four of a kind.", game.isFourOfAKind([2, 2, 4, 3, 2]));
    },
    
    testIsThreeOfAKind : function() {
    	var game = new Game();
    	assertTrue("Should be three of a kind.", game.isThreeOfAKind([2, 2, 4, 8, 2]));
    	assertFalse("Should not be three of a kind.", game.isThreeOfAKind([2, 2, 4, 3, 11]));
    	assertFalse("Should not be three of a kind.", game.isThreeOfAKind([2, 2, 3, 3, 2])); // <-- should be full house
    },
    
    testIsStraight : function() {
    	var game = new Game();
    	assertTrue("Should be a straight.", game.isStraight([2, 3, 4, 5, 6]));
    	assertTrue("Should be a straight.", game.isStraight([7, 8, 9, 10, 11]));
    	assertFalse("Should not be a straight.", game.isStraight([7, 8, 2, 10, 11]));
    },
    
    testIsJacksOrBetter : function() {
    	var game = new Game();
    	assertTrue("Should be jacks or better.", game.isJacksOrBetter([2, 3, 11, 5, 6]));
    	assertFalse("Should not be jacks or better.", game.isJacksOrBetter([7, 8, 2, 10, 3]));
    },
    
    testIsTwoPair : function() {
    	var game = new Game();
    	assertTrue("Should be two pairs.", game.isTwoPair([2, 2, 5, 5, 6]));
    	assertFalse("Should not be two pairs.", game.isTwoPair([7, 8, 2, 10, 3]));
    },
    
    testIsFullHouse : function() {
    	var game = new Game();
    	assertTrue("Should be full house.", game.isFullHouse([2, 2, 6, 6, 6]));
    	assertFalse("Should not be full house.", game.isFullHouse([7, 8, 2, 10, 3]));
    }
});
