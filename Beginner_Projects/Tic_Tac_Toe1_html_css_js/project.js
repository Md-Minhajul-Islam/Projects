

const playerXEl = document.querySelector(".playerX");
const playerOEl = document.querySelector(".playerO");
const selectBox = document.querySelector(".select-box");
const gameBox = document.querySelector(".game-box");
const resultBox = document.querySelector(".result-box");
const result = document.querySelector(".result");
const rePlay = document.querySelector(".replay");
const xTurn = document.querySelector(".x-turn");
const oTurn = document.querySelector(".o-turn");
let allBox = Array.from(document.querySelectorAll(".boxes span")); // converting to a real array from Nodelist and used "let" because we are going to edit the array

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6]  // diagonals
];


hide(resultBox);
hide(gameBox);

function hide(key) {
    key.classList.add("hidden");
}
function removeHide(key) {
    key.classList.remove("hidden");
}
function addTurn(key) {
    key.classList.add("turn")
}
function removeTurn(key) {
    key.classList.remove("turn");
}

let user, comp, gameOver = 0;

playerXEl.addEventListener("click", () => {
    user = 1;
    comp = 0;
    hide(selectBox);
    removeHide(gameBox);
    addTurn(xTurn);
});

playerOEl.addEventListener("click", () => {
    user = 0;
    comp = 1;
    hide(selectBox);
    removeHide(gameBox);
    addTurn(oTurn);
});

allBox.forEach(span => {
    span.setAttribute("onclick", "clickedBox(this)");
});

function clickedBox(element) {

    element.innerText = user == 1 ? "X" : "O";
    element.style.pointerEvents = "none"; //selected box can't be selected again
    removeTurn(user == 1 ? xTurn : oTurn);
    addTurn(user == 1 ? oTurn : xTurn);

    const ind = allBox.indexOf(element);
    if (ind !== -1) allBox.splice(ind, 1);

    getWinner();

    if (gameOver) return;

    if (allBox.length > 0) {
        const randomDelayTime = Math.round((Math.random() * 1000) + 200); // generating random delay for bot
        setTimeout(() => {
            bot(); // Bot plays only if game is not over
        }, randomDelayTime);
    }
    else {
        gameOver = 1;
        hide(gameBox)
        removeHide(resultBox);
        result.innerText = "It's a Draw!";
        rePlay.addEventListener("click", () => {
            location.reload();
        });
    }
}

function bot()
{
    const ind = Math.floor(Math.random() * allBox.length);
    const element = allBox[ind];

    removeTurn(comp == 1 ? xTurn : oTurn);
    addTurn(comp == 1 ? oTurn : xTurn);

    element.innerText = comp == 1 ? "X" : "O";
    element.style.pointerEvents = "none"; //selected box can't be selected again
    
    const index = allBox.indexOf(element);
    if (index !== -1) allBox.splice(index, 1);

    getWinner();
}

function getWinner(){

    const allBoxEl = [];
    for (let i = 0; i < 9; i++)
    {
        const element = document.querySelector(".box-" + i).innerText;
        if (element === "X") allBoxEl[i] = 1
        else if (element === "O") allBoxEl[i] = 0;
        else allBoxEl[i] = -1;
    }
    for(let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (allBoxEl[a] !== -1 && allBoxEl[a] === allBoxEl[b] && allBoxEl[b] === allBoxEl[c]) {

            gameOver = 1;

            hide(gameBox)
            removeHide(resultBox);

            result.innerText = allBoxEl[a] === user ? "You Won!" : "You Lost!";
            result.style.color = allBoxEl[a] === user ? "Green" : "Red";

            rePlay.addEventListener("click", () => {
                location.reload();
            });
        }
    }
}
