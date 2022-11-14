const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const quesEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn'); 
const scoreEl = document.getElementById('score'); 
let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
    score = 0;
}
scoreEl.innerText = `Score: ${score}`;
quesEl.innerText = `What is ${num1} Multipy by ${num2}?`;
const CorrectAnswer = num1 * num2;

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value;
    if (userAns === CorrectAnswer) {
        score++;
        updateLocalStorage()
    }
    else {
        score--;    
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}