const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("am-pm")

function updateTime() {
    const currentDate = new Date();

    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    hour.innerText = (currentHour % 12 || 12).toString().padStart(2, '0');
    minute.innerText = currentDate.getMinutes().toString().padStart(2, '0');
    second.innerText = currentDate.getSeconds().toString().padStart(2, '0');

    ampm.innerText = currentHour < 12 ? 'AM' : 'PM';

    setTimeout(updateTime, 1000);
}
updateTime();