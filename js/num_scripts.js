var Number = function(numeral, word, sound) {
	this.numeral = numeral;
	this.word = word;
	this.sound = sound;
}

var one = new Number(1, 'One', new Audio('sound/num/one.mp3'));
var two = new Number( 2, 'Two', new Audio('sound/num/one.mp3'));
var three = new Number( 3, 'Three', new Audio('sound/num/one.mp3'));
var four = new Number( 4, 'Four', new Audio('sound/num/one.mp3'));
var five = new Number( 5, 'Five', new Audio('sound/num/one.mp3'));
var six = new Number( 6, 'Six', new Audio('sound/num/one.mp3'));
var seven = new Number( 7, 'Seven', new Audio('sound/num/one.mp3'));
var eight = new Number( 8, 'Eight', new Audio('sound/num/one.mp3'));
var nine = new Number( 9, 'Nine', new Audio('sound/num/one.mp3'));
var ten = new Number( 10, 'Ten', new Audio('sound/num/one.mp3'));
var eleven = new Number( 11, 'Eleven', new Audio('sound/num/one.mp3'));
var twelve = new Number( 12, 'Twelve', new Audio('sound/num/one.mp3'));
var thirteen = new Number( 13, 'Thirteen', new Audio('sound/num/one.mp3'));
var fourteen = new Number( 14, 'Fourteen', new Audio('sound/num/one.mp3'));
var fifteen = new Number( 15, 'Fifteen', new Audio('sound/num/one.mp3'));
var sixteen = new Number( 16, 'Sixteen', new Audio('sound/num/one.mp3'));
var seventeen = new Number( 17, 'Seventeen', new Audio('sound/num/one.mp3'));
var eighteen = new Number( 18, 'Eighteen', new Audio('sound/num/one.mp3'));
var nineteen = new Number( 19, 'Nineteen', new Audio('sound/num/one.mp3'));
var twenty = new Number( 20, 'Twenty', new Audio('sound/num/one.mp3'));

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
	numbers[currentIndex].sound.play();
});

// go to next letter of alphabet
$('#arrow-right').on('click', function(e) {
	changeItem(1);
	numbers[currentIndex].sound.play();
	e.preventDefault();
});

// go to previous letter of alphabet
$('#arrow-left').on('click', function(e) {
	changeItem(-1);
	numbers[currentIndex].sound.play();
	e.preventDefault();
});