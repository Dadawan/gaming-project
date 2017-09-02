	var level = [
	   //0  1  2  3  4  5  6  7  8  9 10  11
		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //0
		[0, 0, 0, 4, 9, 0, 0, 0, 2, 1, 1, 1], //1 
		[0, 0, 4, 9, 0, 6, 6, 0, 0, 0, 1, 1], //2
		[0, 0, 8, 5, 0, 8, 9, 0, 0, 0, 1, 1], //3
		[0, 0, 0, 8, 5, 6, 6, 4, 0, 0, 1, 1], //4
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
		[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], //7
	]

	----

	var Game = require('canvas-tile-map').Game;
 
var settings = {
    // put your settings here 
};
var game = new Game(setting);
game.run();
//Easystar
var easystar = new EasyStar.js();

// var level = [[0,0,1,0,0],
// 	         [1,0,1,0,1],
// 	         [0,0,1,0,0],
// 	         [0,0,1,1,0],
// 	         [0,0,0,0,0]];

	var level = [
	   //0  1  2  3  4  5  6  7  8  9 10  11
		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //0
		[0, 0, 0, 4, 9, 0, 0, 0, 2, 1, 1, 1], //1 
		[0, 0, 4, 9, 0, 6, 6, 0, 0, 0, 1, 1], //2
		[0, 0, 8, 5, 0, 8, 9, 0, 0, 0, 1, 1], //3
		[0, 0, 0, 8, 5, 6, 6, 4, 0, 0, 1, 1], //4
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
		[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
		[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], //7
	]

easystar.setGrid(level);

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	easystar.setAcceptableTiles([0, 4, 9, 8, 5, 6]);
	easystar.enableCornerCutting();
	easystar.enableDiagonals();
	
	//if 4tile
	//loop through 2d array, if gridResult === 4, do work
	//normal case, only accessible from top, top left, left, bottom left
	//exceptions: if 
	easystar.setDirectionalCondition(3, 1, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT]);
	easystar.setDirectionalCondition(2, 2, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT]);
	easystar.setDirectionalCondition(7, 4, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.TOP_RIGHT]);
	
	//if 0tile
	easystar.setDirectionalCondition(4, 2, [EasyStar.TOP, EasyStar.LEFT, EasyStar.BOTTOM_LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT, EasyStar.RIGHT, EasyStar.TOP_RIGHT]);
	easystar.setDirectionalCondition(4, 3, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT, EasyStar.RIGHT, EasyStar.TOP_RIGHT]);

	//if 9tile
	easystar.setDirectionalCondition(4, 1, [EasyStar.BOTTOM_LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT]);
	easystar.setDirectionalCondition(3, 2, [EasyStar.TOP_RIGHT, EasyStar.RIGHT, EasyStar.BOTTOM_RIGHT, EasyStar.BOTTOM]);
	easystar.setDirectionalCondition(6, 3, [EasyStar.TOP_RIGHT, EasyStar.RIGHT, EasyStar.BOTTOM_RIGHT, EasyStar.BOTTOM, EasyStar.BOTTOM_LEFT]);

	//if 8tile
	easystar.setDirectionalCondition(2, 3, [EasyStar.TOP_LEFT, EasyStar.RIGHT, EasyStar.BOTTOM_LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT]);
	easystar.setDirectionalCondition(3, 4, [EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT]);
	easystar.setDirectionalCondition(5, 3, [EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT]);

	//if 5tile
	easystar.setDirectionalCondition(3, 3, [EasyStar.TOP, EasyStar.TOP_RIGHT, EasyStar.RIGHT, EasyStar.BOTTOM_RIGHT]);
	easystar.setDirectionalCondition(4, 4, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.TOP_RIGHT, EasyStar.RIGHT]);

	//if 6tile
	easystar.setDirectionalCondition(5, 4, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.RIGHT, EasyStar.TOP_RIGHT]);
	easystar.setDirectionalCondition(6, 4, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.TOP_RIGHT, EasyStar.RIGHT]);
	easystar.setDirectionalCondition(5, 2, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT, EasyStar.TOP_RIGHT, EasyStar.RIGHT]);
	easystar.setDirectionalCondition(6, 2, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.TOP_RIGHT, EasyStar.RIGHT, EasyStar.BOTTOM_RIGHT]);

	easystar.findPath(0, 0, 4, 1, function( path ) {
	    if (path === null) {
	        console.log("The path to the destination point was not found.");
	    } else {
	      
	    	for (var i = 0; i < path.length; i++)
	    	{
	    		console.log("P: " + i + ", X: " + path[i].x + ", Y: " + path[i].y);
	    	}
	    	
	    }
	});
	easystar.calculate();
	
	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;
