// JavaScript Document
var isCollided = false;
var score = 0;
var ydup = 0;
var repeatTiming = 0;// controls the speed of the vehicles and the road
var i = 100;

var box = document.getElementById("maincar");
document.onkeydown = function(e) {
	switch (e.keyCode) {
	case 37:
		// alert('left');
		if (i != 0) {
			i = i - 100;
			box.style.left = i + "px";
			break;
		} else {
			box.style.left = i + "px";
			break;
		}

	case 39:
		// alert('right');
		if (i != 200) {
			i = i + 100;
			box.style.left = i + "px";
			break;
		} else {
			i = 200;
			box.style.left = i + "px";
			break;
		}
	}
};

var repeat = setInterval(background, repeatTiming);
var createOpponent = setInterval(opponents, 1000);// one opponent is created
													// every second
function background() {
	if (ydup != 600) {
		ydup = ydup + 1;
		document.getElementById("road").style.backgroundPosition = "0px "
				+ ydup + "px";
	} else {
		ydup = 0;
	}
}

function opponents() {
	var c = new Car();
	c.createCar();
}

function getRandom() {
	var r = Math.floor((Math.random() * 3) + 0);
	if (r == 1) {
		r = 100;
	}
	if (r == 2) {
		r = 200;
	}
	if (r == 3) {
		r = 300;
	}
	return r;
}

function Car() {
	this.x = 0;
	this.y = 0;
	this.intervalId;
	this.element;
	this.wrapper;
	var that = this;
	this.createCar = function() {
		that.element = document.createElement("div");
		that.element.className = "car";
		that.wrapper = document.getElementById("road");
		that.wrapper.appendChild(that.element);
		// document.getElementsById("wrapper").appendChild(that.element);
		that.x = getRandom();
		that.y = -100;
		that.element.style.top = that.y + "px";
		that.element.style.left = that.x + "px";
		that.intervalId = setInterval(that.pushDown, repeatTiming);

	};

	this.pushDown = function() {
		if (that.y >= 400 && that.x == i) {
			isCollided = true;
			clearInterval(that.intervalId);
			clearInterval(repeat);
			clearInterval(createOpponent);
			that.element.innerHTML = "<p>GAME OVER</p>";
		}
		if (that.y != 600) {
			that.y = that.y + 1;
			that.element.style.top = that.y + "px";
		} else {
			score = score + 1;
			box.innerHTML = "<p>Score " + score + "</p>";
			that.wrapper.removeChild(that.element);
			clearInterval(that.intervalId);

		}
	};

}
