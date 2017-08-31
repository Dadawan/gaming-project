var easystar = new EasyStar.js();

var canvas=document.getElementById('myCanvas');
var context=canvas.getContext('2d');


var level = [
 //X 0  1  2  3  4  5  6  7  8  9 10  11    Y
	[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //0
	[0, 0, 0, 4, 9, 0, 0, 0, 1, 1, 1, 1], //1 
	[0, 0, 4, 9, 0, 6, 6, 0, 0, 0, 1, 1], //2
	[0, 0, 8, 5, 0, 8, 9, 0, 0, 0, 1, 1], //3
	[0, 0, 0, 8, 5, 6, 6, 4, 0, 0, 1, 1], //4
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
	[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], //7
];

// var level = [
//   // 0  1  2  3  4  5  6  7  8  9	
//   	[1, 1, 1, 0, 0, 1, 0, 0, 1, 1], //0
// 	[1, 1, 1, 0, 0, 1, 0, 0, 1, 1], //1
// 	[1, 1, 1, 0, 0, 1, 0, 0, 1, 1], //2
// 	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1], //3
// 	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1], //4
// 	[6, 6, 0, 0, 0, 0, 0, 0, 1, 1], //5
// 	[7, 7, 1, 1, 1, 1, 0, 0, 1, 1], //6
// 	[0, 0, 0, 1, 1, 1, 6, 6, 1, 1], //7
// 	[0, 0, 0, 0, 1, 1, 7, 7, 1, 1], //8
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
// 	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
// 	[1, 1, 1, 1, 0, 0, 0, 0, 0, 0], //11
// 	[1, 1, 1, 1, 0, 0, 0, 0, 0, 0] //12
// ];


for (var y =0; y < level.length; y+=1) {
	//horizontal x
	for (var x=0; x < level[y].length; x+=1) {
		
		var findCoord = level[y][x];
		var northernTile;
		var westernTile;
		var southernTile;
		var easternTile;
		var northWesternTile;
		var southEasternTile;
		var northEasternTile;
		var southWesternTile;
		

		//6tile cases. If tile is a 6, loop thru cases to evaluate which directions can access from.
		//if fails, then that direction won't be "pushed" on to setDirectionalConditions for THAT specific 6tile found at current x y
		if (findCoord === 6) { 
			//check this 6 tile for which directions exist, and if it has access
			if (y !== level.length-1) { //check if southern tile exists
				//it does, y is 1-6, check if have access from
				southernTile = level[y+1][x];
				console.log("Existing: The southern tile below the 6tile at (" + x + ", " + y + ") exists but can never be accessed from the south.");
				if (southernTile) { //6tile can never be accessed from southern tile
					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the southern tile.");
				} 	
			} else {
				console.log("Existing: the southern tile below the 6tile at (" + x + ", " + y + ") does NOT exist.");

			} 

			if (y !== 0) { //check if northern tile exists
				//it does, check if have access from
				northernTile = level[y-1][x];
				console.log(" Existing: The northern tile above the 6tile at (" + x + ", " + y + ") exists.");

				if (northernTile !== 1 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6) {
					easystar.setDirectionalCondition(x, y, [EasyStar.TOP]);
					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the northern tile.");
				} else {
					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the northern tile.");
				}
			} else {
				//northern tile does NOT exist. y===0
				console.log("Existing: the northern tile above the 6tile at (" + x + ", " + y + ") does NOT exist.");	
			}

			if (x !== 0) { //check if western tile exists
				//it does, check if have access from
				westernTile = level[y][x-1];
				console.log("Existing: The western tile left of the 6tile at (" + x + ", " + y + ") exists.");
				// debugger;
				if (westernTile !== 1 && westernTile !== 4 && westernTile !== 8) {
					easystar.setDirectionalCondition(x, y, [EasyStar.LEFT]);
					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the western tile.");
				} else {
					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the western tile.");
				}
			}
			if (x !== level[y].length-1) { //check if eastern tile exists
				//it does, x is 1-10. check if have acess from
				easternTile = level[y][x+1];
				console.log("Existing: The eastern tile right of the 6tile at (" + x + ", " + y + ") exists.");
				
				if (easternTile !== 1 && easternTile !== 5 && easternTile !== 9) {
					easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the eastern tile.");

				} else {
					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the eastern tile.");
				}
			}
			//check southeastern tile exists
			if ((y === 0 && x === level[y].length-1) || (y=== level.length-1 && x === level[y].length-1) || (y=== level.length-1 && x === 0) || (y=== level.length-1 && x !== 0 && x !== level[y].length-1) || (y !== 0 && y !== level.length-1 && x === level[y].length-1)) {
				//check if top right corner, bottom left corner, bottom wall, bottom right corner, east/right wall
				//if any of statements true, then run this code bc se corner is non existent for sure
					// southernTile = "not existing";
					console.log("broken!" + x+  ', ' + y)
				} else {
					console.log("checking se tile!")
					// setile exists so finish check southeastern
					southernTile = level[y+1][x+1];
					if ((southEasternTile === 0 && easternTile === 0) || (southEasternTile === 0 && southernTile === 0 && easternTile !== 4 && easternTile !== 5 && easternTile !== 6 && easternTile !== 9)) {
						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
					} else if ((southernTile === 0 || southernTile === 8 || southernTile === 9 || southernTile === 7) && southEasternTile !== 9 && southEasternTile !== 8 && southEasternTile !== 7 && easternTile !== 4 && easternTile !== 9 && easternTile !== 5 && easternTile !== 6) {
						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
					} else if (southernTile === 4 && southEasternTile !== 7 && southEasternTile !== 8 && southEasternTile !== 9 && easternTile !== 6 && easternTile !== 4 && easternTile !== 5 && easternTile !== 9) {
						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);				
					} else if (southernTile === 5 && southEasternTile !== 9 && southEasternTile !== 8 && southEasternTile !== 7 && easternTile !== 6 && easternTile !== 4 && easternTile !== 5 && easternTile !== 9) {
						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);				
					} else if (southernTile === 6 && southEasternTile !== 9 && southEasternTile !== 8 && southEasternTile !== 7 && easternTile !== 6 && easternTile !== 4 && easternTile !== 5 && easternTile !== 9) {
						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);				
					} else {
						console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the southeastern tile.")				
					}
				}
				

			//check southwestern tile exists
			if ((y=== level.length-1 && x === 0) || (y=== level.length-1 && x === level[y].length-1) || (y === 0 && x === 0) || (y !== 0 && y !== level.length-1 && x=== 0) || (y=== level.length-1 && x !== 0 && x !== level[y].length-1)) {
				//check if bottom left corner, bottom right, top left corner, along west left wall, along bottom wall
				console.log("broken!" + x + ', ' + y)
			} else {
				southWesternTile = level[y+1][x-1];
				if ((southernTile === 0 && southWesternTile === 0 && westernTile !== 4 && westernTile !== 5 && westernTile !== 6) || (southWesternTile === 0 && westernTile === 0)) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);					
				} else if ((southernTile === 9 || southernTile === 7 || southernTile === 8) && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 0 && southEasternTile !==0 && southernTile !== 0 && southWesternTile !== 7 && westernTile !== 5 && westernTile !== 4 && westernTile !== 6 && westernTile !== 8) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
				} else if (southernTile === 4 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 && westernTile !== 8 && westernTile !== 6 && westernTile !== 4 && westernTile !== 5) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);				
				} else if (southernTile === 5 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 & westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
				} else if (southernTile === 6 && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 7 && westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
				} else {
					console.log("Accessing: the 6tile at " + x + " and " + y + " cannot be accessed from the southwestern tile.")
				}		
			}	


			

			//check if top left corner
			// if (y === 0 && x === 0) {
			// 	//5 directions unavailable: northeast, north, northwest, west, southwest
			// 	//if true run this code:
			// 	//don't run setdirection on x y for .TOP, TOP_LEFT...etc.
			// 	//don't check unavailble directions.
			// 	//check for remain valid directions. for ex: 6 at 0,0 can also not access south
			// 	//check for east, southeast, south
			// 	//check south:
			// 	if (y !== level.length-1) { //check if southern tile exists
			// 		//it does, y is 1-6, check if have access from
			// 		southernTile = level[y+1][x];
			// 		console.log("Existing: The southern tile below the 6tile at (" + x + ", " + y + ") exists but can never be accessed from the south.");

			// 		if (southernTile) { //6tile can never be accessed from southern tile
			// 			console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the southern tile.");
			// 		}
			// 	} else { //y === 7
			// 		//southern tile does NOT exist
			// 		console.log("Existing: the southern tile below the 6tile at (" + x + ", " + y + ") does NOT exist.");
			// 	}
			// 	//check east
			// 	if (x !== level[y].length-1) { //check if eastern tile exists
			// 		//it does, x is 1-10. check if have acess from
			// 		easternTile = level[y][x+1];
			// 		console.log("Existing: The eastern tile right of the 6tile at (" + x + ", " + y + ") exists.");
				
			// 		if (easternTile !== 1 && easternTile !== 5 && easternTile !== 9) {
			// 			easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
			// 			console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the eastern tile.");

			// 		} else {
			// 			console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the eastern tile.");
			// 		}
			// 	}
			// }		
		}
	}
}
			// northernTile = level[y-1][x];
			// southernTile = level[y+1][x];
			// easternTile = level[y][x+1];
			// westernTile = level[y][x-1];
			// northWesternTile = level[y-1][x-1];
			// northEasternTile = level[y-1][x+1];
			// southEasternTile = level[y+1][x+1];
			// southWesternTile = level[y+1][x-1];

			

