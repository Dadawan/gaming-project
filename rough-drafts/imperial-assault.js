// 0 = walkable
// '1' equals space with left wall, next to
// '2' equals space with right wall
// 3 = space with top wall
// 4 = space with bottom wall
// 5 = space with blocked terrain to left
// 6 = space with blocked terrain to right
// 7 = space with blocked terrain to top
// 8 = space with blocked terrain to bottom

// can do combinations, no moving diangolo
//1 regular line no walking, 3 left edge of wall, 2 is a space with left edge of wall, 4 is a space with bottom edge of wall, 5 is space with top edge of wall
//9s are invisible and should be ignored
//count 0s only, when giving a1 location to place figure on physical board, so row 2 is 4 0s = abcd, ignore 1 when counting rows vertically, so

//or 2 is a space with a left edge of wall, 3 is a space with right edge of wall,
// 6 is space with bottom edge of wall and left edge of wall 
//can walk on 3s if not next to 2s
//or break up maps into chunks, cross a line turn 1s into 0s, etc.

var level = [

	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[3, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
	[3, 0, 0, 0, 4, 9, 0, 0, 0, 2, 1],
	[3, 0, 0, 4, 9, 0, 6, 6, 0, 0, 0, 2, 1],
	[3, 0, 0, 8, 5, 0, 8, 9, 0, 0, 0, 2, 1, 1],
	[3, 0, 0, 0, 8, 5, 6, 6, 4, 0, 0, 2, 1, 1],
	[3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	[3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

]

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
















