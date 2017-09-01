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
		var westernTile = level[y][x-1];
		var northWesternTile = level[y-1][x-1];
		var northEasternTile = level[y-1][x+1];
		var southEasternTile = level[y+1][x+1];
		var southWesternTile = level[y+1][x-1];

		//6tile cases. If tile is a 6, loop thru cases to evaluate which directions can access from.
		//if fails, then that direction won't be "pushed" on to setDirectionalConditions for THAT specific 6tile found at current x y
		if (findCoord ===6) {
			//can it be acessed from north?
			if (northernTile !== 7 && northernTile !== 9 && northernTile !== 8)	 {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP]);
			}
			//cannot be accessed from south.
			//can it be accessed from west?
			if (westernTile !== 4 && westernTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.LEFT]);
			}
			//can it be accessed from east?
			if (easternTile !== 5 && easternTile !== 9) {
				easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
			}
			//can it be accessed from northwest?
			//even if it's 1 or 2 or 3, since those aren't walkable, will never enter this space from a northwestern 1tile anyway.
			if ((northernTile === 0 && northWesternTile) || (northWesternTile === 0 && westernTile === 0)) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else if ((northernTile === 0 || northernTile === 4 || northernTile === 5 || northernTile === 6) && northWesternTile !== 4 && northWesternTile !== 5 && northWesternTile !== 6 && westernTile !== 8 && westernTile !== 9 && westernTile !== 7 && westernTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
			} else if (northernTile === 9 && northWesternTile !== 4 && northWesternTile !== 5 && northWesternTile !== 6 && westernTile !== 7 && westernTile !== 8 && westernTile !== 9 && westernTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else if (northWesternTile === 5 && northernTile !== 9 && northernTile !== 6 && northernTile !== 5 && northernTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
			} else if (northernTile === 8 && northWesternTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else if (northWesternTile === 8 && westernTile !== 4 & westernTile !== 8 && westernTile !== 9 && westernTile !== 7) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else {
				console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the northwestern tile.")
				break;
			}

			//can it be accessed from northeast?
			if ((northernTile === 0 && northEasternTile === 0) || (northEasternTile === 0 easternTile === 0)) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else if ((northernTile === 0 || northernTile === 4 || northernTile === 5 || northernTile ===6) && northEasternTile !== 4 && northEasternTile !== 5 && northEasternTile !== 6 && easternTile !== 8 && easternTile !== 9 && easternTile !== 7 && easternTile !== 5) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
			} else if (northernTile === 8 && northEasternTile !== 5 && northEasternTile !== 6 && northEasternTile !== 4 && easternTile !== 5 && easternTile !== 7 && easternTile !== 9 && easternTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else if (northernTile === 9 && northEasternTile !== 5) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else if (northernTile === 5 && northEasternTile !== 6 && northEasternTile !== 4 && northEasternTile !== 5 && easternTile !== 7 && easternTile !== 9 && easternTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else {
				console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the northeastern tile.")
				break;
			}

			//can it be accessed from the southwest?
			if ((southernTile === 0 && southWesternTile === 0) || (southWesternTile === 0 && westernTile === 0)) {
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
			} else if ((southernTile === 0 || southernTile === 9 || southernTile === 7 || southernTile === 8) && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 7 && westernTile !== 5 && westernTile !== 4 && westernTile !== 6 && westernTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
			} else if (southernTile === 4 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 && westernTile !== 8 && westernTile !== 6 && westernTile !== 4 && westernTile !== 5) {
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);				
			} else if (southernTile === 5 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 & westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
			} else if (southernTile === 6 && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 7 && westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
			} else {
				console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the southwestern tile.")
				break;
			}

			//can it be accessed from the southeast?
			if ((southernTile === 0 && southEasternTile === 0) || (southEasternTile === 0 && easternTile === 0)) {
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

}

//maybe toggle true and false. store successes with setdirection
//where if true at end, then run the code to set directionaly condition for the 6tile. if false, don't do anything bc it shouldn't have access
		if (findCoord === 6) {
			//if find 6tile, look directly above it for the northern tile and save reference to this tile north of the current 6tile being evaulated
			// var northernTile = level[y-1][x];
			//if northernTile is not a 6,4,5 tile, then tell easystar we can access the current tile (x, y), which is the 6tile we're "on" from the top
			if (northernTile !== 6 && northernTile !== 4 && northernTile !== 5) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP]);
			}

			if (westernTile !== 8 && westernTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.LEFT]);
			}

			if (easternTile !== 9 && easternTile !== 5) {
				easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
			}

			if (northEasternTile === 5) {
				//dont do anything or give directional access...yet
				if
			}
			// //go thru all loops to see if can truly without a doubt access the 6 tile from the north east tile
			// if (northEasternTile !== 5) { //possible NE tile: 0, 1 sort of but unwalkable, 2, 3, 4, 6, 7, 8, 9
			// 	if (northernTile !== 6 && northEasternTile !== 4) { //N tile can't be 6 and NE tile cant be 4
			// 		//N tile can be 0,1,2,3,4,7,8,9 and NE tile can be 0,1,2,3,6,7,8,9
			// 		if (northEasternTile !== 6) { //NE tile can't be 6. Can be 0,1,2,3,7,8,9 and north can be 0,1,2,3,4,7,8,9
			// 			if (northernTile !== 4) { //N can't be 4 so left is 0,1,2,3,7,8,9
			// 				if (northernTile !== 5) {//n can only be 0,1,2,3,7,8,9
			// 					//finally, at this point N can only be 0,1,2,3,7,8,9
			// 					//NE can only be 0,1,2,3,
			// 			 		easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
			// 				}
			// 			}
			// 		} //because if NE tile is 6 but 
			// 	}
			// }

		}

	}

	if (y === 0) {
			northernTile = level[y-1+1][x];
		} else {
			northernTile = level[y-1][x];
		}

		if (x === 0) {
			westernTile = level[y][x-1+1];
		} else {
			westernTile = level[y][x-1];
		}

		if ( y === level.length-1) {
			southernTile = level[y+1-1][x];
		} else {
			southernTile = level[y+1][x];
		}

		if (x === level[y].length-1) {
			easternTile = level[y][x+1-1];
		} else {
			easternTile = level[y][x+1];
		}		

		if (y === 0 && x === 0) {
			northWesternTile = level[y-1+1][x-1+1];
		} else {
			northWesternTile = level[y-1][x-1];
		}

		if (y === level.length-1 && x === level[y].length-1) {
			southEasternTile = level[y+1-1][x+1-1];
		} else {
			southEasternTile = level[y+1][x+1];
		}

		if (y === 0 && x === level[y].length-1) {
			northEasternTile = level[y-1+1][x+1-1];
		} else {
			northEasternTile = level[y-1][x+1];
		}

		if (y === level.length-1 && x === 0) {
			southWesternTile = level[y+1-1][x-1+1];
		} else {
			southWesternTile = level[y+1][x-1];
		}


