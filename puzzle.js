let puzzle = document.getElementById('puzzle');
let isSolved = 0;

createBoard();
// shuffle();

puzzle.addEventListener("click", function(e) {
    move(e.target);
  });

puzzle.addEventListener("mouseover", function(e) {
         if (getEmptyNeighbor(getNeighbors(e.target)) !== -1) {
            e.target.classList.remove("tile");
            e.target.classList.add("movableTile");
         }
    });

puzzle.addEventListener("mouseout", function(e) {
    if (e.target.classList.contains("movableTile")) {
        e.target.classList.remove("movableTile");
        e.target.classList.add("tile");
    }
});


//create and populate 4x4 board 
function createBoard() {
    let count = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            let tile = document.createElement('div');
            tile.id = "tile_" + i + "_" + j;
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
    let neighbors;
    let rand;
    for(var i = 0; i < 1000; i++) {
        neighbors = getNeighbors(getEmptyTile());
        rand = parseInt(Math.random() * (neighbors.length));
        move(neighbors[rand]);
    }

    initializeTimer();
    setInterval(showInterval, 1000);
    setTimeout(play, 500);
    setInterval(play, 7000);  // Interval
    showInterval();	
	
}

//get tile by coordinate pair
function getTile(x, y) {
    return document.getElementById(`tile_${x}_${y}`);
}

//get empty tile
function getEmptyTile() {
    return document.querySelector('.emptyTile');
}

//get tiles which neighbor the passed tile
function getNeighbors(targetTile) {
    let xyCord = targetTile.id.split("_");
    let x = parseInt(xyCord[1]);
    let y = parseInt(xyCord[2]);

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

//returns -1 if there is no empty neighbor
function getEmptyNeighbor(neighbors) {
    for (var i = 0; i < neighbors.length; i++) {
        if (neighbors[i].className === "emptyTile") {
            return neighbors[i];
        }
    }

    return -1;
}

//check if a tile is moveable and add class 'moveableTile' if it is
function checkMoveable(targetTile) {
    if (targetTile.classList.contains("movableTile")) {
        targetTile.classList.remove("movableTile");
        targetTile.classList.add("tile");
    }
}

//moves target tile to empty neighbor if one exists
function move(targetTile) {
        let emptyTile = getEmptyNeighbor(getNeighbors(targetTile));

        if (emptyTile === -1) {
            return;
        }

        //swap target tile and empty tile
        let tempTile = { className: targetTile.className, id: targetTile.id, innerHTML: targetTile.innerHTML};

        targetTile.className = emptyTile.className;
        targetTile.innerHTML = emptyTile.innerHTML;
        emptyTile.className = tempTile.className;
        emptyTile.innerHTML = tempTile.innerHTML;

        checkSolved();

        let count = 0;
        let currentTile;

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                count++;
                currentTile = getTile(i, j);
                checkMoveable(currentTile);
        }
    }
}

function checkSolved() {
    let count = 0;
    let currentTile;
    
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            count++;
            currentTile = getTile(i, j);
            if (currentTile.className != "emptyTile") {
                if (currentTile.innerHTML != count) {
                    return;
                }
            }
        }
    }
    isSolved = 1;
    alert("You Won!");
    return 1;
}


