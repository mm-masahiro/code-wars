function maxAreaOfIsland(grid: number[][]): number {
	let maxIslandSize: number = 0;
	let count: number = 0;
	const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
	const height: number = grid.length;
	const width: number = grid[0].length;
	
	const traverse = (row: number, column: number) => {
		if (row < 0 || row >= height || column < 0 || column >= width || grid[row][column] === 0) {
			return;
		};
		count++
		if (maxIslandSize <= count) maxIslandSize = count;
		grid[row][column] = 0;

		for (let dir of directions) {
			traverse(row + dir[0], column + dir[1]);
		};
	};
	
	for (let row: number = 0; row < height; row++) {
		for (let column: number = 0; column < width; column++) {
			if (grid[row][column] === 1) {
				count = 0;
				traverse(row, column);
			};
		};
	};
	
	return maxIslandSize;
};

// maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]);
maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]);
