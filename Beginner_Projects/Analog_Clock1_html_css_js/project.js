const hourPointer = document.getElementById("hour");
const minutePointer = document.getElementById("minute");
const secondPointer = document.getElementById("second");

const updateTime = () => {
    
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    hourPointer.style.transform = `rotate(${360/12*hour}deg)`;
    minutePointer.style.transform = `rotate(${360/60*minute}deg)`;
    secondPointer.style.transform = `rotate(${360/60*second}deg)`;

    setTimeout(updateTime, 1000);
};

updateTime();

