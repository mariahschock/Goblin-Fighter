// import functions and grab DOM elements
import { renderGoblin } from './utils.js';

const form = document.getElementById('form');
const goblinList = document.getElementById('.goblins');

// let state
let defeatedGoblinsCount = 0;

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
