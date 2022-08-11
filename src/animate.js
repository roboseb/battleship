export {animate, animateCap, shakeGrid, showEndGame, hideMessage}

const girlImg = document.getElementById('girlimg');
const capImg = document.getElementById('capimg');
const gridBox = document.getElementById('gridscontainer');

let lastShip = 'battleship';

//Switch the ship girl to the relevant image, and then animate her.
const animate = (ship, mood) => {
    lastShip = ship.shipName;

    const nick = ship.shipName.slice(0, 3);
    girlImg.src = require(`/src/images/${nick}-${mood}.png`);

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

    capImg.src = require(`/src/images/cap-${mood}.png`);
    
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


//Animate ship girl on click.
girlImg.addEventListener('click', () => {
        //Reset ship girl animation.
        girlImg.classList.remove('girldef');
        girlImg.classList.remove('girlmad');
        girlImg.classList.remove('girlglad');
        
        void girlImg.offsetWidth;

        //Play a random mood animations.
        const moods = ['def', 'glad', 'mad'];
        const randMood = moods[Math.floor(Math.random() * 3)];
        const nick = lastShip.slice(0, 3);
        girlImg.src = require(`/src/images/${nick}-${randMood}.png`);
 
        girlImg.classList.add(`girl${randMood}`);
});

//Toggle greyscale on shipgirls.
const colorBtn = document.getElementById('colorbtn');
colorBtn.addEventListener('click', () => {
    girlImg.classList.toggle('girlcolor');
})

const showEndGame = (message) => {
    const endMessage = document.getElementById('gamestatus');

    endMessage.classList.add('panelshown');
    endMessage.innerText = ''

    //Display each letter of the message one by one.
    var i = 0;            
    function myLoop() {         
        setTimeout(function() {   
            console.log('hello');   
            endMessage.innerText += message[i];
            i++;
            if (i < message.length) {          
                myLoop();           
            }                       
        }, 400)
    }
    myLoop(); 
}

const hideMessage = () => {
    const endMessage = document.getElementById('gamestatus');
    endMessage.classList.remove('panelshown');
}