export {Gameboard}

//Board state object with data for hit cells, and ships within those cells.
const BoardState = (() => {
    
    //Initialize default 100 cells representing the game board.
    let cells = [];
    for (let i = 0; i < 100; i++) {
        cells[i] = null;
    }

    //Initialize default 100 cells representing the game board.
    let comCells = [];
    for (let i = 0; i < 100; i++) {
        comCells[i] = null;
    }

    return {cells, comCells}
})();

//Object for most game logic and displaying boards and target grids.
const Gameboard = (() => {
    const boardBox = document.getElementById('board');
    const comBoardBox = document.getElementById('comboard');

    const targetGrid = document.getElementById('targetgrid');
    const comTargetGrid = document.getElementById('comtargetgrid');

    let cells = boardBox.children;
    const comCells = comBoardBox.children;

    const targetCells = targetGrid.children;
    const comTargetCells =  comTargetGrid.children;

    const dirButton = document.getElementById('directionbtn');
    const dirDisplay = document.getElementById('direction'); 
    
    let offset = 1;
    let legalMove = true;
    let playerShipSpaces = [];
    let comShipSpaces = [];

    //Add toggle for ship placement direction.
    dirButton.addEventListener('click', () => {
        if (offset === 1) {
            offset = 10;
            dirDisplay.innerText = 'Vertical';
        } else if (offset === 10){
            offset = 1;
            dirDisplay.innerText = 'Horizontal';
        }
    });

    //Draw a 10 x 10 grid for ships.
    const drawBoard = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.id = 'cell';
            boardBox.appendChild(cell);            
        }
    }

    //Draw a 10 x 10 grid for computer ships.
    const drawComBoard = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.id = 'cell';
            comBoardBox.appendChild(cell);            
        }
    }

    //Draw a 10 x 10 grid for targeting the computer.
    const drawTargetGrid = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('targetcell');
            targetGrid.appendChild(cell);            
        }
    }
    
    //Draw a 10 x 10 grid for the computer targeting the player.
    const drawComTargetGrid = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.classList.add('targetcell');
            comTargetGrid.appendChild(cell);            
        }
    }

    //Place a ship based on offset, index, and ship length.
    const placeShip = (ship, index, currentPlayer, cells) => {

        //Set the used spaces to avoid based on player.
        //And the assign the placed spaces to their index in game state.
        let usedSpaces = [];
        let stateCells;
        let debugTargetCells;
        if (currentPlayer.name === 'player') {
            usedSpaces = playerShipSpaces;
            stateCells = BoardState.cells;
            debugTargetCells = comTargetCells;
        } else if (currentPlayer.name === 'com') {
            usedSpaces = comShipSpaces;
            stateCells = BoardState.comCells;
            debugTargetCells = targetCells;
        }

        //Display ship ghost based on length and hover index.
        for (let i = 0; i < ship.shipLength; i++) {

            //Fill in selected cells based on placement direction.
            cells[index + i * offset].style.backgroundColor = 'black';

            //Set each space of the ship to taken in shipSpaces.
            usedSpaces.push(index + i * offset);

            //Set the selected space to used.
            cells[index + i * offset].classList.add('shipcell');
            
            //Update the game state object with the ship.
            stateCells[index + i * offset] = ship;
            debugTargetCells[index + i * offset].style.backgroundColor = 'lightblue';
        }

    }

    //Display where a ship would placed in a hovered location.
    const ghostShip = (ship, index, offset, cells) => {
        const illegals = getIllegalCells(ship.shipLength);
        legalMove = true;
        let usedSpaces;

        //Set the grid to use based on the currentPlayer.
        if (cells === comCells) {
            usedSpaces = comShipSpaces;
        } else {
            usedSpaces = playerShipSpaces;
        }

        //Display ship ghost based on length and hover index.
        for (let i = 0; i < ship.shipLength; i++) {

            //Set the move to illegal if it is in illegal moves.
            //or for vertical, if it is past the grid.
            if (offset === 1) {
                if (illegals.includes(index)) {
                    legalMove = false;
                }
            } else if (offset === 10) {
                if (index + i * offset > 99) {
                    legalMove = false;
                }
            }

            //Set the move to illegal if it intersects a place ship.
            if (usedSpaces.includes(index + i * offset)) {
                legalMove = false;
            }

            //Stop filling in cells past the grid.
            if (index + i * offset > 99) break;

            //Fill in selected cells based on placement direction.
            cells[index + i * offset].style.backgroundColor = 'teal';
        }

        //Color selected cells pink if move is illegal.
        if (!legalMove) {
            for (let i = 0;i < ship.shipLength; i++) {
                //Stop filling in cells past the grid.
                if (index + i * offset > 99) break;
    
                cells[index + i * offset].style.backgroundColor = 'pink';
            }
        }
    }

    //Hide a previously displayed ship ghost.
    const hideGhost = (ship, index, offset, cells) => {
        for (let i = 0; i < ship.shipLength; i++) {
            
            //Stop clearing cells past the grid.
            if (index + i * offset > 99) break;

            //Clear cells that are not currently housing a ship.
            if (cells[index + i * offset].className !=='shipcell') {
                cells[index + i * offset].style.backgroundColor = 'goldenrod';
            } else {
                cells[index + i * offset].style.backgroundColor = 'black';
            }
            
        }
    }

    const getIllegalCells = (shipLength) => {
            //Set the illegal positions for a ship.
            let illegalCells = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
            illegalCells.forEach(cell => {
                for (let i = 1; i < shipLength - 1; i++) {
                    illegalCells.push(cell + (i*-1));
                }
            });
            return illegalCells;
    }

    //Let the player place all their ships.
    const setup = (player, com) => {
        drawBoard();
        drawComBoard();
        drawTargetGrid();
        drawComTargetGrid();

        //Set index for currently selected ship.
        let index = 0;

        //Initialize event listeners for all cells.
        for (let i = 0; i < cells.length; i++) {

            //Show the ship's ghost based on the current ship and
            //the index of the cell hovered.
            cells[i].addEventListener('mouseover', () => {
                ghostShip(player.ships[index], i, offset, cells);
            });
            
            //Show the ship's ghost based on the current ship and
            //the index of the cell hovered.
            cells[i].addEventListener('mouseleave', () => {
                hideGhost(player.ships[index], i, offset, cells);
            });

            cells[i].addEventListener('click', () => {
                if (legalMove) {
                    placeShip(player.ships[index], i, player, cells);
                    index ++;

                    //Switch round to combat if all ships placed.
                    if (index > 4) {
                        startCombat(player, com);
                    }
                }
            });

        }

    }

    //Switch phase to combat and remove all setup listeners.
    const startCombat = (player, com) => {

        //Remove setup phase event listeners.
        for (let i = 0; i < cells.length; i++) {
            cells[i].replaceWith(cells[i].cloneNode(true));
        }

        //Place computer's ships.
        let index;
        let flip;

        for (let i = 0; i < com.ships.length; i++) {
            const randomPlacement = () => {
                index  = Math.floor(Math.random() * 100);
                flip = Math.round(Math.random());
                (flip === 0) ? offset = 1 : offset = 10;
                
                ghostShip(com.ships[i], index, offset, comCells);
                hideGhost(com.ships[i], index, offset, comCells);
            }

            //Choose a random index to place a ship;
            randomPlacement();

            while (!legalMove) {
                randomPlacement();
            }

            //console.log('ghost placed');
            //console.log(legalMove);
            placeShip(com.ships[i], index, com, comCells)
        }

        //Add event listener for marking a strike on the computer.
        for (let i = 0; i < cells.length; i++) {
            targetCells[i].addEventListener('click', () => {
                


                if (BoardState.comCells[i] !== null) {

                    targetCells[i].style.backgroundColor = 'black';
                    console.log('hit!');

                    //Add one damage to the selected ship.
                    BoardState.comCells[i]['damage'] += 1;
                    console.log(BoardState.comCells[i]['damage']);
                    console.log(BoardState.comCells[i]['shipLength']);

                    //Check for a sunk ship.
                    if (BoardState.comCells[i]['damage'] >= BoardState.comCells[i]['shipLength']) {
                        BoardState.comCells[i].sunk = true;

                        //Display the whole sunken battleship.
                        for (let j = 0; j < BoardState.comCells.length; j++) {
                            //console.log(cell);
                            if (BoardState.comCells[j] !== null &&
                                BoardState.comCells[j].shipName === BoardState.comCells[i].shipName) {
                                console.log(BoardState.comCells[j].shipName);
                                targetCells[j].style.backgroundColor = 'green';
                            }
                            
                            
                        }
                    }
                    console.log(BoardState.comCells[i].sunk);
                } else {
                    console.log('miss');
                    targetCells[i].style.backgroundColor = 'white';
                }
            });
        }        
    }

    const comTurn = () => {

    }

    

    return {drawBoard, placeShip, setup, getIllegalCells}
})();

