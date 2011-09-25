
TestCase('CardTest', {

    testGetImgSrc : function() {
        var card = new Card('2', 'spades');
        assertEquals('Should have imgSrc 2_spade', '2_spades', card.getImgSrc());
    }
});
