

const poster = document.getElementById("poster");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const result = document.getElementById("result");

const correctAnswer = "Little Women";
let isAnswered = false;

option1.addEventListener("click", () => checkAnswer(option1));
option2.addEventListener("click", () => checkAnswer(option2));
option3.addEventListener("click", () => checkAnswer(option3));

function checkAnswer(selectedOption) {
    if (isAnswered) return;

    const selectedAnswer = selectedOption.innerText;

    if (selectedAnswer === correctAnswer) {
        result.textContent = "Correct! The poster is from 'Little Women'";
        poster.src = "littlewoman-full.jpeg";
    } else {
        result.textContent = "Wrong answer. Please try again.";
    }

    isAnswered = true;


}

