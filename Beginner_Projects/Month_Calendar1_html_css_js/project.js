const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const numbers = document.getElementById("numbers");

const today = new Date();

const monthNum = today.getMonth();
const monthList = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];
monthEl.innerText = monthList[monthNum];
dateEl.innerText = today.toDateString();

const firstDayIndex = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

let days = "";
for (let i = 0; i < firstDayIndex; i++)
{
    days += `<div id="empty"></div>`;
}
for (let i = 1; i <= daysInMonth; i++)
{
    if (i == today.getDate()) days += `<div id="today">${i}</div>`;
    else days += `<div>${i}</div>`;
}
numbers.innerHTML = days;