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

//get tiles which neighbor the passed tile
function getNeighbors(targetTile) {
    
}


