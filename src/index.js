import './styles.css';

export {sum}

function sum(a, b) {
    return a + b;
}

const Ship = (length) => {
    let shipLength = length;
    let sunk = false;
    let damage = [];

    for (let i = 0; i < length; i++ ) {
        damage.push(false);
    } 

    const hit = (index) => {
        damage[index] = true;
    }

    const isSunk = () => {
        damage.reduce((prev, curr) => {
            prev === true ? true : false;
        });
    }


    console.log(damage, shipLength);
    
    return {hit}
};

let seb = Ship(7);
