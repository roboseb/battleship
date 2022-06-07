import './styles.css';
import { Gameboard } from './gameboard';

export {sum}

function sum(a, b) {
    return a + b;
}

const Ship = (length, name) => {
    let shipLength = length;
    let shipName = name;
    let damage = 0;
    let sunk = false;
    
    return {shipLength, shipName, damage, sunk}
};

const Player = (ships, name) => {
     return {ships, name}
};

let ships = [];
let ships2 = [];

const destroyer = Ship(2, 'destroyer');
const cruiser = Ship(3, 'cruiser');
const submarine = Ship(3, 'submarine');
const battleship = Ship(4, 'battleship');
const carrier = Ship(5, 'carrier');

const destroyer2 = Ship(2, 'destroyer');
const cruiser2 = Ship(3, 'cruiser');
const submarine2 = Ship(3, 'submarine');
const battleship2 = Ship(4, 'battleship');
const carrier2 = Ship(5, 'carrier');

ships.push(destroyer, cruiser, submarine, battleship, carrier);
ships2.push(destroyer2, cruiser2, submarine2, battleship2, carrier2);

const player = Player(ships, 'player');
const com = Player(ships2, 'com');



Gameboard.setup(player, com);





