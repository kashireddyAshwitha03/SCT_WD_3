const questions=[

{

question:"What does HTML stand for?",

answers:[

{text:"Hyper Text Markup Language",correct:true},

{text:"High Transfer Machine Language",correct:false},

{text:"Hyper Tool Multi Language",correct:false},

{text:"Home Text Language",correct:false}

]

},

{

question:"Which language is used for styling web pages?",

answers:[

{text:"Python",correct:false},

{text:"Java",correct:false},

{text:"CSS",correct:true},

{text:"C++",correct:false}

]

},

{

question:"Which language makes websites interactive?",

answers:[

{text:"JavaScript",correct:true},

{text:"HTML",correct:false},

{text:"CSS",correct:false},

{text:"SQL",correct:false}

]

},

{

question:"Which symbol is used for comments in JavaScript?",

answers:[

{text:"//",correct:true},

{text:"<!-- -->",correct:false},

{text:"#",correct:false},

{text:"**",correct:false}

]

},

{

question:"Which company developed JavaScript?",

answers:[

{text:"Microsoft",correct:false},

{text:"Netscape",correct:true},

{text:"Google",correct:false},

{text:"Apple",correct:false}

]

}

];

const questionElement=document.getElementById("question");

const answerButtons=document.getElementById("answer-buttons");

const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;

let score=0;

function startQuiz(){

currentQuestionIndex=0;

score=0;

nextButton.innerHTML="Next";

showQuestion();

}

function showQuestion(){

resetState();

let currentQuestion=questions[currentQuestionIndex];

questionElement.innerHTML=(currentQuestionIndex+1)+". "+currentQuestion.question;

currentQuestion.answers.forEach(answer=>{

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);

if(answer.correct){

button.dataset.correct=answer.correct;

}

button.addEventListener("click",selectAnswer);

});

}

function resetState(){

nextButton.style.display="none";

while(answerButtons.firstChild){

answerButtons.removeChild(answerButtons.firstChild);

}

}

function selectAnswer(e){

const selectedBtn=e.target;

const isCorrect=selectedBtn.dataset.correct==="true";

if(isCorrect){

selectedBtn.classList.add("correct");

score++;

}

else{

selectedBtn.classList.add("wrong");

}

Array.from(answerButtons.children).forEach(button=>{

if(button.dataset.correct==="true"){

button.classList.add("correct");

}

button.disabled=true;

});

nextButton.style.display="block";

}

function showScore(){

resetState();

questionElement.innerHTML="You scored "+score+" out of "+questions.length+"!";

nextButton.innerHTML="Play Again";

nextButton.style.display="block";

}

function handleNextButton(){

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}

else{

showScore();

}

}

nextButton.addEventListener("click",()=>{

if(currentQuestionIndex<questions.length){

handleNextButton();

}

else{

startQuiz();

}

});

startQuiz();