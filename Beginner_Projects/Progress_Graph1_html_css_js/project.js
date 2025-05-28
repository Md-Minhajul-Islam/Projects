
const leftInput = document.getElementById("left-input");
const leftBtn = document.getElementById("left-btn");
const rightInput = document.getElementById("right-input");
const rightBtn = document.getElementById("right-btn");


let x1Values = JSON.parse(localStorage.getItem("x1Values")) || [];
let y1Values = JSON.parse(localStorage.getItem("y1Values")) || [];
leftBtn.addEventListener("click", () => {

  if (leftInput.value === "" || isNaN(leftInput.value)) {
    alert("Please enter a number.");
    return;
  }
    const date = new Date().getDate();
    x1Values.push(date);
    const yValue = y1Values.length === 0 ? 0 : y1Values[y1Values.length - 1];
    y1Values.push(parseInt(leftInput.value)+parseInt(yValue));
    leftInput.value = "";
    leftChart.update();
    localStorage.setItem("x1Values", JSON.stringify(x1Values));
    localStorage.setItem("y1Values", JSON.stringify(y1Values));
});

let x2Values = JSON.parse(localStorage.getItem("x2Values")) || [];
let y2Values = JSON.parse(localStorage.getItem("y2Values")) || [];
rightBtn.addEventListener("click", () => {

  if (rightInput.value === "" || isNaN(rightInput.value)) {
    alert("Please enter a number.");
    return;
  }

    const date = new Date().getDate();
    x2Values.push(date);
    const yValue = y2Values.length === 0 ? 0 : y2Values[y2Values.length - 1];
    y2Values.push(parseInt(rightInput.value)+parseInt(yValue));
    rightInput.value = "";
    rightChart.update();
    localStorage.setItem("x2Values", JSON.stringify(x2Values));
    localStorage.setItem("y2Values", JSON.stringify(y2Values));
});

const leftChart = new Chart("left-graph", {
    type: "line",
    data: {
        labels: x1Values,
        datasets: [{
            label: "Problem number",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: y1Values
      }]
    },
    options: {
        legend: { display: false },
        plugins: {
            title: {
              display: true,
              text: "Problem Solving Progress(May-June, 25)",
              font: {
                size: 18
              },
              color: "#333"
            }
          },
        scales: {
          yAxes: [{ticks: {min: 0, max:100}}],
        }
      }
});
const rightChart = new Chart("right-graph", {
    type: "line",
    data: {
        labels: x2Values,
        datasets: [{
            label: "Project Number",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: y2Values
      }]
    },
    options: {
        legend: { display: false },
        plugins: {
            title: {
              display: true,
              text: "Project Doing Progress(May-June, 25)",
              font: {
                size: 18
              },
              color: "#333"
            }
          },
        scales: {
          yAxes: [{ticks: {min: 0, max:100}}],
        }
      }
});

