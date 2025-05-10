const { use } = require("react");


function clicked(user) {
    const userEl = document.getElementById("user");
    const compEl = document.getElementById("comp");
    const resultTxt = document.getElementById("result");

    let compPoint = parseInt(compEl.innerText);
    let userPoint = parseInt(userEl.innerText);

    const arr = ['rock', 'paper', 'scissors'];
    const index = parseInt(Math.random() * 3);
    const comp = arr[index];
    let result = "";
    console.log(comp);

    if (user === comp)
    {
        result = "It's A Tie!";
    }
    else if (user === 'rock' && comp === 'paper')
    {
        result = "Lost! Paper Beats Rock.";
        compPoint += 1;
    }
    else if (user === 'rock' && comp === 'scissors')
    {
        result = "Win! Rock Beats Scissors."
        userPoint += 1;
    }
    else if (user === 'paper' && comp === 'rock')
    {
        result = "Win! Paper Beats Rock."
        userPoint += 1;
    }
    else if (user === 'paper' && comp === 'scissors')
    {
        result = "Lost! Scissors Beat Paper."
        compPoint += 1;
    }
    else if (user === 'scissors' && comp === 'rock')
    {
        result = "Lost! Rock Beats Scissors."
        compPoint += 1;
    }
    else if (user === 'scissors' && comp === 'paper')
    {
        result = "Win! Scissors Beat Paper."
        userPoint += 1;
    }
    userEl.innerText = userPoint;
    compEl.innerText = compPoint;
    resultTxt.innerText = result;
}

function reset()
{
    location.reload();
}