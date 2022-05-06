// import functions and grab DOM elements
import { renderGoblin } from './utils.js';

const form = document.querySelector('form');
const goblinList = document.querySelector('.goblins');
const defeatedNumber = document.querySelector('#defeated-number');
const spidermanHP = document.querySelector('#spidermans-hp');
const spidermanImg = document.querySelector('#spiderman-img');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 5;
let goblins = [
    { name: 'Norman', hp: 5 },
    { name: 'Harry', hp: 3 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    goblins.push(newGoblin);

    displayGoblins();
    form.reset();
});

function displayGoblins() {
    goblinList.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinList.append(goblinEl);
    }
}
displayGoblins();

function goblinClickHandler(goblin) {
// console.log(`I am clicking on ${goblin.name}`);
    if (goblin.hp === 0) return;
    if (playerHP === 0) return;

    const playerHit = Math.random() * 2 ;
    if (playerHit < 1) {
        goblin.hp--;

        displayGoblins();
        alert(`Your web hit ${goblin.name}!`);

        if (goblin.hp === 0) {
            defeatedGoblinsCount++;
            defeatedNumber.textContent = defeatedGoblinsCount;
        }
    } else {
        alert('Your web missed!');
    }
    const goblinHit = Math.random() * 2 ;
    if (goblinHit < 1) {
        playerHP--;
        spidermanHP.textContent = playerHP;
        alert(`${goblin.name} strikes you with laser blast!`);

        if (playerHP === 0) {
            alert('Game over :(');
            spidermanImg.classList.add('game-over');
        }
    } else {
        alert(`${goblin.name} fires laser blast and misses!`);
    }
}
