var Card = function(number, suit) {
	this.number = number;
    this.suit = suit;
};

Card.prototype = {

    getImgSrc : function() {
        return this.number + '_' + this.suit;
    }

};