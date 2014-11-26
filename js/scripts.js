// object definition for each item
var Item = function(letter, word) {
	this.letter = letter;
	this.word = word;
}

var a = [new Item('A', 'Apple'), new Item('A', 'Ant'), new Item('A', 'Airport')];
var b = [new Item('B', 'Boy'), new Item('B', 'Balloon'), new Item('B', 'Banana')];
var c = [new Item('C', 'Cat'), new Item('C', 'Car'), new Item('C', 'Chocolate')];
var d = [new Item('D', 'Dog'), new Item('D', 'Door'), new Item('D', 'Doctor')];
var e = [new Item('E', 'Eye'), new Item('E', 'Eggs'), new Item('E', 'Elephant')];
var f = [new Item('F', 'Fire'), new Item('F', 'Fish'), new Item('F', 'Fox')];
var g = [new Item('G', 'Girl'), new Item('G', 'Goat'), new Item('G', 'Goal')];
var h = [new Item('H', 'Hotal'), new Item('H', 'Hair'), new Item('H', 'Hospital')];
var i = [new Item('I', 'Ice-cream'), new Item('I', 'Igloo'), new Item('I', 'Ice')];
var j = [new Item('J', 'Jam'), new Item('J', 'Jelly'), new Item('J', 'Juice')];
var k = [new Item('K', 'King'), new Item('K', 'Kid'), new Item('K', 'Kettle')];
var l = [new Item('L', 'Log'), new Item('L', 'Lock'), new Item('L', 'Lemon')];
var m = [new Item('M', 'Man'), new Item('M', 'Mango'), new Item('M', 'Maze')];
var n = [new Item('N', 'Nun'), new Item('N', 'Nail'), new Item('N', 'Nut')];
var o = [new Item('O', 'Orange'), new Item('O', 'Oval'), new Item('O', 'Octopus')];
var p = [new Item('P', 'Pencil'), new Item('P', 'Pig'), new Item('P', 'Penguin')];
var q = [new Item('Q', 'Queen'), new Item('Q', 'Question'), new Item('Q', 'Quiet')];
var r = [new Item('R', 'Red'), new Item('R', 'Rocket'), new Item('R', 'Robot')];
var s = [new Item('S', 'Spider'), new Item('S', 'Sweet'), new Item('S', 'Squid')];
var t = [new Item('T', 'Tree'), new Item('T', 'Train'), new Item('T', 'Teddy')];
var u = [new Item('U', 'Up'), new Item('U', 'Umbrella'), new Item('U', 'Unicorn')];
var v = [new Item('V', 'Van'), new Item('V', 'Vet'), new Item('V', 'Vegetables')];
var w = [new Item('W', 'Water'), new Item('W', 'Watch'), new Item('W', 'Wing')];
var x = [new Item('X', 'X-ray'), new Item('X', 'Xylophone'), new Item('X', 'Xenops')];
var y = [new Item('Y', 'Yellow'), new Item('Y', 'Yo-Yo'), new Item('Y', 'Yogurt')];
var z = [new Item('Z', 'Zero'), new Item('Z', 'Zoo'), new Item('Z', 'Zebra')];

var itemArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var currentIndex = 0;

// helper function to handle mod of negative numbers - snippet from http://stackoverflow.com/a/17323608
function mod(n, m) {
	return ((m % n) + n) % n;
}

function changeItem(direction) {
	var chooseRandom = Math.floor(Math.random() * 3);
	currentIndex = mod(itemArray.length, currentIndex + direction);
	$('#letter').html(itemArray[currentIndex][chooseRandom].letter);
	$('#word').html(itemArray[currentIndex][chooseRandom].word);
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

/* quiz code */

var correctAnswerNum;
var correctAnswerText;
var score = 0;
var currentQuestion = 1;

function assignAnswer() {
	correctAnswerNum = Math.floor((Math.random() * 4) + 1);
	for (var i = 1; i <= 4; i++) {
		if (i !== correctAnswerNum) {
			$('#answer' + i).html(itemArray[Math.floor(Math.random() * itemArray.length)][Math.floor(Math.random() * 3)].word);
		}
		else {
			// need to add code to change pic once they are ready
			correctAnswerText = itemArray[Math.floor(Math.random() * itemArray.length)][Math.floor(Math.random() * 3)].word;
			$('#answer' + i).html(correctAnswerText);
		}
	}
}

function setScore(increase) {
	if (increase) {
		score++;
	}
	$('#score').html('Score: ' + score);
}

$(document).ready(function() {
	$('#currentQ').html(currentQuestion);
	assignAnswer();
	setScore(false);
});

$('.answer-option').on('click', function(e) {
	var answerChosenId = $(this).attr('id');
	var idNum = answerChosenId[answerChosenId.length - 1];
	var $smiley = $('#answer-chosen > i:first-child');
	
	$smiley.removeClass('fa-smile-o fa-frown-o');

	if (idNum == correctAnswerNum) {
		$smiley.addClass('fa-smile-o');
		$smiley.css('color', 'green');
		$('#correction').html('Correct! Well done.');
		setScore(true);
	}
	else {
		$smiley.addClass('fa-frown-o');
		$smiley.css('color', 'red');
		$('#correction').html('The correct answer is ' + correctAnswerText + '.');
	}

	$('#choose-answer').slideUp('fast');
	$('#answer-chosen').slideDown('fast');
	e.preventDefault();
});

$('#next-question').on('click', function() {
	currentQuestion++;
	if (currentQuestion === 11) {
		$('#choose-correct').slideUp('fast');
		$('#choose-answer').slideUp('fast');
		$('#answer-chosen').slideUp('fast');
		$('#final-result p:nth-child(2)').html(score);
		$('#final-result').slideDown('fast');
	}
	else {
		$('#currentQ').html(currentQuestion);
		assignAnswer();
		$('#choose-answer').slideDown('fast');
		$('#answer-chosen').slideUp('fast');
	}
});
