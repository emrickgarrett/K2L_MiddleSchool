var Canvas = document.getElementById("myCanvas");
var	c = Canvas.getContext("2d");
var WIDTH;
var HEIGHT;
var background = "#FFFFFF";

var gameRunning = false;

//Let them create their own code in their own file. I may come back and update this code later...
function init(){
	//For initialization I may want to do for them.
	WIDTH = Canvas.width;
	HEIGHT = Canvas.height;
	
	//Setting Key Listeners that call functions they can use
	document.onkeydown = function (evt){
		var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
		
		if(keyCode == 13){
			actionPressed();
		}
		if(keyCode == 38 || keyCode == 87){
			upPressed();
		}
		
		if(keyCode == 39 || keyCode == 68){
			rightPressed();
		}
		
		if(keyCode == 40 || keyCode == 83){
			downPressed();
		}
		
		if(keyCode == 65 || keyCode == 37){
			leftPressed();
		}
	}
	
	gameRunning = true;
	
}
	//Here is the gameloop. Calls your initialize() function first
	//Then calls your draw method continuously and your update
	//Method every 60 seconds...
	var now,
	dt = 0,
	last = timestamp(),
	step = 1/60;
	
function timestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}	

function clearBuffer(){
	var temp = c.fillStyle;
	c.fillStyle = background;
	c.fillRect(0,0,WIDTH,HEIGHT);
	c.fillStyle = temp;
}
	
function frame(){
	now = timestamp();
	dt = dt + Math.min(1, (now - last) / 1000);
	
	while(dt > step){
		dt = dt - step;
		update(step);
	}
	clearBuffer(dt);
	draw(dt);
	last = now;
	requestAnimationFrame(frame);

}

requestAnimationFrame(frame);


//Drawing helper functions

function drawMyImage(imgLoc, x, y){

	var image = new Image();
	image.src = imgLoc;
	image.onload = function(){
		c.drawImage(image, x, y);
	};
}
