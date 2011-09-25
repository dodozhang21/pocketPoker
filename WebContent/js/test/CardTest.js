
TestCase('CardTest', {

    testImgSrc : function() {
        var card = new Card('2', 'spade');
        assertEquals('Should have imgSrc 2_spade', '2_spade', card.imgSrc());
    }
});
