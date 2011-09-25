
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
    }
});
