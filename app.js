// import functions and grab DOM elements


const form = document.querySelector('form');

// let state
let defeatedGoblinsCount = 0;

let goblins = [
    { name: 'Norman Osborn', hp: 5 },
    { name: 'Harry Osborn', hp: 3 },
];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
