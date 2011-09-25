var Suits = ['spades', 'clubs', 'hearts', 'diamonds'];
var Numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var NumberDisplays = {2:'2', 3:'3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9', 10:'10', 11:'J', 12:'Q', 13:'K', 14:'A'};

var Card = function(number, suit) {
	this.number = number;
    this.suit = suit;
};

Card.prototype = {

    getImgSrc : function() {
    	var display = NumberDisplays[this.number];
        return display + '_' + this.suit;
    }

};