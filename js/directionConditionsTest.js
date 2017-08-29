//for directional condition logic for specific tiles to cover all cases

//for 6tile
//what are conditions to move into a 6tile?
//6tile can be accessed from top EasyStar.TOP if

// var currentCoordinate = level[y][x];
//test
//loop through level 2d array
//vertical y
for (var y =0; y < level.length; y+=1) {
	//horizontal x
	for (var x=0; x < level[y].length; x+=1) {
		var findCoord = level[y][x];
		
		var northernTile = level[y-1][x];
		var southernTile = level[y+1][x];
		var easternTile = level[y][x+1];
		var westernTile = level[y][x-1]
		var northWesternTile = level[y-1][x-1];
		var northEasternTile = level[y-1][x-]

		if (findCoord === 6) {
			//if find 6tile, look directly above it for the northern tile and save reference to this tile north of the current 6tile being evaulated
			// var northernTile = level[y-1][x];
			//if northernTile is not a 6,4,5 tile, then tell easystar we can access the current tile (x, y), which is the 6tile we're "on" from the top
			if (northernTile !== 6 && northernTile !== 4 && northernTile !== 5) {
					easystar.setDirectionalCondition(x, y, [EasyStar.TOP]);
			}

			if ()

		}

	}

}

//put this code after findPath() run, but before calculate. It will 