var Canvas = document.getElementById("myCanvas");
var	c = Canvas.getContext("2d");
var WIDTH;
var HEIGHT;

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
}