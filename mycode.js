//Put your code below here.
//Use 'c' to draw onto the canvas
//EXAMPLE
//
//c.fillStyle ='#FF0000';
//c.fillRect(0,0,150,75);

var myX = 0;
var myY = 0;




//This code is for drawing and updating. Drawing is called asap while update happens on an interval
function update(elapsedTime){
	myX = myX+10*elapsedTime;
	myY = myY+5*elapsedTime;
}

function draw(elapsedTime){
	c.fillRect(myX,myY, 50,50);
}


//This is code for when a key is pressed. We will use separate methods for now to
//Make it easier for you, but that will change later.

//Up Key and 'W'
function upPressed(){

}

//Left Key and 'A'
function leftPressed(){

}

//Right Key and 'D'
function rightPressed(){

}

//Down Key and 'S'
function downPressed(){

}

//Spacebar
function actionPressed(){

}


