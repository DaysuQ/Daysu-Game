
let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck;

let canHit = true; //allows to draw while your sum <21

window.onload = function() {
    buildDeck();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]);
        }
    }
}