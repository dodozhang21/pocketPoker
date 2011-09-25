function sortByNumber(a,b)
{ return a.number - b.number; }

var Game = function() {
	this.points = 0;
};

Game.prototype = {

    sortCards : function(cards) {
    	var sortable = [];
    	for(index in cards) {
    		sortable.push(cards[index]);
    	}
    	sortable.sort(sortByNumber);
    	return sortable;
    }

};