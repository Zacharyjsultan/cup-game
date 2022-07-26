// import functions and grab DOM elements
const firstContainer = document.getElementById('mug-one');
const secondContainer = document.getElementById('mug-two');
const thirdContainer = document.getElementById('mug-three');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const total = document.getElementById('totals');

// let state
let wins = 0;
let losses = 0;

function resetImages () {
    firstContainer.src = '/assets/cup-1.jpeg';
    secondContainer.src = '/assets/cup-2.webp';
    thirdContainer.src = '/assets/cup-3.webp';
}

function displayWinsLossesAndTotal() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    total.textContent = total;

}

// set event listeners 
buttonOne.addEventListener('click'), () => {
  resetImages();

};
buttonOne.addEventListener('click'), () => {
  resetImages();
  
};
buttonOne.addEventListener('click'), () => {
  resetImages();
  
};
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
