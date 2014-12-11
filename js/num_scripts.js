var Number = function(numeral, word, sound, image) {
	this.numeral = numeral;
	this.word = word;
	this.sound = sound;
	this.image = image;
}

var one = new Number(1, 'One', new Audio('sound/num/One.mp3'), 'img/num/one.jpg');
var two = new Number( 2, 'Two', new Audio('sound/num/Two.mp3'), 'img/num/two.jpg');
var three = new Number( 3, 'Three', new Audio('sound/num/Three.mp3'), 'img/num/three.jpg');
var four = new Number( 4, 'Four', new Audio('sound/num/Four.mp3'), 'img/num/four.jpg');
var five = new Number( 5, 'Five', new Audio('sound/num/Five.mp3'), 'img/num/five.jpg');
var six = new Number( 6, 'Six', new Audio('sound/num/Six.mp3'), 'img/num/six.jpg');
var seven = new Number( 7, 'Seven', new Audio('sound/num/Seven.mp3'), 'img/num/seven.jpg');
var eight = new Number( 8, 'Eight', new Audio('sound/num/Eight.mp3'), 'img/num/eight.jpg');
var nine = new Number( 9, 'Nine', new Audio('sound/num/Nine.mp3'), 'img/num/nine.jpg');
var ten = new Number( 10, 'Ten', new Audio('sound/num/Ten.mp3'), 'img/num/ten.jpg');
var eleven = new Number( 11, 'Eleven', new Audio('sound/num/Eleven.mp3'), 'img/num/eleven.jpg');
var twelve = new Number( 12, 'Twelve', new Audio('sound/num/Twelve.mp3'), 'img/num/twelve.jpg');
var thirteen = new Number( 13, 'Thirteen', new Audio('sound/num/Thirteen.mp3'), 'img/num/thirteen.jpg');
var fourteen = new Number( 14, 'Fourteen', new Audio('sound/num/Fourteen.mp3'), 'img/num/fourteen.jpg');
var fifteen = new Number( 15, 'Fifteen', new Audio('sound/num/Fifteen.mp3'), 'img/num/fifteen.jpg');
var sixteen = new Number( 16, 'Sixteen', new Audio('sound/num/Sixteen.mp3'), 'img/num/sixteen.jpg');
var seventeen = new Number( 17, 'Seventeen', new Audio('sound/num/Seventeen.mp3'), 'img/num/seventeen.jpg');
var eighteen = new Number( 18, 'Eighteen', new Audio('sound/num/Eighteen.mp3'), 'img/num/eighteen.jpg');
var nineteen = new Number( 19, 'Nineteen', new Audio('sound/num/Nineteen.mp3'), 'img/num/nineteen.jpg');
var twenty = new Number( 20, 'Twenty', new Audio('sound/num/Twenty.mp3'), 'img/num/twenty.jpg');

var numbers = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty];

/* learning code */

if ($(document).find('title').text() === 'Learning 123s') {

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
		$('#learn-pic').attr('src', numbers[currentIndex].image);
		$('#learn-pic').attr('alt', numbers[currentIndex].numeral);
	}

	// hide instructions and chooses the '1' item on start button click
	$('.instructions-learn a').on('click', function() {
		$(this).parent().css('display','none');
		$('#learning-area').fadeIn('fast');
		changeItem(0);
	});

	// go to next letter of alphabet
	$('#arrow-right').on('click', function(e) {
		changeItem(1);
	});

	// go to previous letter of alphabet
	$('#arrow-left').on('click', function(e) {
		changeItem(-1);
	});

	// play sound of current item
	$('#arrow-left, #arrow-right, #learn-pic, .instructions-learn a').on('click', function(e) {
		numbers[currentIndex].sound.play();
		e.preventDefault();
	});

}

/* quiz code */

if ($(document).find('title').text() === 'Quiz 123s') {

	var correctAnswerNum;
	var correctAnswerText;
	var score = 0;
	var currentQuestion = 1;
	var answerAllowed = true; // prevent multiple taps to artificially increase score /* set to true */

	function initConditions() {
		score = 0;
		currentQuestion = 1;
		answerAllowed = true;
	}

	// choose a random answer and update text  
	function assignAnswer() {
		var chooseNumber = Math.floor(Math.random() * numbers.length); // selects an item of array to be the answer
		correctAnswerNum = Math.floor((Math.random() * 4) + 1); // randomly chooses one of four slots to house the correct answer
		correctAnswerText = numbers[chooseNumber].word;
		for (var i = 1; i <= 4; i++) {
			if (i !== correctAnswerNum) {
				badAnswerText = numbers[Math.floor(Math.random() * numbers.length)].word;
				while (badAnswerText === correctAnswerText) // prevent duplicate of correct answer displaying
					badAnswerText = numbers[Math.floor(Math.random() * numbers.length)].word;
				$('#answer' + i).html(badAnswerText);
			}
			else {
				$('#answer' + i).html(correctAnswerText);
			}
		}
		$('#quiz-pic').attr('src', numbers[chooseNumber].image);
		$('#quiz-pic').attr('alt', numbers[chooseNumber].word);
	}

	// display/increase score
	function setScore(increase) {
		if (increase) {
			score++;
		}
		$('#score').html('Score: ' + score);
	}

	// hide instructions and assigns an answer
	$('.instructions-learn a').on('click', function() {
		initConditions();
		$(this).parent().css('display','none');
		$('#learning-area').fadeIn('fast');
		$('#currentQ').html(currentQuestion);
		assignAnswer();
		setScore(false);
	});

	// display user feedback upon selecting an answer
	if (answerAllowed) {
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

			answerAllowed = false;
		});
	}

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

		answerAllowed = true;
	});

	// restarts the quiz on tapping 'play again' button
	$('#restart-quiz').on('click', function(e) {
		initConditions();
		setScore(false);
		assignAnswer();
		$('#choose-correct').slideDown('fast');
		$('#choose-answer').slideDown('fast');
		$('#final-result').slideUp('fast');
		e.preventDefault();
	});

}
