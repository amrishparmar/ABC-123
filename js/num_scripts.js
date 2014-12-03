var Number = function(numeral, word, sound) {
	this.numeral = numeral;
	this.word = word;
	this.sound = sound;
}

var one = new Number(1, 'One', new Audio('sound/num/One.mp3'));
var two = new Number( 2, 'Two', new Audio('sound/num/Two.mp3'));
var three = new Number( 3, 'Three', new Audio('sound/num/Three.mp3'));
var four = new Number( 4, 'Four', new Audio('sound/num/Four.mp3'));
var five = new Number( 5, 'Five', new Audio('sound/num/Five.mp3'));
var six = new Number( 6, 'Six', new Audio('sound/num/Six.mp3'));
var seven = new Number( 7, 'Seven', new Audio('sound/num/Seven.mp3'));
var eight = new Number( 8, 'Eight', new Audio('sound/num/Eight.mp3'));
var nine = new Number( 9, 'Nine', new Audio('sound/num/Nine.mp3'));
var ten = new Number( 10, 'Ten', new Audio('sound/num/Ten.mp3'));
var eleven = new Number( 11, 'Eleven', new Audio('sound/num/Eleven.mp3'));
var twelve = new Number( 12, 'Twelve', new Audio('sound/num/Twelve.mp3'));
var thirteen = new Number( 13, 'Thirteen', new Audio('sound/num/Thirteen.mp3'));
var fourteen = new Number( 14, 'Fourteen', new Audio('sound/num/Fourteen.mp3'));
var fifteen = new Number( 15, 'Fifteen', new Audio('sound/num/Fifteen.mp3'));
var sixteen = new Number( 16, 'Sixteen', new Audio('sound/num/Sixteen.mp3'));
var seventeen = new Number( 17, 'Seventeen', new Audio('sound/num/Seventeen.mp3'));
var eighteen = new Number( 18, 'Eighteen', new Audio('sound/num/Eighteen.mp3'));
var nineteen = new Number( 19, 'Nineteen', new Audio('sound/num/Nineteen.mp3'));
var twenty = new Number( 20, 'Twenty', new Audio('sound/num/Twenty.mp3'));

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
	}

	// hide instructions and chooses the '1' item on start button click
	$('#instructions-learn a').on('click', function() {
		$(this).parent().css('display','none');
		$('#learning-area').fadeIn('fast');
		changeItem(0);
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

}

/* quiz code */

if ($(document).find('title').text() === 'Quiz 123s') {

	var correctAnswerNum;
	var correctAnswerText;
	var score = 0;
	var currentQuestion = 1;

	// choose a random answer and update text 
	function assignAnswer() {
		correctAnswerNum = Math.floor((Math.random() * 4) + 1);
		correctAnswerText = numbers[Math.floor(Math.random() * numbers.length)].word;
		var badAnswerText = [];
		for (var i = 1; i <= 4; i++) {
			if (i !== correctAnswerNum) {
				badAnswerText[i] = numbers[Math.floor(Math.random() * numbers.length)].word;
				while (badAnswerText[i] === correctAnswerText) // prevent duplicate of correct answer displaying
					badAnswerText[i] = numbers[Math.floor(Math.random() * numbers.length)].word;
				$('#answer' + i).html(badAnswerText[i]);
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

	// hide instructions and assigns an answer
	$('#instructions-learn a').on('click', function() {
		$(this).parent().css('display','none');
		$('#learning-area').fadeIn('fast');
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