=====

if (findCoord === 6) {
			if (y !== 0) { //check if northern tile exists
				//it does, check if have access from
				northernTile = level[y-1][x];

				if (northernTile !== 1 && northernTile !== 4 && northernTile !== 5 && northernTile !== 6)	 {
					easystar.setDirectionalCondition(x, y, [EasyStar.TOP]);
					console.log("Map notes: the 6tile at " + x + " and " + y + " is accessible from the northern tile.")
				} else {
					console.log("Map notes: the 6tile at " + x + " and " + y + " is NOT accessible from the northern tile.")
				}

				if (x !== 0) { //check if western tile exists
					//it does, check if have access from
					westernTile = level[y][x-1];

					if (westernTile !== 1 && westerntile !== 4 && westernTile !== 8) {
						easystar.setDirectionalCondition(x, y, [EasyStar.LEFT]);
						console.log("Map notes: the 6tile at " + x + " and " + y + " is accessible from the western tile.")
					} else {
						console.log("Map notes: the 6tile at " + x + " and " + y + " is NOT accessible from the western tile.")
					}

					if (y !== level.length-1) { //check if southern tile exists
						//it does, y is 1-6, check if have access from
						southernTile = level[y+1][x];

						if (southernTile) { //6tile can never be accessed from southern tile
							console.log("Map notes: the 6tile at " + x + " and " + y + " is NOT accessible from the southern tile.")
						}

						if (x !== level[y].length-1) { //check if eastern tile exists
							//it does, x is 1-10. check if have acess from
							easternTile = level[y][x+1];
							
							if (easternTile !== 1 && easternTile !== 5 && easternTile !== 9) {
								easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
								console.log("Map notes: the 6tile at " + x + " and " + y + " is accessible from the eastern tile.")

							} else {
								console.log("Map notes: the 6tile at " + x + " and " + y + " is NOT accessible from the eastern tile.")
							}
							

						} else {
							//eastern tile does not exist, x === 11
						}
					} else {
						//southern tile does not exist, y === 7
					}

				} else {
					//westerntile does not exist, x === 0
				}	
			} else { 
				//northerntile does not exist, y === 0
			}
		}


				if (findCoord === 6) {
			//check this 6 tile for which directions exist, and if it has access

		} else if (findCoord === 7) {
			//check the 7 tile for which directions exist, and if it has access
		} else if (findCoord === 4) {
			//check this 4 tile for which directions exist, and if it has acess
		} else if (findCoord === 5) {
			//check this 5 tile for which directions exist, and if it has access
		} else if (findCoord === 8) {
			//check this 8 tile for which directions exist, and if it has access
		} else if (findCoord === 9) {
			//check this 9 tile for which directions exist, and if it has access			
		}


		=====

		//cannot be accessed from south.

			//can it be accessed from east?
			if (easternTile !== 5 && easternTile !== 9) {
				easystar.setDirectionalCondition(x, y, [EasyStar.RIGHT]);
			}
			//can it be accessed from northwest?
			//even if it's 1 or 2 or 3, since those aren't walkable, will never enter this space from a northwestern 1tile anyway.
			if ((northernTile === 0 && northWesternTile === 0) || (northWesternTile === 0 && westernTile === 0)) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else if ((northernTile === 0 || northernTile === 4 || northernTile === 5 || northernTile === 6) && northWesternTile !== 4 && northWesternTile !== 5 && northWesternTile !== 6 && westernTile !== 8 && westernTile !== 9 && westernTile !== 7 && westernTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
			} else if (northernTile === 9 && northWesternTile !== 4 && northWesternTile !== 5 && northWesternTile !== 6 && westernTile !== 7 && westernTile !== 8 && westernTile !== 9 && westernTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else if (northWesternTile === 5 && northernTile !== 9 && northernTile !== 6 && northernTile !== 5 && northernTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);
			} else if (northernTile === 8 && northWesternTile !== 4) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else if (northWesternTile === 8 && westernTile !== 4 & westernTile !== 8 && westernTile !== 9 && westernTile !== 7) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_LEFT]);				
			} else {
				console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the northwestern tile.")
				break;
			}

			//can it be accessed from northeast?
			if ((northernTile === 0 && northEasternTile === 0) || (northEasternTile === 0 && easternTile === 0)) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else if ((northernTile === 0 || northernTile === 4 || northernTile === 5 || northernTile ===6) && northEasternTile !== 4 && northEasternTile !== 5 && northEasternTile !== 6 && easternTile !== 8 && easternTile !== 9 && easternTile !== 7 && easternTile !== 5) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);
			} else if (northernTile === 8 && northEasternTile !== 5 && northEasternTile !== 6 && northEasternTile !== 4 && easternTile !== 5 && easternTile !== 7 && easternTile !== 9 && easternTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else if (northernTile === 9 && northEasternTile !== 5) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else if (northernTile === 5 && northEasternTile !== 6 && northEasternTile !== 4 && northEasternTile !== 5 && easternTile !== 7 && easternTile !== 9 && easternTile !== 8) {
				easystar.setDirectionalCondition(x, y, [EasyStar.TOP_RIGHT]);				
			} else {
				console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the northeastern tile.")
			}

			//can it be accessed from the southwest?
			if (southernTile !== 0 & southWesternTile !==0 && southEasternTile !==0) {

				if ((southernTile === 0 || southernTile === 9 || southernTile === 7 || southernTile === 8) && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 0 && southEasternTile !==0 && southernTile !== 0 && southWesternTile !== 7 && westernTile !== 5 && westernTile !== 4 && westernTile !== 6 && westernTile !== 8) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
				} else if ((southernTile !== 0 && southEasternTile !== 0 & southWesternTile !==0) || southernTile === 4 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 && westernTile !== 8 && westernTile !== 6 && westernTile !== 4 && westernTile !== 5) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);				
				} else if (southernTile === 5 && southWesternTile !== 7 && southWesternTile !== 9 && southWesternTile !== 8 & westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
				} else if (southernTile === 6 && southWesternTile !== 8 && southWesternTile !== 9 && southWesternTile !== 7 && westernTile !== 4 && westernTile !== 5 && westernTile !== 6 && westernTile !== 8) {
					easystar.setDirectionalCondition(x, y, [EasyStar.BOTTOM_LEFT]);
				} else {
					console.log("Map notes: the 6tile at " + x + " and " + y + " cannot be accessed from the southwestern tile.")
					break;
				}
			}

			//can it be accessed from the southeast?
			if ((southEasternTile === 0 && easternTile === 0)) {
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

}===

		// if (y === 0) {
		// 	northernTile = level[y-1+1][x];
		// } else {
		// 	northernTile = level[y-1][x];
		// }

		// if (x === 0) {
		// 	westernTile = level[y][x-1+1];
		// } else {
		// 	westernTile = level[y][x-1];
		// }

		// if ( y === level.length-1) {
		// 	southernTile = level[y+1-1][x];
		// } else {
		// 	southernTile = level[y+1][x];
		// }

		// if (x === level[y].length-1) {
		// 	easternTile = level[y][x+1-1];
		// } else {
		// 	easternTile = level[y][x+1];
		// }		

		// if (y === 0 && x === 0) {
		// 	northWesternTile = level[y-1+1][x-1+1];
		// } else {
		// 	northWesternTile = level[y-1][x-1];
		// }

		// if (y === level.length-1 && x === level[y].length-1) {
		// 	southEasternTile = level[y+1-1][x+1-1];
		// } else {
		// 	southEasternTile = level[y+1][x+1];
		// }

		// if (y === 0 && x === level[y].length-1) {
		// 	northEasternTile = level[y-1+1][x+1-1];
		// } else {
		// 	northEasternTile = level[y-1][x+1];
		// }

		// if (y === level.length-1 && x === 0) {
		// 	southWesternTile = level[y+1-1][x-1+1];
		// } else {
		// 	southWesternTile = level[y+1][x-1];
		// }


			// var northernTile = level[Math.max(0, level[y-1])][x]);
			// var southernTile = level[Math.min(level.length-1, [y+1][x];
			// var easternTile = level[y][x+1];
			// var westernTile = level[y][x-1];
			// var northWesternTile = level[y-1][x-1];
			// var northEasternTile = level[y-1][x+1];
			// var southEasternTile = level[y+1][x+1];
			// var southWesternTile = level[y+1][x-1];

//put this code after findPath() run, but before calculate. It will 

	//if successful, pass xy into next round of checks for north direction
	switch(true) {
		//if case is false, run block of code until break. if no break in statement, keep running next code

		//check northerntile existence
		//if true, then northern tile doesn't exist
		case topLeftCorner:
			//check east, southeast, south 
			//invoke checkEast(x, y), checkSouthwest
			break;
		case topRightCorner: 
			//check southwest, south, west
			break;
		case alongTopWall:
			//check west, southwest, south, southeast, east
			break;


		//if none of those are true, then northern tile exists
		default:
			//another switch statement: check southerntile existence or check all existences at same time

			//checkNorth(x, y)
	}