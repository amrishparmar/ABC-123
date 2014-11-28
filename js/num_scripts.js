var Number = function(numeral, word) {
	this.numeral = numeral;
	this.word = word;
	//this.sound = sound;
}

var one = new Number(1, 'One');
var two = new Number( 2, 'Two');
var three = new Number( 3, 'Three');
var four = new Number( 4, 'Four');
var five = new Number( 5, 'Five');
var six = new Number( 6, 'Six');
var seven = new Number( 7, 'Seven');
var eight = new Number( 8, 'Eight');
var nine = new Number( 9, 'Nine');
var ten = new Number( 10, 'Ten');
var eleven = new Number( 11, 'Eleven');
var twelve = new Number( 12, 'Twelve');
var thirteen = new Number( 13, 'Thirteen');
var fourteen = new Number( 14, 'Fourteen');
var fifteen = new Number( 15, 'Fifteen');
var sixteen = new Number( 16, 'Sixteen');
var seventeen = new Number( 17, 'Seventeen');
var eighteen = new Number( 18, 'Eighteen');
var nineteen = new Number( 19, 'Nineteen');
var twenty = new Number( 20, 'Twenty');

var numbers = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty];
var currentIndex = 0;

// helper function to handle mod of negative numbers - snippet from http://stackoverflow.com/a/17323608
function mod(n, m) {
	return ((m % n) + n) % n;
}

// set what is displayed on screen
function changeItem(direction) {
	currentIndex = mod(numbers.length, currentIndex + direction);
	$('#learn-pic').attr('alt', numbers[currentIndex].numeral);
	$('#numeral').html(numbers[currentIndex].numeral);
	$('#word').html(numbers[currentIndex].word);
}

// choose an 'A' item on page load
$(document).ready(function() {
	changeItem(0);
});

// go to next letter of alphabet
$('#arrow-right').on('click', function(e) {
	changeItem(1);
	document.getElementById('audio').play();
	e.preventDefault();
});

// go to previous letter of alphabet
$('#arrow-left').on('click', function(e) {
	changeItem(-1, e);
	e.preventDefault();
});