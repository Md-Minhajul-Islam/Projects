

const configContainer = document.querySelector(".config-container");
const quizContent = document.querySelector(".quiz-content");
const resultContainer = document.querySelector(".result-container");
const quizStartBtn = document.querySelector(".start-quiz-btn");
const quizQuestion = document.querySelector(".quiz-question");
const answerOptions = document.querySelector(".answer-options"); 
const quizQuestionTitle = document.querySelector(".quiz-question-title")
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timeCounter = document.querySelector(".time-duration");
const resultMessage = document.querySelector(".result-message");
const TryAgainBtn = document.querySelector(".try-again-btn");


const checkCircle = document.createElement("span");
checkCircle.className = "material-symbols-rounded";
checkCircle.textContent = "check_circle";

const cancel = document.createElement("span");
cancel.className = "material-symbols-rounded";
cancel.textContent = "cancel";

let timerId, marks = 0;

function hideDiv(element) { element.classList.add("hide"); }
function showDiv(element) { element.classList.remove("hide");}

const options = document.querySelectorAll(".category-option, .question-option");
options.forEach(option => {
    option.addEventListener("click", () => {
        const active = option.parentNode.querySelector(".config-active");
        if(active) active.classList.remove("config-active");
        option.classList.add("config-active");
    });
});

quizStartBtn.addEventListener("click", () => {
    const category = document.querySelector(".category-buttons").querySelector(".config-active");
    const numOfQues = document.querySelector(".question-buttons").querySelector(".config-active");

    if (category && numOfQues)
    {       
        viewQuiz(category.innerText.toLowerCase(), numOfQues.innerText.toLowerCase());
    }
    else
    {
        alert("Select category and no. of questions.");   
    }
});

function viewQuiz(category, numOfQues) {
    const categoryObj = questions.find(cat => cat.category.toLowerCase() == category);
    if (categoryObj) {
        hideDiv(configContainer);
        showDiv(quizContent);

        const quesArr = categoryObj.questions;
        let indexArr = [];
        for (let i = 0; i < quesArr.length; i++) indexArr.push(i);

        const randomInd = Math.floor(Math.random() * indexArr.length);
        const index = indexArr[randomInd];
        const toRemove = indexArr.indexOf(index);
        if (toRemove !== -1) indexArr.splice(toRemove, 1);
        let cnt = 1;
        showQuestion(index, quesArr, cnt, numOfQues);
        nextQuestionBtn.addEventListener("click", () => {
            if (cnt < numOfQues)
            {
                cnt++;
                const randomInd = Math.floor(Math.random() * indexArr.length);
                const index = indexArr[randomInd];
                const toRemove = indexArr.indexOf(index);
                if (toRemove !== -1) indexArr.splice(toRemove, 1);
                showQuestion(index, quesArr, cnt, numOfQues);
            }   
            else
            {
                hideDiv(quizContent);
                showDiv(resultContainer);

                resultMessage.innerHTML = `You answered <b>${marks}</b> out of <b>${numOfQues}</b>
                questions correctly. Great effort!`;
            }
        });  
    }
    else {
        alert("Category data is not present.");
    }
}

TryAgainBtn.addEventListener("click", () => {
    location.reload();
});


function showQuestion(index, quesArr, currQues, totalQues) {
    
    nextQuestionBtn.disabled = true;

    quizQuestionTitle.textContent = quesArr[index].question;
    const correctAnswer = quesArr[index].correctAnswer;

    answerOptions.innerHTML = "";
    quesArr[index].options.forEach((option, index) => {
 
        
        questionStatus.innerHTML = `<b>${currQues}</b> of <b>${totalQues}</b> Questions`;

        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => matchAnswer(li, index, correctAnswer));
    });
    startTimer(correctAnswer);
}
const matchAnswer = (li, index, correctAnswer) => {

    nextQuestionBtn.disabled = false;
    const isCorrect = correctAnswer === index;
    li.classList.add(isCorrect ? "correct-answer" : "incorrect-answer");
    if (isCorrect) 
    {
        marks++;
        li.appendChild(checkCircle);
    }
    else{
        li.appendChild(cancel);
        showCorrectAnswer(correctAnswer);
    }

    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    clearInterval(timerId);
}

function startTimer(correctAnswer)
{
    let time = 15;
    timeCounter.innerText = time + 's';

    timerId = setInterval(() => {
        time--;
        timeCounter.innerText = time + 's';
        if (time <= 0) {
            clearInterval(timerId);
            showCorrectAnswer(correctAnswer);
            answerOptions.querySelectorAll(".answer-option").forEach(option => {
                option.style.pointerEvents = "none";
            });
        }
    }, 1000);
}


function showCorrectAnswer(correctAnswer) {

    nextQuestionBtn.disabled = false;
    answerOptions.querySelectorAll(".answer-option").forEach((option, index) => {
        if (index === correctAnswer) {
            option.classList.add("correct-answer");
            option.appendChild(checkCircle);
        }
    });
}



// <!-- <span class="material-symbols-rounded">check_circle</span> -->
// <!-- <span class="material-symbols-rounded">cancel</span> -->