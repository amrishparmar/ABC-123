// object definition for each item
var Item = function(letter, word, sound, image) {
	this.letter = letter;
	this.word = word;
	this.sound = sound;
	this.image = image;
}

var a = [new Item('A', 'Apple', new Audio ('sound/alpha/Apple.mp3')), new Item('A', 'Ant', new Audio('sound/alpha/Ant.mp3')), new Item('A', 'Airport', new Audio('sound/alpha/Airport.mp3'))];
var b = [new Item('B', 'Boy', new Audio ('sound/alpha/Apple.mp3')), new Item('B', 'Balloon', new Audio ('sound/alpha/Apple.mp3')), new Item('B', 'Banana', new Audio ('sound/alpha/Apple.mp3'))];
var c = [new Item('C', 'Cat', new Audio ('sound/alpha/Apple.mp3')), new Item('C', 'Car', new Audio ('sound/alpha/Apple.mp3')), new Item('C', 'Chocolate', new Audio ('sound/alpha/Apple.mp3'))];
var d = [new Item('D', 'Dog', new Audio ('sound/alpha/Apple.mp3')), new Item('D', 'Door', new Audio ('sound/alpha/Apple.mp3')), new Item('D', 'Doctor', new Audio ('sound/alpha/Apple.mp3'))];
var e = [new Item('E', 'Eye', new Audio ('sound/alpha/Apple.mp3')), new Item('E', 'Eggs', new Audio ('sound/alpha/Apple.mp3')), new Item('E', 'Elephant', new Audio ('sound/alpha/Apple.mp3'))];
var f = [new Item('F', 'Fire', new Audio ('sound/alpha/Apple.mp3')), new Item('F', 'Fish', new Audio ('sound/alpha/Apple.mp3')), new Item('F', 'Fox', new Audio ('sound/alpha/Apple.mp3'))];
var g = [new Item('G', 'Girl', new Audio ('sound/alpha/Apple.mp3')), new Item('G', 'Goat', new Audio ('sound/alpha/Apple.mp3')), new Item('G', 'Goal', new Audio ('sound/alpha/Apple.mp3'))];
var h = [new Item('H', 'Hotel', new Audio ('sound/alpha/Apple.mp3')), new Item('H', 'Hair', new Audio ('sound/alpha/Apple.mp3')), new Item('H', 'Hospital', new Audio ('sound/alpha/Apple.mp3'))];
var i = [new Item('I', 'Ice-cream', new Audio ('sound/alpha/Apple.mp3')), new Item('I', 'Igloo', new Audio ('sound/alpha/Apple.mp3')), new Item('I', 'Ice', new Audio ('sound/alpha/Apple.mp3'))];
var j = [new Item('J', 'Jam', new Audio ('sound/alpha/Apple.mp3')), new Item('J', 'Jelly', new Audio ('sound/alpha/Apple.mp3')), new Item('J', 'Juice', new Audio ('sound/alpha/Apple.mp3'))];
var k = [new Item('K', 'King', new Audio ('sound/alpha/Apple.mp3')), new Item('K', 'Kid', new Audio ('sound/alpha/Apple.mp3')), new Item('K', 'Kettle', new Audio ('sound/alpha/Apple.mp3'))];
var l = [new Item('L', 'Log', new Audio ('sound/alpha/Apple.mp3')), new Item('L', 'Lock', new Audio ('sound/alpha/Apple.mp3')), new Item('L', 'Lemon', new Audio ('sound/alpha/Apple.mp3'))];
var m = [new Item('M', 'Man', new Audio ('sound/alpha/Apple.mp3')), new Item('M', 'Mango', new Audio ('sound/alpha/Apple.mp3')), new Item('M', 'Maze', new Audio ('sound/alpha/Apple.mp3'))];
var n = [new Item('N', 'Nun', new Audio ('sound/alpha/Apple.mp3')), new Item('N', 'Nail', new Audio ('sound/alpha/Apple.mp3')), new Item('N', 'Nut', new Audio ('sound/alpha/Apple.mp3'))];
var o = [new Item('O', 'Orange', new Audio ('sound/alpha/Apple.mp3')), new Item('O', 'Oval', new Audio ('sound/alpha/Apple.mp3')), new Item('O', 'Octopus', new Audio ('sound/alpha/Apple.mp3'))];
var p = [new Item('P', 'Pencil', new Audio ('sound/alpha/Apple.mp3')), new Item('P', 'Pig', new Audio ('sound/alpha/Apple.mp3')), new Item('P', 'Penguin', new Audio ('sound/alpha/Apple.mp3'))];
var q = [new Item('Q', 'Queen', new Audio ('sound/alpha/Apple.mp3')), new Item('Q', 'Question', new Audio ('sound/alpha/Apple.mp3')), new Item('Q', 'Quiet', new Audio ('sound/alpha/Apple.mp3'))];
var r = [new Item('R', 'Red', new Audio ('sound/alpha/Apple.mp3')), new Item('R', 'Rocket', new Audio ('sound/alpha/Apple.mp3')), new Item('R', 'Robot', new Audio ('sound/alpha/Apple.mp3'))];
var s = [new Item('S', 'Spider', new Audio ('sound/alpha/Apple.mp3')), new Item('S', 'Sweet', new Audio ('sound/alpha/Apple.mp3')), new Item('S', 'Squid', new Audio ('sound/alpha/Apple.mp3'))];
var t = [new Item('T', 'Tree', new Audio ('sound/alpha/Apple.mp3')), new Item('T', 'Train', new Audio ('sound/alpha/Apple.mp3')), new Item('T', 'Teddy', new Audio ('sound/alpha/Apple.mp3'))];
var u = [new Item('U', 'Up', new Audio ('sound/alpha/Apple.mp3')), new Item('U', 'Umbrella', new Audio ('sound/alpha/Apple.mp3')), new Item('U', 'Unicorn', new Audio ('sound/alpha/Apple.mp3'))];
var v = [new Item('V', 'Van', new Audio ('sound/alpha/Apple.mp3')), new Item('V', 'Vet', new Audio ('sound/alpha/Apple.mp3')), new Item('V', 'Vegetables', new Audio ('sound/alpha/Apple.mp3'))];
var w = [new Item('W', 'Water', new Audio ('sound/alpha/Apple.mp3')), new Item('W', 'Watch', new Audio ('sound/alpha/Apple.mp3')), new Item('W', 'Wing', new Audio ('sound/alpha/Apple.mp3'))];
var x = [new Item('X', 'X-ray', new Audio ('sound/alpha/Apple.mp3')), new Item('X', 'Xylophone', new Audio ('sound/alpha/Apple.mp3')), new Item('X', 'Xenops', new Audio ('sound/alpha/Apple.mp3'))];
var y = [new Item('Y', 'Yellow', new Audio ('sound/alpha/Apple.mp3')), new Item('Y', 'Yo-Yo', new Audio ('sound/alpha/Apple.mp3')), new Item('Y', 'Yogurt', new Audio ('sound/alpha/Apple.mp3'))];
var z = [new Item('Z', 'Zero', new Audio ('sound/alpha/Apple.mp3')), new Item('Z', 'Zoo', new Audio ('sound/alpha/Apple.mp3')), new Item('Z', 'Zebra', new Audio ('sound/alpha/Apple.mp3'))];

var itemArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

/* learning code */

if ($(document).find('title').text() === 'Learning ABCs') {

	var currentIndex = 0;
	var chooseRandom = 0;

	// helper function to handle mod of negative numbers - snippet from http://stackoverflow.com/a/17323608
	function mod(n, m) {
		return ((m % n) + n) % n;
	}

	// change the displayed item
	function changeItem(direction) {
		chooseRandom = Math.floor(Math.random() * 3);
		currentIndex = mod(itemArray.length, currentIndex + direction);
		$('#letter').html(itemArray[currentIndex][chooseRandom].letter);
		$('#word').html(itemArray[currentIndex][chooseRandom].word);
	}

	// choose an 'A' item on page load
	$(document).ready(function() {
		changeItem(0);
		itemArray[currentIndex][chooseRandom].sound.play();
	});

	// go to next letter of alphabet
	$('#arrow-right').on('click', function(e) {
		changeItem(1);
		itemArray[currentIndex][chooseRandom].sound.play();
		e.preventDefault();
	});

	// go to previous letter of alphabet
	$('#arrow-left').on('click', function(e) {
		changeItem(-1);
		itemArray[currentIndex][chooseRandom].sound.play();
		e.preventDefault();
	});

	$('#learn-pic').on('click', function(e) {
		itemArray[currentIndex][chooseRandom].sound.play();
		e.preventDefault();
	});

}

/* quiz code */

if ($(document).find('title').text() === 'Quiz ABCs') {

	var correctAnswerNum;
	var correctAnswerText;
	var score = 0;
	var currentQuestion = 1;

	// choose a random answer answer and update text 
	function assignAnswer() {
		correctAnswerNum = Math.floor((Math.random() * 4) + 1);
		correctAnswerText = itemArray[Math.floor(Math.random() * itemArray.length)][Math.floor(Math.random() * 3)].word;
		for (var i = 1; i <= 4; i++) {
			if (i !== correctAnswerNum) {
				badAnswerText = itemArray[Math.floor(Math.random() * itemArray.length)][Math.floor(Math.random() * 3)].word;
				while (badAnswerText === correctAnswerText) // prevent duplicate of correct answer displaying
					badAnswerText = itemArray[Math.floor(Math.random() * itemArray.length)][Math.floor(Math.random() * 3)].word;
				$('#answer' + i).html(badAnswerText);
			}
			else {
				$('#answer' + i).html(correctAnswerText);
			}
		}
	}

	// display/increase score
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

	// display user feedback upon selecting an answer
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

	// change display when 'next question' button is clicked
	$('#next-question').on('click', function() {
		currentQuestion++;
		if (currentQuestion === 11) {
			$('#choose-correct').slideUp('fast');
			$('#choose-answer').slideUp('fast');
			$('#answer-chosen').slideUp('fast');
			$('#final-result p:nth-child(2)').html('<strong>- ' + score + ' -</strong>');
			$('#final-result').slideDown('fast');
		}
		else {
			$('#currentQ').html(currentQuestion);
			assignAnswer();
			$('#choose-answer').slideDown('fast');
			$('#answer-chosen').slideUp('fast');
		}
	});

}
