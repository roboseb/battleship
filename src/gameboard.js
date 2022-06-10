export {Gameboard}
import { animate, animateCap, shakeGrid, showEndGame, hideMessage } from "./animate";

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

    const resetCells = () => {
        for (let i = 0; i < 100; i++) {
            cells[i] = null;
        }
        for (let i = 0; i < 100; i++) {
            comCells[i] = null;
        }
    }

    return {cells, comCells, resetCells}
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

    const resetButton = document.getElementById('resetbtn');
    
    let offset = 1;
    let legalMove = true;
    let playerShipSpaces = [];
    let comShipSpaces = [];
    let lastGhost;
    let initialSetup = true;
    let initialCombat = true;

    let chosenCells = [];
    let score = 0;
    let shipIndex = 0;
    let gameOver = false;

    //Reset game on click.
    resetButton.addEventListener('click', () => {
        BoardState.resetCells();
        offset = 1;
        legalMove = true;
        playerShipSpaces = [];
        comShipSpaces = [];
        dirDisplay.innerText = 'Horizontal';

        //Reset AI logic variables.
        lastFound = null;
        chosenCells = [];
        comChosenCells = [];
        lastChoiceHit = false;
        testOffset = 1;
        horChecked = false;
        topChecked = false;
        shipIndex = 0;
        gameOver = false;


        resetGrid(cells);
        resetGrid(comCells);
        resetGrid(targetCells);
        resetGrid(comTargetCells);

        shakeGrid();
        hideMessage();

        //Remove event listeners from target cells.
        for (let i = 0; i < targetCells.length; i++) {
            targetCells[i].replaceWith(targetCells[i].cloneNode(true));
        }
    });

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

    //Add toggle on orientation on right click.
    window.addEventListener('contextmenu', (event) => {
        //Prevent showing context menu on right click.
        event.preventDefault();
    
        //Remove previous ship ghost.
        Array.from(cells).forEach(cell => {
            cell.classList.remove('shipghost');
        });
        
        //Toggle offset and redraw ship ghost.
        if (offset === 1) {
            offset = 10;
            dirDisplay.innerText = 'Vertical';
        } else if (offset === 10){
            offset = 1;
            dirDisplay.innerText = 'Horizontal';
        }
        hideGhost(cells);
        ghostShip(lastGhost[0], lastGhost[1], offset, lastGhost[3]);
    });



    //Reset grid to inital state.
    const resetGrid = (grid) => {
        Array.from(grid).forEach(cell => {
            if (cell.classList.contains('cell')) {
                cell.className = 'cell';
            } else if (cell.classList.contains('targetcell')) {
                cell.className = 'targetcell';
            }
        });
    }

    //Draw a 10 x 10 grid for ships.
    const drawBoard = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            boardBox.appendChild(cell);            
        }
    }

    //Draw a 10 x 10 grid for computer ships.
    const drawComBoard = () => {
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
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

    const updateScore  = () => {
        const scoreDisplay = document.getElementById('score');

        score++;
        scoreDisplay.innerText = score;
    }

    //Place a ship based on offset, index, and ship length.
    const placeShip = (ship, index, currentPlayer, cells) => {

        //Animate the relevant ship girl.
        animate(ship, 'def');

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
            cells[index + i * offset].classList.remove('shipghost');
            cells[index + i * offset].classList.add('ship');

            //Set each space of the ship to taken in shipSpaces.
            usedSpaces.push(index + i * offset);

            //Set the selected space to used.
            cells[index + i * offset].classList.add('shipcell');
            
            //Update the game state object with the ship.
            stateCells[index + i * offset] = ship;
            stateCells[index + i * offset]['hit'] = false;
            //debugTargetCells[index + i * offset].style.backgroundColor = 'lightblue';
        }

    }

    //Display where a ship would placed in a hovered location.
    const ghostShip = (ship, index, offset, cells) => {

        lastGhost = [ship, index, offset, cells];
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
            cells[index + i * offset].classList.add('shipghost');
        }

        //Color selected cells pink if move is illegal.
        if (!legalMove) {
            for (let i = 0;i < ship.shipLength; i++) {
                //Stop filling in cells past the grid.
                if (index + i * offset > 99) break;
    
                cells[index + i * offset].classList.add('illegal');
            }
        }
    }

    //Hide a previously displayed ship ghost.
    const hideGhost = (cells) => {
        Array.from(cells).forEach(cell => {
            //Clear cells that are not currently housing a ship.
            if (cell.classList.contains('ship')) {
                if (cell.classList.contains('hit')) {
                    cell.className = 'cell ship hit';
                } else {
                    cell.className = 'cell ship';
                }
            } else {
                cell.classList.remove('shipghost');
                cell.classList.remove('illegal');
            }
        });
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

        //Display ship info when hovering over an icon.
        const icons = Array.from(document.querySelectorAll('.icon'));
        const nameDisplay = document.getElementById('iconname');
        const dmgDisplay = document.getElementById('icondmg');
        for (let i = 0; i < 5; i++) {
            //Prevent re-adding listeners.
            if (!initialSetup) continue;
            icons[i].addEventListener('mouseover', () => {
                nameDisplay.innerText = player.ships[i].shipName.toUpperCase();
                dmgDisplay.innerText = `${player.ships[i].damage} DMG`;
                animate(player.ships[i], 'def');
                
                //Highlight hovered ship.
                for (let j = 0; j < 100; j++) {
                    if (BoardState.cells[j] !== null &&
                        BoardState.cells[j].shipName === icons[i].id) {
                        cells[j].classList.add('highlighted');
                    }
                }
            });

            //Remove highlighting on mouse leave.
            icons[i].addEventListener('mouseleave', () => {
                hideGhost(cells);
            });

            icons[i].addEventListener('click', () => {
                animate(player.ships[i], 'glad');
            });
        }

        

        //Only draw cells on initial setup.
        if (initialSetup) {
            drawBoard();
            drawComBoard();
            drawTargetGrid();
            drawComTargetGrid();
            initialSetup = false;
        }


        //Reset damage and sunk on all ships.
        player.ships.forEach(ship => {
            ship.damage = 0;
            ship.sunk = false;
        });
        com.ships.forEach(ship => {
            ship.damage = 0;
            ship.sunk = false;
        });

        

        //Initialize event listeners for all cells.
        for (let i = 0; i < cells.length; i++) {

            //Show the ship's ghost based on the current ship and
            //the index of the cell hovered.
            cells[i].addEventListener('mouseenter', () => {
                ghostShip(player.ships[shipIndex], i, offset, cells);
            });
            
            //Show the ship's ghost based on the current ship and
            //the index of the cell hovered.
            cells[i].addEventListener('mouseleave', () => {
                hideGhost(cells);
            });

            cells[i].addEventListener('click', () => {
                //Prevent clicking ships in indentical cells. 
                if (BoardState.cells[i] !== null) {
                    return;
                }

                if (legalMove) {
                    placeShip(player.ships[shipIndex], i, player, cells);
                    shipIndex ++;

                    //Switch round to combat if all ships placed.
                    if (shipIndex > 4) {
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
                hideGhost(comCells);
            }

            //Choose a random index to place a ship;
            //And reroll in the case of illegal moves being chosen.
            randomPlacement();

            while (!legalMove) {
                randomPlacement();
            }

            placeShip(com.ships[i], index, com, comCells)
        }   

        //Add event listener for marking a strike on the computer.
        for (let i = 0; i < cells.length; i++) {
            targetCells[i].addEventListener('click', () => {

                //Stop the entire function if the game is over.
                if (gameOver) return;
                
                //Prevent reclicking an already selected cell.
                if (chosenCells.includes(i)) {
                    return;
                }

                chosenCells.push(i);

                //Hit the selected cell if there is a ship there.
                if (BoardState.comCells[i] !== null) {
                    targetCells[i].classList.add('hit');
            

                    //Add one damage to the selected ship.
                    BoardState.comCells[i]['damage'] += 1;

                    //Animate the captain.
                    animateCap('glad');

                    //Check for a sunk ship.
                    if (BoardState.comCells[i]['damage'] >= BoardState.comCells[i]['shipLength']) {
                        BoardState.comCells[i].sunk = true;

                        //Animate the captain.
                        animateCap('mad');
                        shakeGrid();
                        updateScore();

                        //Display the whole sunken battleship.
                        for (let j = 0; j < BoardState.comCells.length; j++) {
                            if (BoardState.comCells[j] !== null &&
                                BoardState.comCells[j].shipName === BoardState.comCells[i].shipName) {
                                targetCells[j].classList.add('sunkenship');
                            }
                        }
                    }
                } else {
                    //Mark a strike that missed.
                    targetCells[i].classList.add('miss');
                    
                }

                if (!gameOver) {
                    getWinner(player, com);
                }
                
                //Play an AI turn if the game is not over.
                if (getWinner(player,com) !== undefined) return;
                comTurn();

                if (!gameOver) {
                    getWinner(player, com);
                }
            });
        }       
        
        initialCombat = false;
    }

    let lastFound = null;
    let comChosenCells = [];
    let lastChoiceHit = false;
    let testOffset = 1;
    let horChecked = false;
    let topChecked = false;

    const killIndex = (index) => {

        //Start by attempting to destroy a ship horizontally.
        const killHorizon = () => {
            //Prevent selecting a previously chosen cell on the edge of a ship.
            if (comChosenCells.includes(newIndex + 1)) {
                lastChoiceHit = false;
            }

            //Change direction if horizontal end of ship is found.
            if (lastChoiceHit) {
                newIndex += testOffset;
            } else {
                testOffset = -1;
                //Skip over previously selected cells.
                while (comChosenCells.includes(newIndex)) {
                    newIndex += testOffset;
                }
            }

            if (newIndex > 99) {
                newIndex -= 1;
                //Skip over previously selected cells.
                while (comChosenCells.includes(newIndex)) {
                    newIndex -= 1;
                }
            }
        }

        //Start to destroy a ship if it is oriented vertically.
        const killVert = () => {
            
            //Change direction if bottom of ship is found.
            if (BoardState.cells[newIndex - 10] === 'miss') {
                topChecked = true;
            }

            if (topChecked) {
                testOffset = 10;
            } else {
                testOffset = -10;
            }

            newIndex += testOffset;

            //Skip over previously selected cells.
            while (comChosenCells.includes(newIndex)) {
                newIndex += testOffset;
            }

            //Avoid selecting a cell outside of the grid.
            if (newIndex < 0) {
                newIndex += 10;
                //Skip over previously selected cells.
                while (comChosenCells.includes(newIndex)) {
                    newIndex += 10;
                }
            }

        }

        let newIndex = index;

        //Switch mode to vertical kill if horizontal is done.
        if (testOffset !== 1 && BoardState.cells[lastFound -1] === 'miss') {
            horChecked = true; 
        }

        //If horizontal of ship is checked, switch to killing vertically.
        if (horChecked) {
            killVert();
        } else {
            killHorizon();
        }

        return newIndex;
    }

    //Play the computer's turn.
    const comTurn = () => {

        //Roll a random cell, and reroll if it is a hit or a miss.
        let index = Math.round(Math.random() * 99);
        while (comChosenCells.includes(index)) {
            index = Math.round(Math.random() * 99);
        }     

        //If ship has been found and not destroyed, destroy it.
        if (lastFound !== null) {
            index = killIndex(lastFound);
        }

        //Remove the selected cell from com choices.
        comChosenCells.push(index);

        if (BoardState.cells[index] !== null &&
            BoardState.cells[index] !== 'miss') {
     
            //Mark the ship hit index.
            lastFound = index;
            lastChoiceHit = true;

            comTargetCells[index].classList.add('hit');
            cells[index].classList.add('hit');

            //Add one damage to the selected ship and particular cell.
            BoardState.cells[index]['damage'] += 1;

            BoardState.cells[index]['hit'] = true;

            //Animate ship girl.
            animate(BoardState.cells[index], 'def');

            //Check for a sunk ship.
            if (BoardState.cells[index]['damage'] >= BoardState.cells[index]['shipLength']) {
                BoardState.cells[index].sunk = true;
                testOffset = 1;
                horChecked = false;
                topChecked = false;

                //Animate the captain and the ship girl.
                animateCap('def');
                animate(BoardState.cells[index], 'mad');

                shakeGrid();

                //Display the whole sunken battleship.
                for (let j = 0; j < BoardState.cells.length; j++) {
                    
                    if (BoardState.cells[j] !== null &&
                        BoardState.cells[j].shipName === BoardState.cells[index].shipName) {
                        comTargetCells[j].classList.add('sunkenship');
                        //Switch back to hunting for a ship.

                        if (lastFound !== null) lastFound = null;
                    }
                }
            }
        } else {
            //Mark a strike that missed.
            comTargetCells[index].classList.add('miss');
            cells[index].classList.add('miss');
            BoardState.cells[index] = 'miss';
            lastChoiceHit = false;
        }
    }

    //Check for winner.
    const getWinner = (player, com) => {
        let playerTotal = 0;
        let comTotal = 0;

        

        //Find the total of ships sunk for the player and computer.
        player.ships.forEach(ship => {
            if (ship.sunk) comTotal++;
        });
        com.ships.forEach(ship => {
            if (ship.sunk) playerTotal++;
        });

        //Return the winner if there is one.
        if (playerTotal === 5) {
            if (!gameOver) {
                showEndGame('VICOTORY');
            }
            
            console.log('Player Wins');
            gameOver = true;
            return player;
        } else if (comTotal === 5) {
            if (!gameOver) {
                showEndGame('FAILURE');
            }
            console.log('Computer wins!');
            
            gameOver = true;
            return com;
        }
    }

    return {drawBoard, placeShip, setup, getIllegalCells}
})();

