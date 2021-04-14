// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open modal on click
btn.onclick = function() {
	modal.style.display = "block";
}

// Close modal on click on <span> (x)
span.onclick = function() {
	modal.style.display = "none";
}

// Close modal when click outside of the modal
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// declaring sound objects
var bear, wolf, tent, pine, fire, apple, forest;

bear = new Audio('sounds/bear.mp3');
wolf = new Audio('sounds/wolf.mp3');
tent = new Audio('sounds/tent.mp3');
pine = new Audio('sounds/pine.mp3');
fire = new Audio('sounds/fire.mp3');
apple = new Audio('sounds/apple.mp3');
bird = new Audio('sounds/bird.mp3');
forest = new Audio('sounds/forest.mp3');

function playSound(image) {
	if(image == 'bear') {
		bear.play();
	} else if(image == 'wolf') {
		wolf.play();
	} else if(image == 'tent') {
		tent.play();
	} else if(image == 'pine') {
		pine.play();
	} else if(image == 'fire') {
		fire.play();
	} else if(image == 'apple') {
		apple.play();
	} else if(image == 'forest') {
		forest.play();
	} else if(image == 'bird') {
		bird.play();
	}
}
// animate wings
function moveWings() {
	var wings = document.querySelector('.wings');
	wings.classList.add('move');
}

// add/remove day-class
var btns = document.querySelectorAll(".buttons button");
var bg = document.getElementsByClassName("background")[0];

for (i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", manageBgClasses);}
	function manageBgClasses () {
		if (this.getAttribute("data-add")) {
			bg.classList.add(this.getAttribute("data-add"));
		} if (this.getAttribute("data-remove")) {
			bg.classList.remove(this.getAttribute("data-remove"));}
		}

// animate apple
function appleFall() { 
document.getElementById('apple').animate([
  	// keyframes
  	{ transform: 'translateY(0px)'}, 
  	{ transform: 'translateY(100px)'},
  	{ transform: 'translate(100px, 100px)'}
  	], { 
  	// timing options
  	duration: 700,
  	fill: "forwards"

  });
		}

// animate flying bird
function birdFly() { 
	document.getElementById('bird').animate([
  	// keyframes
  	{ transform: 'translate(0) '},
  	{ transform: 'translate(-1000px, -50px)'}
  	], { 
  	// timing options
  	delay: 600,
  	duration: 4000,
  	fill: "forwards"
  });
}


// move bear with mouse
var mousePosition;
var offset = [0,0];
var moveBear = document.getElementById("bjorn");
var isDown = false;

moveBear.addEventListener('mousedown', function(e) {
	isDown = true;
	offset = [
	moveBear.offsetLeft - e.clientX,
	moveBear.offsetTop - e.clientY 
	];
}, true);

document.addEventListener('mouseup', function() {
	isDown = false;
}, true);


document.addEventListener('mousemove', function(event) {
	event.preventDefault();
	if (isDown) {
		mousePosition = {
			x: event.clientX,
			y: event.clientY
		};
		moveBear.style.left = (mousePosition.x + offset[0]) + 'px';
		moveBear.style.top  = (mousePosition.y + offset[1]) + 'px';
	}
}, true);





