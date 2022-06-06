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

const destroyer = Ship(2, 'destroyer');
const cruiser = Ship(3, 'cruiser');
const submarine = Ship(3, 'submarine');
const battleship = Ship(4, 'battleship');
const carrier = Ship(5, 'carrier');

ships.push(destroyer, cruiser, submarine, battleship, carrier);

const player = Player(ships, 'player');
const com = Player(ships, 'com');



Gameboard.setup(player, com);





