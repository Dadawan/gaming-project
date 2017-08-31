			//check if top left corner
			if (y === 0 && x === 0)
			} else if (y === 0 && x === level[y].length-1) {
				//check if top right corner
				//5 directions unavailable: northwest, north, northeast, east, southeast
				//check for south, southwest, west
			} else if (y === 0 && x !== 0 && x !== level[y].length-1) {
				//then along top wall, but between corners
				//3 directions unavailble: northeast, north, northwest
				//check for southwest, south, southeast
			} else if (y=== level.length-1 && x === 0) {	
				//check if bottom left corner
				//5 directions unavailable: northwest, west, southwest, south, southeast
				//check east, northeast, north
			} else if (y=== level.length-1 && x === level[y].length-1) {
				//check if bottom right corner
				//5 directions unavailable: northeast, east, southeast, south, southwest
				//check  west, northwest, north
			} else if (y=== level.length-1 && x !== 0 && x !== level[y].length-1) {
				//then along bottom wall but between corners
				//3 directions unavailable: southwest, south, southeast
				//check west, northwest, north, northeast, east 
			} else if (y !== 0 && y !== level.length-1 && x=== 0) {
				//check if along west/left wall but not corners
				//3 directions unavailable: northwest, west, southwest
				//check north, northeast, east, southeast,south
			} else if (y !== 0 && y !== level.length-1 && x === level[y].length-1) {
				//check if along east/right wall but not corners
				//3 directions unavailable: northeast, east, southeast
				//check south, southwest, west, northwest, north
			} else {
				//check regularly, all positions????
			}

			//check for diagonal directions now that have ruled out???


			------

			//check if top left corner
			if (y === 0 && x === 0) {
				//5 directions unavailable: northeast, north, northwest, west, southwest
				//if true run this code:
				//don't run setdirection on x y for .TOP, TOP_LEFT...etc.
				//don't check unavailble directions.
				//check for remain valid directions. for ex: 6 at 0,0 can also not access south
				//check for east, southeast, south
				//check south:
				if (y !== level.length-1) { //check if southern tile exists
					//it does, y is 1-6, check if have access from
					southernTile = level[y+1][x];
					console.log("Existing: The southern tile below the 6tile at (" + x + ", " + y + ") exists but can never be accessed from the south.");

					if (southernTile) { //6tile can never be accessed from southern tile
						console.log("Accessing: the 6tile at (" + x + ", " + y + ") is NOT accessible from the southern tile.");
					}
				} else { //y === 7
					//southern tile does NOT exist
					console.log("Existing: the southern tile below the 6tile at (" + x + ", " + y + ") does NOT exist.");
				}
				//check east
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
				//**check southeastern tile exists and is valid. 
				// when set this ? southEasternTile = level[y+1][x+1];
				//errors will pop up if y===7 and x===11
				if ((y === 0 && x === level[y].length-1) || (y=== level.length-1 && x === level[y].length-1) || (y=== level.length-1 && x === 0) || (y=== level.length-1 && x !== 0 && x !== level[y].length-1) || (y !== 0 && y !== level.length-1 && x === level[y].length-1)) {
				//check if top right corner, bottom left corner, bottom wall, bottom right corner, east/right wall
				//if any of statements true, then run this code bc se corner is non existent for sure
					// southernTile = "not existing";
					break;
					console.log("broken!")
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
			}