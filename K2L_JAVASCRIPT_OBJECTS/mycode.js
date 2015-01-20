var objects = [];

for(var i = 0; i < 10; i++){
	objects[i] = {width: 50, height: 50, x: i*30, y: i*30};
}



//This code is for drawing and updating. Drawing is called asap while update happens on an interval
function update(elapsedTime){
	collisionDetection();

}

function draw(elapsedTime){
	for(var i = 0; i < objects.length; i++){
		c.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
	}
}

function collisionDetection(){

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


