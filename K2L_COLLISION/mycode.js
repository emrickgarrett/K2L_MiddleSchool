var s1X = 0;
var s1Y = 0;
var s1Width = 20;
var s1Height = 20;
var s2X = 100;
var s2Y = 100;
var s2Width = 75;
var s2Height = 75;

//This code is for drawing and updating. Drawing is called asap while update happens on an interval
function update(elapsedTime){
	if(collisionDetection(s1X, s1Y, s1Width, s1Height, s2X, s2Y, s2Width, s2Height)){
		background = "#FF0000";
	}else{
		background = "#FFFFFF";
	}
}

function draw(elapsedTime){
	c.fillRect(s1X, s1Y, s1Width, s1Height);
	c.fillRect(s2X, s2Y, s2Width, s2Height);
}

function collisionDetection(x1, y1, width1, height1, x2, y2, width2, height2){
	return !(
		((y1 + height1) < y2) || 
		(y1 > (y2 + height2)) || 
		((x1 + width1) < x2) || 
		(x1 > (x2 + width2))
		);
}


//This is code for when a key is pressed. We will use separate methods for now to
//Make it easier for you, but that will change later.

//Up Key and 'W'
function upPressed(){
	s1Y = s1Y - 10;
}

//Left Key and 'A'
function leftPressed(){
	s1X = s1X - 10;
}

//Right Key and 'D'
function rightPressed(){
	s1X = s1X + 10;
}

//Down Key and 'S'
function downPressed(){
	s1Y = s1Y + 10;
}

//Spacebar
function actionPressed(){

}

//I Pressed
function iPressed(){

}

//J Pressed
function jPressed(){

}

//K Pressed
function kPressed(){

}

//L Pressed
function lPressed(){

}


