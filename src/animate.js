export {animate, animateCap, shakeGrid}

const girlImg = document.getElementById('girlimg');
const capImg = document.getElementById('capimg');
const gridBox = document.getElementById('gridscontainer');

//Switch the ship girl to the relevant image, and then animate her.
const animate = (ship, mood) => {

    const nick = ship.shipName.slice(0, 3);
    girlImg.src = `images/${nick}-${mood}.png`;

    const classChoice =  `girl${mood}`;

    //Animate the ship girl.
    girlImg.classList.remove('girldef');
    girlImg.classList.remove('girlmad');
    girlImg.classList.remove('girlglad');
    
    void girlImg.offsetWidth;
    girlImg.classList.add(classChoice);
    
}
//Animate the captain.
const animateCap = (mood) => {

    capImg.src = `images/cap-${mood}.png`;
    
    capImg.classList.remove('capani');
    void capImg.offsetWidth;
    capImg.classList.add('capani');
}

//Shake the grids violently.
const shakeGrid = () => {
    gridBox.classList.remove('gridshake');
    void gridBox.offsetWidth;
    gridBox.classList.add('gridshake');
}