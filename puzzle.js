let puzzle = document.getElementById('puzzle');

createBoard();
// shuffle();

//create and populate 4x4 board 
function createBoard() {
    let count = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            let tile = document.createElement('div');
            tile.id = 'tile_${i}_${j}';
            tile.classList.add('tile');
            count++;
            tile.innerHTML = count.toString();
            if (count === 16) {
                tile.classList.remove('tile');
                tile.classList.add('emptyTile');
                tile.innerHTML = "";
            }
            puzzle.appendChild(tile);
        }
    }
}

//randomly make a legal move 1000 times
function shuffle() {

}

//get tile by coordinate pair
function getTile(x, y) {
    return document.getElementById(`tile_${x}_${y}`);
}

//get tiles which neighbor the passed tile
function getNeighbors(targetTile) {
    let xyCord = targetTile.id.split("_");
    let y = parseInt(xyCord[1]);
    let x = parseInt(xyCord[2]);

    let neighbors = [];

    if (x < 3) {
        neighbors.push(getTile(x + 1, y));
    }
    if (x > 0) {
        neighbors.push(getTile(x - 1, y));
    }
    if (y < 3) {
        neighbors.push(getTile(x, y + 1));
    }
    if (y > 0) {
        neighbors.push(getTile(x, y - 1));
    }
    return neighbors;
}


