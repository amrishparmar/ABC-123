// object definition for each item
var Item = function(letter, word, sound, image) {
	this.letter = letter;
	this.word = word;
	this.sound = sound;
	this.image = image;
}

var a = [new Item('A', 'Apple', new Audio ('sound/alpha/Apple.mp3'), 'img/alpha/APPLE.jpg'), new Item('A', 'Ant', new Audio('sound/alpha/Ant.mp3'), 'img/alpha/ant.jpg'), new Item('A', 'Airport', new Audio('sound/alpha/Airport.mp3'), 'img/alpha/airport.png')];
var b = [new Item('B', 'Boy', new Audio ('sound/alpha/Boy.mp3'), 'img/alpha/boy.jpg'), new Item('B', 'Balloon', new Audio ('sound/alpha/Balloon.mp3'), 'img/alpha/balloon.jpg'), new Item('B', 'Banana', new Audio ('sound/alpha/Banana.mp3'), 'img/alpha/banana.png')];
var c = [new Item('C', 'Cat', new Audio ('sound/alpha/Cat.mp3'), 'img/alpha/cat.png'), new Item('C', 'Car', new Audio ('sound/alpha/Car.mp3'), 'img/alpha/car.png'), new Item('C', 'Chocolate', new Audio ('sound/alpha/Chocolate.mp3'), 'img/alpha/chocolate.png')];
var d = [new Item('D', 'Dog', new Audio ('sound/alpha/Dog.mp3'), 'img/alpha/dog.jpg'), new Item('D', 'Door', new Audio ('sound/alpha/Door.mp3'), 'img/alpha/door.jpg'), new Item('D', 'Doctor', new Audio ('sound/alpha/Doctor.mp3'), 'img/alpha/doctor.jpg')];
var e = [new Item('E', 'Eye', new Audio ('sound/alpha/Eye.mp3'), 'img/alpha/eye.png'), new Item('E', 'Eggs', new Audio ('sound/alpha/Eggs.mp3'), 'img/alpha/eggs.jpg'), new Item('E', 'Elephant', new Audio ('sound/alpha/Elephant.mp3'), 'img/alpha/elephant.png')];
var f = [new Item('F', 'Fire', new Audio ('sound/alpha/Fire.mp3'), 'img/alpha/fire.png'), new Item('F', 'Fish', new Audio ('sound/alpha/Fish.mp3'), 'img/alpha/fish.gif'), new Item('F', 'Fox', new Audio ('sound/alpha/Fox.mp3'), 'img/alpha/fox.jpeg')];
var g = [new Item('G', 'Girl', new Audio ('sound/alpha/Girl.mp3'), 'img/alpha/girl.jpeg'), new Item('G', 'Goat', new Audio ('sound/alpha/Goat.mp3'), 'img/alpha/goat.png'), new Item('G', 'Goal', new Audio ('sound/alpha/Goal.mp3'), 'img/alpha/goal.png')];
var h = [new Item('H', 'Hotel', new Audio ('sound/alpha/Hotel.mp3'), 'img/alpha/hotel.jpg'), new Item('H', 'Hair', new Audio ('sound/alpha/Hair.mp3'), 'img/alpha/hair.jpeg'), new Item('H', 'Hospital', new Audio ('sound/alpha/Hospital.mp3'), 'img/alpha/hospital.jpg')];
var i = [new Item('I', 'Ice-cream', new Audio ('sound/alpha/Ice-cream.mp3'), 'img/alpha/ice-cream.png'), new Item('I', 'Igloo', new Audio ('sound/alpha/Igloo.mp3'), 'img/alpha/igloo.jpeg'), new Item('I', 'Ice', new Audio ('sound/alpha/Ice.mp3'), 'img/alpha/ice.png')];
var j = [new Item('J', 'Jam', new Audio ('sound/alpha/Jam.mp3'), 'img/alpha/jam.jpg'), new Item('J', 'Jelly', new Audio ('sound/alpha/Jelly.mp3'), 'img/alpha/jelly.jpg'), new Item('J', 'Juice', new Audio ('sound/alpha/Juice.mp3'), 'img/alpha/Juice.png')];
var k = [new Item('K', 'King', new Audio ('sound/alpha/King.mp3'), 'img/alpha/king.gif'), new Item('K', 'Kid', new Audio ('sound/alpha/Kid.mp3'), 'img/alpha/kid.gif'), new Item('K', 'Kettle', new Audio ('sound/alpha/Kettle.mp3'), 'img/alpha/kettle.jpeg')];
var l = [new Item('L', 'Log', new Audio ('sound/alpha/Log.mp3'), 'img/alpha/log.png'), new Item('L', 'Lock', new Audio ('sound/alpha/Lock.mp3'), 'img/alpha/lock.jpeg'), new Item('L', 'Lemon', new Audio ('sound/alpha/Lemon.mp3'), 'img/alpha/lemon.jpeg')];
var m = [new Item('M', 'Man', new Audio ('sound/alpha/Man.mp3'), 'img/alpha/man.png'), new Item('M', 'Mango', new Audio ('sound/alpha/Mango.mp3'), 'img/alpha/mango.png'), new Item('M', 'Maze', new Audio ('sound/alpha/Maze.mp3'), 'img/alpha/maze.jpeg')];
var n = [new Item('N', 'Nun', new Audio ('sound/alpha/Nun.mp3'), 'img/alpha/nun.png'), new Item('N', 'Nail', new Audio ('sound/alpha/Nail.mp3'), 'img/alpha/nail.jpeg'), new Item('N', 'Nut', new Audio ('sound/alpha/Nut.mp3'), 'img/alpha/nut.png')];
var o = [new Item('O', 'Orange', new Audio ('sound/alpha/Orange.mp3'), 'img/alpha/orange.png'), new Item('O', 'Oval', new Audio ('sound/alpha/Oval.mp3'), 'img/alpha/oval.png'), new Item('O', 'Octopus', new Audio ('sound/alpha/Octopus.mp3'), 'img/alpha/octopus.jpeg')];
var p = [new Item('P', 'Pencil', new Audio ('sound/alpha/Pencil.mp3'), 'img/alpha/pencil.png'), new Item('P', 'Pig', new Audio ('sound/alpha/Pig.mp3'), 'img/alpha/pig.jpeg'), new Item('P', 'Penguin', new Audio ('sound/alpha/Penguin.mp3'), 'img/alpha/penguin.png')];
var q = [new Item('Q', 'Queen', new Audio ('sound/alpha/Queen.mp3'), 'img/alpha/queen.png'), new Item('Q', 'Question', new Audio ('sound/alpha/Question.mp3'), 'img/alpha/question.png'), new Item('Q', 'Quiet', new Audio ('sound/alpha/Quiet.mp3'), 'img/alpha/quiet.jpeg')];
var r = [new Item('R', 'Red', new Audio ('sound/alpha/Red.mp3'), 'img/alpha/red.png'), new Item('R', 'Rocket', new Audio ('sound/alpha/Rocket.mp3'), 'img/alpha/rocket.png'), new Item('R', 'Robot', new Audio ('sound/alpha/Robot.mp3'), 'img/alpha/robot.gif')];
var s = [new Item('S', 'Spider', new Audio ('sound/alpha/Spider.mp3'), 'img/alpha/spider.png'), new Item('S', 'Sweet', new Audio ('sound/alpha/Sweet.mp3'), 'img/alpha/sweet.png'), new Item('S', 'Squid', new Audio ('sound/alpha/Squid.mp3'), 'img/alpha/squid.png')];
var t = [new Item('T', 'Tree', new Audio ('sound/alpha/Tree.mp3'), 'img/alpha/tree.png'), new Item('T', 'Train', new Audio ('sound/alpha/Train.mp3'), 'img/alpha/train.jpeg'), new Item('T', 'Teddy', new Audio ('sound/alpha/Teddy.mp3'), 'img/alpha/teddy.png')];
var u = [new Item('U', 'Up', new Audio ('sound/alpha/Up.mp3'), 'img/alpha/up.png'), new Item('U', 'Umbrella', new Audio ('sound/alpha/Umbrella.mp3'), 'img/alpha/umbrella.jpeg'), new Item('U', 'Unicorn', new Audio ('sound/alpha/Unicorn.mp3'), 'img/alpha/unicorn.png')];
var v = [new Item('V', 'Van', new Audio ('sound/alpha/Van.mp3'), 'img/alpha/van.gif'), new Item('V', 'Vet', new Audio ('sound/alpha/Vet.mp3'), 'img/alpha/vet.jpeg'), new Item('V', 'Vegetables', new Audio ('sound/alpha/Vegetables.mp3'), 'img/alpha/vegetables.png')];
var w = [new Item('W', 'Water', new Audio ('sound/alpha/Water.mp3'), 'img/alpha/water.jpeg'), new Item('W', 'Watch', new Audio ('sound/alpha/Watch.mp3'), 'img/alpha/watch.jpeg'), new Item('W', 'Wing', new Audio ('sound/alpha/Wing.mp3'), 'img/alpha/wing.jpeg')];
var x = [new Item('X', 'X-ray', new Audio ('sound/alpha/X-ray.mp3'), 'img/alpha/x-ray.jpeg'), new Item('X', 'Xylophone', new Audio ('sound/alpha/Xylophone.mp3'), 'img/alpha/xylophone.png'), new Item('X', 'Xenops', new Audio ('sound/alpha/Xenops.mp3'), 'img/alpha/xenops.jpg')];
var y = [new Item('Y', 'Yellow', new Audio ('sound/alpha/Yellow.mp3'), 'img/alpha/yellow.png'), new Item('Y', 'Yo-Yo', new Audio ('sound/alpha/Yo-Yo.mp3'), 'img/alpha/yo-yo.png'), new Item('Y', 'Yogurt', new Audio ('sound/alpha/Yogurt.mp3'), 'img/alpha/yogurt.jpg')];
var z = [new Item('Z', 'Zero', new Audio ('sound/alpha/Zero.mp3'), 'img/alpha/zero.jpg'), new Item('Z', 'Zoo', new Audio ('sound/alpha/Zoo.mp3'), 'img/alpha/zoo.jpeg'), new Item('Z', 'Zebra', new Audio ('sound/alpha/Zebra.mp3'), 'img/alpha/zebra.jpg')];

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
		$('#learn-pic').attr('src', itemArray[currentIndex][chooseRandom].image);
	}

	// hide instructions and choose an 'A' item on start button click
	$('.instructions-learn a').on('click', function() {
		$(this).parent().css('display','none');
		$('#learning-area').fadeIn('fast');
		changeItem(0);
	});

	// go to next letter of alphabet
	$('#arrow-right').on('click', function() {
		changeItem(1);
	});

	// go to previous letter of alphabet
	$('#arrow-left').on('click', function() {
		changeItem(-1);
	});

	// play sound of current item
	$('#arrow-left, #arrow-right, #learn-pic, .instructions-learn a').on('click', function(e) {
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
		var tempLetterNum = Math.floor(Math.random() * itemArray.length);
		var tempWordNum = Math.floor(Math.random() * 3);
		correctAnswerText = itemArray[tempLetterNum][tempWordNum].word;
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
		$('#quiz-pic').attr('src', itemArray[tempLetterNum][tempWordNum].image);
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
