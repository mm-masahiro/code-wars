function maxAreaOfIsland(grid) {
    var maxIslandSize = 0;
    var count = 0;
    var directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    var height = grid.length;
    var width = grid[0].length;
    var traverse = function (row, column) {
        if (row < 0 || row >= height || column < 0 || column >= width || grid[row][column] === 0) {
            return;
        }
        ;
        count++;
        if (maxIslandSize <= count)
            maxIslandSize = count;
        grid[row][column] = 0;
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            traverse(row + dir[0], column + dir[1]);
        }
        ;
    };
    for (var row = 0; row < height; row++) {
        for (var column = 0; column < width; column++) {
            if (grid[row][column] === 1) {
                count = 0;
                traverse(row, column);
            }
            ;
        }
        ;
    }
    ;
    console.log(maxIslandSize);
    return maxIslandSize;
}
;
// maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]);
maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]);
