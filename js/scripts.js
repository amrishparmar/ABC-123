var Item = function(letter, word) {
	this.letter = letter;
	this.word = word;
}

var a1 = new Item('b', 'bapple');

$('#letter').html(a1.letter);