(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//test:




///****

//Starting Up:
var canvas=document.getElementById('myCanvas');
var context=canvas.getContext('2d');
var raycast = require('fast-voxel-raycast');
var easystar = new EasyStar.js();

var tilemap = [
    [ 0, 0, 0, 1 ],
    [ 1, 0, 0, 1 ],
    [ 1, 0, 0, 1 ],
    [ 1, 1, 1, 1 ]
]

function getTileAt(x, y) {
  return tilemap[y][x]
}

var rayStart = [1, 0]
var rayDir = [0, 1]
var maxDistance = 100

var hitPos = new Array(2)
var hitNormal = new Array(2)

var tile = raycast(getTileAt, rayStart, rayDir, maxDistance, hitPos, hitNormal)

console.log(hitPos)
console.log(hitNormal)


//Loading level

var scenarios = {
	core: {
		tutorial: [[]],
		aftermath: [[]]
	},


}

var heroes = {
	core: {
		jyn: {
			firstName: "Jyn",
			lastName: "Odan",
			type: "Range",
			utility: "Movement",
		}
	},

	twinShadows: {

	},

	bespinGambit: {

	},

	returnToHoth: {

	},

	jabbasRealm: {

	}
}

var allies = {

}

var imperials = {
	core: {}
}

var villains = {

}

//var level door closed.
//var level door opened
//need 2 as space with right hand wall
//need 3 as space with left hand wall
//door opened, flip those 2s and 3s to 0s.
//diff between 2 and 3 and 1, is that a 2tile is valid space to be on. 1 is not.
//need set directional conditional rule profiles for 2 and 3 now too
//ex if 2tile, N: can be 0, 2, 3, 7, 8, 9. can't be 6, 5, 4, 1
//S can be: 0, 2, 3, 4, 5, 6. can't be 8, 9, 1
//e can be: 0, 5, 9, 6, 7, 3. can't be 2, 4, 8, 1
//w can be: 0, 4, 8, 6, 7, 2. can't be 3, 1, 5, 9
//nw can be: yes from nw if nw 0 && north tile !== 5 && 4, 6, 9, 1 while western tile !==  8, 9, 7, 1, 4
//nw can be: yes from nw if nw 

var level = [
 //X 0  1  2  3  4  5  6  7  8  9 10  11    Y
	[0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //0
	[0, 0, 0, 4, 9, 0, 0, 0, 1, 1, 1, 1], //1 
	[0, 0, 4, 9, 0, 6, 6, 0, 0, 0, 1, 1], //2
	[0, 0, 8, 5, 0, 8, 9, 0, 0, 0, 1, 1], //3
	[0, 0, 0, 8, 5, 6, 6, 4, 0, 0, 1, 1], //4
	[0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0], //5
	[1, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0], //6
	[1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], //7
];

//noffle test if browserify worked:
// var tilemap = [
//     [ 0, 0, 0, 1 ],
//     [ 1, 0, 0, 1 ],
//     [ 1, 0, 0, 1 ],
//     [ 1, 1, 1, 1 ]
// ]

// function getTileAt(x, y) {
//   return tilemap[y][x]
// }

// var rayStart = [1, 0]
// var rayDir = [0, 1]
// var maxDistance = 100

// var hitPos = new Array(2)
// var hitNormal = new Array(2)

// var tile = raycast(getTileAt, rayStart, rayDir, maxDistance, hitPos, hitNormal)

// console.log(hitPos[0] + ", " + hitPos[1])
// console.log(hitNormal)

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

//Settings:
var mapHeight = level.length;
var mapWidth = level[0].length
var mapScale = 100;
document.getElementById("myCanvas").height = level.length * 100;
document.getElementById("myCanvas").width = level[0].length * 100;

var findTile;
var getCoordX; 
var getCoordY;

// var northernTile = level[y-1][x];
// var southernTile = level[y+1][x];
// var easternTile = level[y][x+1];
// var westernTile = level[y][x-1];
// var northWesternTile = level[y-1][x-1];
// var northEasternTile = level[y-1][x+1];
// var southEasternTile = level[y+1][x+1];
// var southWesternTile = level[y+1][x-1];	


// var northernTile
// level[y-1][x];

// var southernTile
// level[y+1][x];

// var easternTile
// level[y][x+1];

// var westernTile 
// level[y][x-1];

// var northWesternTile
// level[y-1][x-1];

// var northEasternTile
// level[y-1][x+1];

// var southEasternTile
// level[y+1][x+1];

// var southWesternTile
// level[y+1][x-1];	

 //if 6tile direction checks pass, push them as list into one line of array to set together at that current x and y
 // easystar.setDirectionalCondition(x, y, [EasyStar.TOP])

// var 6tiledirectionslist = {
// 	getCoordX
// 	getCoordY
// 	[EasyStar] + .top 
// }


// var validDirections = [];
// var listOfAllowedDirectionsofAlltiles = [
	
// ]

//need to run setdirectionalConditions function multiple times with different x,y, coords, and with custom

var validDirections = [];

//if succeeds, then save reference to that specific tile being evaluated, x, y + [EasyStar."direction"] to a function to finally run and turn on those directional conditions for that tile
function loopThruMap(targetTile, theMapArray, callback) {
	//vertical y
	for (var y =0; y < mapHeight; y+=1) {
	//horizontal x
		for (var x=0; x < mapWidth; x+=1) {
			
			currentTileEval = level[y][x];

			if (currentTileEval === targetTile) {
				getCoordY = y;
				getCoordX = x
				
				console.log("The " + targetTile + "tile is located at " + "(" + getCoordX + ", " + getCoordY + ").");

				callback(x, y); //within this call back, do pushing

				//run set function directional
				console.log("before running" + validDirections);
				easystar.setDirectionalCondition(x, y, validDirections);
				//reset valid directions variable so it's blank
				validDirections = [];
				console.log("after running" + validDirections);
			}

			// listOfAllowedDirectionsofAlltiles.push(easystar.setDirectionalCondition(x, y, validDirections))
			
		}
	}
};

//existence functions
function checkTileExistence(x, y) {
	//save reference to checking for tile coordinates that will return undefined because go outside bounds of map, whether negative or over map width or height.
	var topLeftCorner = (y === 0 && x === 0);
	var topRightCorner = (y === 0 && x === level[y].length-1);
	var bottomLeftCorner = (y=== level.length-1 && x === 0);
	var bottomRightCorner = (y=== level.length-1 && x === level[y].length-1);
	var alongTopWall = (y === 0 && x !== 0 && x !== level[y].length-1)
	var alongBottomWall = (y=== level.length-1 && x !== 0 && x !== level[y].length-1);
	var alongLeftWall = (y !== 0 && y !== level.length-1 && x=== 0);
	var alongRightWall = (y !== 0 && y !== level.length-1 && x === level[y].length-1);

	// var validDirections = [];
	// var listOfAllowedDirectionsofAlltiles = [
		
	// ]


	//if successful, pass xy into next round of checks for north direction
	switch(true) {
		//if case is false, run block of code until break. if no break in statement, keep running next code

		//check northerntile existence
		//if true, then northern tile doesn't exist
		case topLeftCorner:
			// so pop off already excluded non valid directions with .indexOf()
			//check east, southeast, south 
			//invoke checkEast(x, y), checksoutheast
			checkEast(x, y);
			checkSouthEast(x, y);
			checkSouth(x, y);
			break;
		case topRightCorner: 
			//check southwest, south, west
			checkSouthWest(x, y);
			checkSouth(x, y);
			checkWest(x, y);
			break;
		case alongTopWall:
			//check west, southwest, south, southeast, east
			checkWest(x, y);
			checkSouthWest(x, y);
			checkSouth(x, y);
			checkSouthEast(x, y);
			checkEast(x, y);
			break;


		//check southerntile existence
		case bottomLeftCorner:
			//check east, northeast, north
			checkEast(x, y);
			checkNorthEast(x, y);
			checkNorth(x, y);
			break;			
		case bottomRightCorner:
			//check  west, northwest, north	
			checkWest(x, y);
			checkNorthWest(x, y);
			checkNorth(x, y);
			break;
		case alongBottomWall:
			//check west, northwest, north, northeast, east
			checkWest(x, y);
			checkNorthWest(x, y);
			checkNorth(x, y);
			checkEast(x, y); 
			break;


		//check easterntile existence
		case topRightCorner:
			//check southwest, south, west
			checkSouthWest(x, y);
			checkSouth(x, y);
			checkWest(x, y);
			break;
		case bottomRightCorner:
			//check  west, northwest, north
			checkWest(x, y);
			checkNorthWest(x, y);
			checkNorth(x, y);
			break;			
		case alongRightWall:
			//check south, southwest, west, northwest, north
			checkSouth(x, y);
			checkSouthWest(x, y);
			checkWest(x, y);
			checkNorthWest(x, y);
			checkNorth(x, y);
			break;


		//check westerntile existence
		case topLeftCorner:
			//invoke checkEast(x, y), checkSouthwest
			checkEast(x, y);
			checkSouthEast(x, y);
			checkSouth(x, y);
			break;
		case bottomLeftCorner:
			//check east, northeast, north
			checkEast(x, y);
			checkNorthEast(x, y);
			checkNorth(x, y);		
			break;
		case alongLeftWall:
			//check north, northeast, east, southeast,south
			checkNorth(x, y);
			checkNorthEast(x, y);
			checkEast(x, y);
			checkSouthEast(x, y);
			checkSouth(x, y);
			break;

		//if none of those are true, then the current tile is not a corner or along the wall edges and can be safely checked for ALL directions
		default:
			checkNorth(x, y);
			checkSouth(x, y);
			checkEast(x, y);
			checkWest(x, y);
			checkNorthEast(x, y);
			checkNorthWest(x, y);
			checkSouthEast(x, y);
			checkSouthWest(x, y);
		

			//another switch statement: check southerntile existence or check all existences at same time

			//checkNorth(x, y) checkEast() checkSoutheast(), etc...
	}
}

// var firstPart;
// var secondPart;

// //take the first part: easystar.setDirectional
// function singleDirectionalStatement(x, y, ) {

// }

//easystar.setDirectionalCondition(x, y, [list of allowed directions , etc, etc,])


//PLAN OF ATTACK:
//declare variable for the 6tile at xy outside in global scope available
// during loop, push x and y being evaluated 
// during check push direction with ,

//for example:
// var 6direction = []
// var 6summarystatement = easystar.setDirectionalConditions(6direction[0], 6direction[1] )
//6direction.push(x, y)
//now var 6direction = [x, y]
//now 6direction[0] = x and 6direction[1] = y




//directional access checking before setdirectional conditions on currently evaluated tile at x, y
//check east
function checkEast(x, y) {
	var easternTile = level[y][x+1];

	if (currentTileEval === 6) {
		switch(true) {
			case (easternTile !== 1 && easternTile !== 5 && easternTile !== 9):
				//push x, y separately from somewhere
				// push direction string + ,
				// easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT, ]);
				validDirections.push(EasyStar.RIGHT)

				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the east.");
				break;
			default:
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the east.");
		}
	}

	// if (currentTileEval === 7) {
	// 	switch(true) {
	// 		case lakjeflah:
	// 		default: 
	// 	}
	// }
}

function checkWest(x, y) {
	var westernTile = level[y][x-1];

	if (currentTileEval === 6) {
		switch(true) {
			case (westernTile !== 1 && westernTile !== 4 && westernTile !== 8):
				// easystar.setDirectionalCondition(x, y, [EasyStar.LEFT]);
				validDirections.push(EasyStar.LEFT)
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the west.");
				break;
			default:
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the west.");
		}
	}
}

function checkNorth(x, y) {
	var northernTile = level[y-1][x];

	if (currentTileEval === 6) {
		switch(true) {
			case (northernTile !== 1 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6):
				// easystar.setDirectionalCondition(x, y, [EasyStar.TOP]);
				validDirections.push(EasyStar.TOP)
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the north.");
				break;
			default:
		}
	}
}

function checkSouth(x, y) {
	var southernTile = level[y+1][x];

	if (currentTileEval === 6) {
		switch(true) {
			default: 	
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the south.");
		}
	}
}

function checkNorthWest(x, y) {
	var northWesternTile = level[y-1][x-1];
	var westernTile = level[y][x-1];
	var northernTile = level[y-1][x];

	if (level[y] === 2 && level[y][x] === 5) {
		debugger;
	}
	if (currentTileEval === 6) {
		switch(true) {
			case (northWesternTile === 4 || northWesternTile === 1):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northwest #1.");
				break;
			//checks against intersecting corners?
			case(northernTile === 1 && westernTile === 1):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northwest #2.");
				break; 
			case (northernTile === 9 && westernTile === 9):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northwest #9.");
				break;
			case (northWesternTile === 5 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && northernTile !== 9 && westernTile !== 8 && westernTile !== 4):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northwest #3.");				
				break;
			case (northWesternTile === 6 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && northernTile !== 9):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northwest #4.");								
				break;
			case (northWesternTile === 7 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && northernTile !== 9 && westernTile !== 8 && westernTile !== 9 && westernTile !== 7 && westernTile !== 4):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northwest #5.");								
				break;
			case (northWesternTile === 8 || northWesternTile === 0 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && westernTile !== 4 && westernTile !== 7 && westernTile !== 8 && westernTile !== 9):
				// easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				validDirections.push(EasyStar.TOP_LEFT);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northwest #6.");				
				break;
			case ((northWesternTile === 9) && (northernTile === 4 || northernTile === 5 || northernTile === 6) && (westernTile === 8 || westernTile === 9 || westernTile === 7)):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northwest #7.");
				break;				
			case ((northWesternTile === 9) && (westernTile === 4) && northernTile === 4 || northernTile === 5 || northernTile === 6 || northernTile === 9):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northwest #8.");
				break;
			case ((northernTile === 5 || northernTile === 6 || northernTile === 4) && northWesternTile !== 5 && northWesternTile !== 6):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("nw 9")
				break;
			case (northernTile === 9 && northWesternTile !== 5 && northWesternTile !== 6 && northWesternTile !== 4):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("nw 10")
				break;
			case (northernTile === 9 && westernTile !== 7 && westernTile !== 8 && westernTile !== 9 && westernTile !== 4):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("nw 11")
				break;
			case (northWesternTile === 5 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && northernTile !== 9):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("nw 12")
				break;
			case (northWesternTile === 8 && westernTile !== 8 && westernTile !== 9 && westernTile !== 7 && westernTile === 4):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
				console.log("nw13")
				break;
			case (northWesternTile === 9 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && westernTile !== 8):
			default:
				console.log("nw default 14")
		}
	}
}

function checkNorthEast(x, y) {
	var northEasternTile = level[y-1][x+1];
	var easternTile = level[y][x+1];
	var northernTile = level[y-1][x];
	
	if (currentTileEval === 6) {
		switch(true) {
			case (northEasternTile === 5):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northeast #1.");
				break;
			case (northernTile === 1 && easternTile === 1):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northeast #2.");
				break;
			case (northernTile === 8 && easternTile === 8):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the northeast #5.");
				break;
			case (northEasternTile === 4 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && northernTile !== 9 && easternTile !== 9 && easternTile !== 5):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northeast #3.");
				break;
			case (northEasternTile === 6 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && northernTile !== 8):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northeast #4.");
				break;
			case (northEasternTile === 7 && northernTile == 4 || northernTile !== 5 && northernTile !== 6 && easternTile !== 8 && easternTile !== 9 && easternTile !== 7):
				// easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
				validDirections.push(EasyStar.TOP_RIGHT);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northeast #6.");
				break;
			case (northEasternTile === 8 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6 && northernTile !== 8 && easternTile !== 8 && easternTile !== 9 && easternTile !== 7 && easternTile !== 5):
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the northeast #4.");
				break;
			default:
		}
	}	
}

function checkSouthWest(x, y) {
	var southWesternTile = level[y+1][x-1];
	var westernTile = level[y][x-1];
	var southernTile = level[y+1][x];

	if (currentTileEval === 6) {
		switch(true) {
			case (southWesternTile === 1 || southWesternTile === 8):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southwest #5.");
				break; 
			case (westernTile === 6 || westernTile === 4 || westernTile === 5 || westernTile === 8):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southwest #1.");
				break;
			case (westernTile === 1 && southernTile === 1):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southwest #2.");
				break;
			case (southWesternTile === 8 || southWesternTile === 7 || southWesternTile === 9 || southWesternTile === 1):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southwest #3.");
				break;
			default:
				// easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
				validDirections.push(EasyStar.BOTTOM_LEFT);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the southwest #4.");
		} 
	}
}

function checkSouthEast(x, y) {
	var southEasternTile = level[y+1][x+1];
	var easternTile = level[y][x+1];
	var southernTile = level[y+1][x];

	if (currentTileEval === 6) {
		switch(true) {
			case (southEasternTile === 1 || 9):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southeast #9.");
				break; 
			case (easternTile === 6 || easternTile === 4 || easternTile === 5 || easternTile === 9):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southeast #1.");
				break;
			case (southEasternTile === 7 || southEasternTile === 8 || southEasternTile === 9):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southeast #2.");				
				break;
			case (southernTile === 1 && easternTile === 1):
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southeast #3.");				 
				break;
			case (easternTile === 0 && southEasternTile === 0):
				// easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
				validDirections.push(EasyStar.BOTTOM_RIGHT);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the southeast #4.");				 
				break;
			case (southernTile === 0 && southEasternTile === 0 && easternTile !== 4 && easternTile !== 5 && easternTile !== 6 && easternTile !== 9):
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the southeast #5.");				 				
				break;
			case (southernTile === 0 && easternTile === 0 && southEasternTile === 0):
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the southeast #6.");				 				
				break;
			case (southernTile === 8 || southernTile === 9 || southernTile === 7 && easternTile !== 6 && easternTile !== 5 && easternTile !== 4 && easternTile !== 9):
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
				console.log("This 6tile (" + x + ", " + y + ") is set to be accessed from the southeast #7.");				 	
				break;
			default:
				console.log("This 6tile (" + x + ", " + y + ") should not be accessed from the southeast #8.");
		}
	}
}

loopThruMap(6, level, checkTileExistence); 

//push current for loop x and y when find 6tiles into map location object as an array


///////////////////////////////

// for (var y =0; y < level.length; y+=1) {
// 	//horizontal x
// 	for (var x=0; x < level[y].length; x+=1) {
		
// 		var findCoord = level[y][x];
// 		var northernTile;
// 		var westernTile;
// 		var southernTile;
// 		var easternTile;
// 		var northWesternTile;
// 		var southEasternTile;
// 		var northEasternTile;
// 		var southWesternTile;
		
// 		if (x===5 && y ===2 ) {
// 			// debugger;
// 		}
// 		//6tile cases. If tile is a 6, loop thru cases to evaluate which directions can access from.
// 		//if fails, then that direction won't be "pushed" on to setDirectionalConditions for THAT specific 6tile found at current x y
// 		if (findCoord === 6) { 
// 			//check this 6 tile for which directions exist, and if it has access
// 			if (y !== level.length-1) { //check if southern tile exists
// 				//it does, y is 1-6, check if have access from
// 				southernTile = level[y+1][x];
// 				console.log("Existing: The southern tile below the 6tile at (" + x + ", " + y + ") exists but can never be accessed from the south.");
// 				if (southernTile) { //6tile can never be accessed from southern tile
// 					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the southern tile.");
// 				} 	
// 			} else {
// 				console.log("Existing: the southern tile below the 6tile at (" + x + ", " + y + ") does NOT exist.");

// 			} 

// 			if (y !== 0) { //check if northern tile exists
// 				//it does, check if have access from
// 				northernTile = level[y-1][x];
// 				console.log(" Existing: The northern tile above the 6tile at (" + x + ", " + y + ") exists.");

// 				if (northernTile !== 1 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.TOP]);
// 					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the northern tile.");
// 				} else {
// 					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the northern tile.");
// 				}
// 			} else {
// 				//northern tile does NOT exist. y===0
// 				console.log("Existing: the northern tile above the 6tile at (" + x + ", " + y + ") does NOT exist.");	
// 			}

// 			if (x !== 0) { //check if western tile exists
// 				//it does, check if have access from
// 				westernTile = level[y][x-1];
// 				console.log("Existing: The western tile left of the 6tile at (" + x + ", " + y + ") exists.");
// 				// debugger;
// 				if (westernTile !== 1 && westernTile !== 4 && westernTile !== 8) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.LEFT]);
// 					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the western tile.");
// 				} else {
// 					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the western tile.");
// 				}
// 			}
// 			if (x !== level[y].length-1) { //check if eastern tile exists
// 				//it does, x is 1-10. check if have acess from
// 				easternTile = level[y][x+1];
// 				console.log("Existing: The eastern tile right of the 6tile at (" + x + ", " + y + ") exists.");
				
// 				if (easternTile !== 1 && easternTile !== 5 && easternTile !== 9) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
// 					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the eastern tile.");

// 				} else {
// 					console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the eastern tile.");
// 				}
// 			}
// 			//check southeastern tile exists
// 			if ((y === 0 && x === level[y].length-1) || (y=== level.length-1 && x === level[y].length-1) || (y=== level.length-1 && x === 0) || (y=== level.length-1 && x !== 0 && x !== level[y].length-1) || (y !== 0 && y !== level.length-1 && x === level[y].length-1)) {
// 				//check if top right corner, bottom left corner, bottom wall, bottom right corner, east/right wall
// 				//if any of statements true, then run this code bc se corner is non existent for sure
// 					// southernTile = "not existing";
// 					console.log("broken!" + x+  ', ' + y)
// 				} else {
// 					console.log("checking se tile!")
// 					// setile exists so finish check southeastern
// 					southEasternTile = level[y+1][x+1];
// 					if ((southEasternTile === 0 && easternTile === 0) || (southEasternTile === 0 && southernTile === 0 && easternTile !== 4 && easternTile !== 5 && easternTile !== 6 && easternTile !== 9)) {
// 						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
// 					} else if ((southernTile === 0 || southernTile === 8 || southernTile === 9 || southernTile === 7) && southEasternTile !== 9 && southEasternTile !== 8 && southEasternTile !== 7 && easternTile !== 4 && easternTile !== 9 && easternTile !== 5 && easternTile !== 6) {
// 						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);
// 					} else if (southernTile === 4 && southEasternTile !== 7 && southEasternTile !== 8 && southEasternTile !== 9 && easternTile !== 6 && easternTile !== 4 && easternTile !== 5 && easternTile !== 9) {
// 						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);				
// 					} else if (southernTile === 5 && southEasternTile !== 9 && southEasternTile !== 8 && southEasternTile !== 7 && easternTile !== 6 && easternTile !== 4 && easternTile !== 5 && easternTile !== 9) {
// 						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);				
// 					} else if (southernTile === 6 && southEasternTile !== 9 && southEasternTile !== 8 && southEasternTile !== 7 && easternTile !== 6 && easternTile !== 4 && easternTile !== 5 && easternTile !== 9) {
// 						easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_RIGHT]);				
// 					} else {
// 						console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the southeastern tile.")				
// 					}
// 				}
				

// 			//check southwestern tile exists
// 			if ((y=== level.length-1 && x === 0) || (y=== level.length-1 && x === level[y].length-1) || (y === 0 && x === 0) || (y !== 0 && y !== level.length-1 && x=== 0) || (y=== level.length-1 && x !== 0 && x !== level[y].length-1)) {
// 				//check if bottom left corner, bottom right, top left corner, along west left wall, along bottom wall
// 				console.log("broken!" + x + ', ' + y)
// 			} else {
// 				southWesternTile = level[y+1][x-1];
// 				if ((southernTile === 0 && southWesternTile === 0 && westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8)) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);				
// 				} else if ((southernTile === 9 || southernTile === 7 || southernTile === 8) && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 0 && southEasternTile !==0 && southernTile !== 0 && southWesternTile !== 7 && westernTile !== 5 && westernTile !== 4 && westernTile !== 6 && westernTile !== 8) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
// 				} else if (southernTile === 4 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 && westernTile !== 8 && westernTile !== 6 && westernTile !== 4 && westernTile !== 5) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);				
// 				} else if (southernTile === 5 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 & westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
// 				} else if (southernTile === 6 && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 7 && westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
// 					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
// 				} else if (southWesternTile === 0 && westernTile === 0 && southernTile === 0) { //weird case. without southerntile, avoids accessing 5,2 from east and only goes into at west
// 					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
// 				} else {
// 					console.log("Accessing: the 6tile at " + x + " and " + y + " cannot be accessed from the southwestern tile.")

// 				}		
// 			}	

// 			//check northwestern tile exists
// 			// if ((y === 0 && x === 0) || (y === 0 && x === level[y].length-1) || (y=== level.length-1 && x === 0) || (y !== 0 && y !== level.length-1 && x=== 0) || (y === 0 && x !== 0 && x !== level[y].length-1)) {
// 			// 	//check if top left corner, top right corner, bottom left corner, along western left wall, along top wall
// 			// 	console.log("broken bro!");
// 			// } else {
// 			// 	//do rest of checks, ne tile exists, set it to value
// 			// 	northEasternTile = level[y-1][x+1];
// 			// 	if ((northernTile === 0 && northEasternTile === 0) || (northEasternTile === 0 && easternTile === 0)) {
// 			// 		easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
// 			// 	} else if ((northernTile === 0 || northernTile === 4 || northernTile === 5 || northernTile ===6) && northEasternTile !== 4 && northEasternTile !== 5 && northEasternTile !== 6 && easternTile !== 8 && easternTile !== 9 && easternTile !== 7 && easternTile !== 5) {
// 			// 		easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
// 			// 	} else if (northernTile === 8 && northEasternTile !== 5 && northEasternTile !== 6 && northEasternTile !== 4 && easternTile !== 5 && easternTile !== 7 && easternTile !== 9 && easternTile !== 8) {
// 			// 		easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
// 			// 	} else if (northernTile === 9 && northEasternTile !== 5) {
// 			// 		easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
// 			// 	} else if (northernTile === 5 && northEasternTile !== 6 && northEasternTile !== 4 && northEasternTile !== 5 && easternTile !== 7 && easternTile !== 9 && easternTile !== 8) {
// 			// 		easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
// 			// 	} else {
// 			// 		console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the northeastern tile.")
// 			// 	}
// 			// }
			

// 			//check if top left corner
// 			// if (y === 0 && x === 0) {
// 			// 	//5 directions unavailable: northeast, north, northwest, west, southwest
// 			// 	//if true run this code:
// 			// 	//don't run setdirection on x y for .TOP, TOP_LEFT...etc.
// 			// 	//don't check unavailble directions.
// 			// 	//check for remain valid directions. for ex: 6 at 0,0 can also not access south
// 			// 	//check for east, southeast, south
// 			// 	//check south:
// 			// 	if (y !== level.length-1) { //check if southern tile exists
// 			// 		//it does, y is 1-6, check if have access from
// 			// 		southernTile = level[y+1][x];
// 			// 		console.log("Existing: The southern tile below the 6tile at (" + x + ", " + y + ") exists but can never be accessed from the south.");

// 			// 		if (southernTile) { //6tile can never be accessed from southern tile
// 			// 			console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the southern tile.");
// 			// 		}
// 			// 	} else { //y === 7
// 			// 		//southern tile does NOT exist
// 			// 		console.log("Existing: the southern tile below the 6tile at (" + x + ", " + y + ") does NOT exist.");
// 			// 	}
// 			// 	//check east
// 			// 	if (x !== level[y].length-1) { //check if eastern tile exists
// 			// 		//it does, x is 1-10. check if have acess from
// 			// 		easternTile = level[y][x+1];
// 			// 		console.log("Existing: The eastern tile right of the 6tile at (" + x + ", " + y + ") exists.");
				
// 			// 		if (easternTile !== 1 && easternTile !== 5 && easternTile !== 9) {
// 			// 			easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
// 			// 			console.log("Accessing: the 6tile at (" + x + ", " + y + ") is accessible from the eastern tile.");

// 			// 		} else {
// 			// 			console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the eastern tile.");
// 			// 		}
// 			// 	}
// 			// }		
// 		}
// 	}
// }
			// northernTile = level[y-1][x];
			// southernTile = level[y+1][x];
			// easternTile = level[y][x+1];
			// westernTile = level[y][x-1];
			// northWesternTile = level[y-1][x-1];
			// northEasternTile = level[y-1][x+1];
			// southEasternTile = level[y+1][x+1];
			// southWesternTile = level[y+1][x-1];

/////////////////////////////////////////

// Draw grid
//vertical
for (var y =0; y < level.length; y+=1) {
	//horizontal
	for (var x=0; x < level[y].length; x+=1) {
		var findCoord = level[y][x];
		if (findCoord === 0 || findCoord === 4 || findCoord === 8 ||  findCoord === 9 || findCoord === 5 || findCoord === 6 || findCoord ===7 || findCoord === 2 || findCoord === 3) {
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
			//draw 2s and 3s. 2 is space | 
			//3 is | space
		} else if (level[y][x] === 2) {
			context.beginPath();
			context.moveTo(x*100+100, y*100)
			context.lineTo(x*100+100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
			context.closePath();
		} else if (level[y][x] === 3) {
			context.beginPath();
			context.moveTo(x*100, y*100)
			context.lineTo(x*100, y*100+100)
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

	easystar.setAcceptableTiles([0, 4, 9, 8, 5, 6, 7, 2, 3]);

	easystar.enableCornerCutting();
	easystar.enableDiagonals();
	
	// if 4tile
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


	easystar.calculate()

	
	// add eventListener for tizenhwkey
	// document.addEventListener('tizenhwkey', function(e) {
	// 	if(e.keyName == "back") {
	// 		try {
	// 			tizen.application.getCurrentApplication().exit();
	// 		} catch (error) {
	// 			console.error("getCurrentApplication(): " + error.message);
	// 		}
	// 	}
	// });
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

},{"fast-voxel-raycast":2}],2:[function(require,module,exports){
"use strict"

function traceRay_impl( getVoxel,
	px, py, pz,
	dx, dy, dz,
	max_d, hit_pos, hit_norm) {
	
	// consider raycast vector to be parametrized by t
	//   vec = [px,py,pz] + t * [dx,dy,dz]
	
	// algo below is as described by this paper:
	// http://www.cse.chalmers.se/edu/year/2010/course/TDA361/grid.pdf
	
	var t = 0.0
		, floor = Math.floor
		, ix = floor(px) | 0
		, iy = floor(py) | 0
		, iz = floor(pz) | 0

		, stepx = (dx > 0) ? 1 : -1
		, stepy = (dy > 0) ? 1 : -1
		, stepz = (dz > 0) ? 1 : -1
		
	// dx,dy,dz are already normalized
		, txDelta = Math.abs(1 / dx)
		, tyDelta = Math.abs(1 / dy)
		, tzDelta = Math.abs(1 / dz)

		, xdist = (stepx > 0) ? (ix + 1 - px) : (px - ix)
		, ydist = (stepy > 0) ? (iy + 1 - py) : (py - iy)
		, zdist = (stepz > 0) ? (iz + 1 - pz) : (pz - iz)
		
	// location of nearest voxel boundary, in units of t 
		, txMax = (txDelta < Infinity) ? txDelta * xdist : Infinity
		, tyMax = (tyDelta < Infinity) ? tyDelta * ydist : Infinity
		, tzMax = (tzDelta < Infinity) ? tzDelta * zdist : Infinity

		, steppedIndex = -1
	
	// main loop along raycast vector
	while (t <= max_d) {
		
		// exit check
		var b = getVoxel(ix, iy, iz)
		if (b) {
			if (hit_pos) {
				hit_pos[0] = px + t * dx
				hit_pos[1] = py + t * dy
				hit_pos[2] = pz + t * dz
			}
			if (hit_norm) {
				hit_norm[0] = hit_norm[1] = hit_norm[2] = 0
				if (steppedIndex === 0) hit_norm[0] = -stepx
				if (steppedIndex === 1) hit_norm[1] = -stepy
				if (steppedIndex === 2) hit_norm[2] = -stepz
			}
			return b
		}
		
		// advance t to next nearest voxel boundary
		if (txMax < tyMax) {
			if (txMax < tzMax) {
				ix += stepx
				t = txMax
				txMax += txDelta
				steppedIndex = 0
			} else {
				iz += stepz
				t = tzMax
				tzMax += tzDelta
				steppedIndex = 2
			}
		} else {
			if (tyMax < tzMax) {
				iy += stepy
				t = tyMax
				tyMax += tyDelta
				steppedIndex = 1
			} else {
				iz += stepz
				t = tzMax
				tzMax += tzDelta
				steppedIndex = 2
			}
		}

	}
	
	// no voxel hit found
	if (hit_pos) {
		hit_pos[0] = px + t * dx
		hit_pos[1] = py + t * dy
		hit_pos[2] = pz + t * dz
	}
	if (hit_norm) {
		hit_norm[0] = hit_norm[1] = hit_norm[2] = 0
	}

	return 0

}


// conform inputs

function traceRay(getVoxel, origin, direction, max_d, hit_pos, hit_norm) {
	var px = +origin[0]
		, py = +origin[1]
		, pz = +origin[2]
		, dx = +direction[0]
		, dy = +direction[1]
		, dz = +direction[2]
		, ds = Math.sqrt(dx * dx + dy * dy + dz * dz)

	if (ds === 0) {
		throw new Error("Can't raycast along a zero vector")
	}

	dx /= ds
	dy /= ds
	dz /= ds
	if (typeof (max_d) === "undefined") {
		max_d = 64.0
	} else {
		max_d = +max_d
	}
	return traceRay_impl(getVoxel, px, py, pz, dx, dy, dz, max_d, hit_pos, hit_norm)
}

//



module.exports = traceRay
},{}]},{},[1]);
