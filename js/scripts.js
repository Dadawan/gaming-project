var easystar = new EasyStar.js();

var canvas=document.getElementById('myCanvas');
var context=canvas.getContext('2d');


var level = [
   //0  1  2  3  4  5  6  7  8  9 10  11
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
//vertical
for (var y =0; y < level.length; y+=1) {
	//horizontal
	for (var x=0; x < level[y].length; x+=1) {
		var findCoord = level[y][x];
		if (findCoord === 0 || findCoord === 4 || findCoord === 8 ||  findCoord === 9 || findCoord === 5 || findCoord === 6 || findCoord ===7) {
			context.lineWidth = 2;
			context.strokeRect(x*100, y*100, 100, 100);

		}
		// if (findCoord === 6) {
		// 	var inArrayForm = [x, y]
		// 	console.log(inArrayForm);
		// }

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
		} else if (level[y][x] === 9) {
			context.beginPath();
			context.moveTo(x*100, y*100+100)
			context.lineTo(x*100, y*100)
			context.lineTo(x*100+100, y*100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
		} else if (level[y][x] === 8) {
			context.beginPath();
			context.moveTo(x*100, y*100)
			context.lineTo(x*100+100, y*100)
			context.lineTo(x*100+100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
		} else if (level[y][x] === 5) {
			context.beginPath();
			context.moveTo(x*100, y*100)
			context.lineTo(x*100, y*100+100)
			context.lineTo(x*100+100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
		} else if (level[y][x] === 6) {
			context.beginPath();
			context.moveTo(x*100, y*100+100)
			context.lineTo(x*100+100, y*100+100)
			context.lineWidth = 8;
			context.strokeStyle = "black";
			context.stroke();
		}
	}
}

//draw character
var image = new Image();
image.addEventListener('load', function(){
	// context.drawImage(image, 0*100, 3*100, 98, 98);
}, false);
image.src = 'img/jyn.jpg';


easystar.setGrid(level);


//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	easystar.setAcceptableTiles([0, 4, 9, 8, 5, 6, 7]);
		// easystar.setAcceptableTiles([0]);

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

	//if 7tile

	easystar.findPath(0, 0, 4, 1, function( path ) {

	    if (path === null) {
	        console.log("The path to the destination point was not found.");
	    } else {
	      
	    	for (var i = 0; i < path.length; i++)
	    	{
	    		console.log("P: " + i + ", X: " + path[i].x + ", Y: " + path[i].y);
    			context.drawImage(image, path[i].x*100+10, path[i].y*100+10, 80, 80);
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
// window.onload can work without <body onload="">
window.onload = init;