document.getElementById("myCanvas").height = level.length * 100;
document.getElementById("myCanvas").width = level[0].length * 100;

//vertical
for (var y =0; y < level.length; y+=1) {
	//horizontal
	for (var x=0; x < level[y].length; x+=1) {
		var findCoord = level[y][x];
		if (findCoord === 0 || findCoord === 4 || findCoord === 8 ||  findCoord === 9 || findCoord === 5 || findCoord === 6 || findCoord ===7) {
			context.beginPath();
			context.lineWidth = 2;
			context.strokeRect(x*100, y*100, 100, 100);
			context.closePath();
		}
	}
}

// Draw walls
for (var y = 0; y < level.length; y+=1) {
	for (var x=0; x< level[y].length; x+=1) {
		if (level[y][x] === 4) {
			context.beginPath();
			context.moveTo(x*100+100, y*100)
			context.lineTo(x*100+100, y*100+100)
			context.lineTo(x*100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
			context.closePath();
		} else if (level[y][x] === 9) {
			context.beginPath();
			context.moveTo(x*100, y*100+100)
			context.lineTo(x*100, y*100)
			context.lineTo(x*100+100, y*100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
			context.closePath();
		} else if (level[y][x] === 8) {
			context.beginPath();
			context.moveTo(x*100, y*100)
			context.lineTo(x*100+100, y*100)
			context.lineTo(x*100+100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
			context.closePath();
		} else if (level[y][x] === 5) {
			context.beginPath();
			context.moveTo(x*100, y*100)
			context.lineTo(x*100, y*100+100)
			context.lineTo(x*100+100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
			context.closePath();
		} else if (level[y][x] === 6) {
			context.beginPath();
			context.moveTo(x*100, y*100+100)
			context.lineTo(x*100+100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
			context.closePath();
		}
	}
}

//draw character
var jyn = new Image();
// image.addEventListener('load', function(){
	// context.drawImage(image, 0*100, 3*100, 98, 98);
// }, false);
jyn.src = 'img/jyn.jpg';

var red = new Image();
red.src = 'img/red.jpg';


easystar.setGrid(level);
//easyray.setAcceptableLOS([])

var coordinatesToDraw1 = [];
var coordinatesToDraw2 = [];

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	easystar.setAcceptableTiles([0, 4, 9, 8, 5, 6, 7]);

	easystar.enableCornerCutting();
	easystar.enableDiagonals();
	
	//if 4tile
	easystar.setDirectionalCondition(3, 1, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT]);
	easystar.setDirectionalCondition(2, 2, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT]);
	easystar.setDirectionalCondition(7, 4, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.TOP_RIGHT]);
	
	//if 0tile
	easystar.setDirectionalCondition(4, 2, [EasyStar.TOP, EasyStar.LEFT, EasyStar.BOTTOM_LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT, EasyStar.RIGHT, EasyStar.TOP_RIGHT]);
	easystar.setDirectionalCondition(4, 3, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT, EasyStar.RIGHT, EasyStar.TOP_RIGHT]);

	//if 9tile
	easystar.setDirectionalCondition(4, 1, [EasyStar.BOTTOM_LEFT, EasyStar.BOTTOM, EasyStar.BOTTOM_RIGHT, EasyStar.RIGHT]);
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
	// easystar.setDirectionalCondition(5, 4, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.RIGHT, EasyStar.TOP_RIGHT]);
	// easystar.setDirectionalCondition(6, 4, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.TOP_RIGHT, EasyStar.RIGHT]);
	// easystar.setDirectionalCondition(5, 2, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.BOTTOM_LEFT, EasyStar.TOP_RIGHT, EasyStar.RIGHT]);
	// easystar.setDirectionalCondition(6, 2, [EasyStar.TOP, EasyStar.TOP_LEFT, EasyStar.LEFT, EasyStar.TOP_RIGHT, EasyStar.RIGHT, EasyStar.BOTTOM_RIGHT]);

	//if 7tile


	easystar.findPath(0, 0, 3, 2, function( path ) {

	    if (path === null) {
	        console.log("The path to the destination point was not found.");
	    } else {
	      
	    	for (var i = 0; i < path.length; i++)
	    	{
	    		console.log("P: " + i + ", X: " + path[i].x + ", Y: " + path[i].y);
	    		coordinatesToDraw1.push(path[i].x);
	    		coordinatesToDraw2.push(path[i].y);
	    
    			// window.setTimeout(function drawPathNow() {
    			// 	context.drawImage(image, path[i].x*100+10, path[i].y*100+10, 80, 80);
    			// }, 2000)
				// pathingCoordinates1.push(path[i].x, path[i].y);
				// pathingCoordinates2.push(path[i].x, path[i].y);
				// push into array holder, if length of array = 2, then run code to push again but this time to another array form variable of tile, then empty the array holder,

				// context.lineTo(pathingCoordinates2[0]*100, pathingCoordinates2[1]*100)
				// context.stroke();
				// pathingCoordinates2.splice(0, 2);

		

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


//refactor so can't draw path without loading page over and over again
//
//0,0 === 10,10
//1,1 === 110, 110
//,1,2 === 110, 210
function clearImage() {
	if (coordinatesToDraw1.length !== 1) {
			context.clearRect(coordinatesToDraw1[0]*100+10, coordinatesToDraw2[0]*100+10, 80, 80);

		coordinatesToDraw1.splice(0, 1);
		coordinatesToDraw2.splice(0, 1);
		setTimeout(drawPathNow, 200)
	} 
	// coordinatesToDraw1.splice(0, 1);
	// coordinatesToDraw2.splice(0, 1);
	// setTimeout(drawPathNow, 500)
}

function drawPathNow() {
	context.drawImage(jyn, coordinatesToDraw1[0]*100+10, coordinatesToDraw2[0]*100+10, 80, 80);
	setTimeout(clearImage, 500);
}	
// window.onload can work without <body onload="">
window.onload = init;
