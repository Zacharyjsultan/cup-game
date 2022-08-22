// import functions and grab DOM elements
const firstContainer = document.getElementById('mug-one');
const secondContainer = document.getElementById('mug-two');
const thirdContainer = document.getElementById('mug-three');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('totals');

const hidingMug = ['cupOne', 'cupTwo', 'cupThree'];

const resetEl = document.getElementById('reset-button');

// let state
let wins = 0;
let total = 0;


 // use user input to update state 

function resetImages() {
    firstContainer.src = './assets/cup-1.jpeg';
    secondContainer.src = './assets/cup-2.webp';
    thirdContainer.src = './assets/cup-3.webp';
}

function displayTotals() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;

}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}



// set event listeners  // get user input
buttonOne.addEventListener('click', () => {
    resetImages();
    total++;
    const randomMug = Math.floor(Math.random() * 3);
    if (randomMug === 0) {
        firstContainer.src = './assets/cup-with-ball.jpeg';

    } else if (randomMug === 1) {
        secondContainer.src = './assets/cup-with-ball.jpeg';

        wins++;
    } else {
        thirdContainer.src = './assets/cup-with-ball.jpeg';
    }

    displayTotals();
});

buttonTwo.addEventListener('click', () => {
    resetImages();
    total++;
    const randomMug = Math.floor(Math.random() * 3);
    if (randomMug === 0) {
        firstContainer.src = './assets/cup-with-ball.jpeg';

    } else if (randomMug === 1) {
        secondContainer.src = './assets/cup-with-ball.jpeg';


        wins++;
    } else {
        thirdContainer.src = './assets/cup-with-ball.jpeg';
    }

    displayTotals();
});
buttonThree.addEventListener('click', () => {
    resetImages();
    total++;
    const randomMug = Math.floor(Math.random() * 3);
    if (randomMug === 0) {
        firstContainer.src = './assets/cup-with-ball.jpeg';

    } else if (randomMug === 1) {
        secondContainer.src = './assets/cup-with-ball.jpeg';

        wins++;
    } else {
        thirdContainer.src = './assets/cup-with-ball.jpeg';
    }

    displayTotals();
});

resetEl.addEventListener('click', () => {
    resetImages();
    total = 0;
    wins = 0;
    displayTotals ();
});
  // update DOM to reflect the new state

