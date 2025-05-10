
const time = document.getElementById("time");

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().
    padStart(2, "0")}:${seconds.toString().
    padStart(2, "0")}`;
    
    time.innerText = formattedTime;
};

const startTimer = () => {
    interval = setInterval(() => {
        --timeLeft;
        updateTimer();

        if (timeLeft === 0)
        {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
        }
    }, 1000); 
};

const stopTimer = () => {
    clearInterval(interval);
};

const resetTimer = () => {

    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
};