const questions=[{
    question:"Which is the largest animal in the world",
    answers:[
        {text:"shark",correct:false},
        {text:"Blue Whale",correct:true},
        {text:"Elephant",correct:false},
        {text:"Giraffe",correct:false},
    ]
},{
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false }
    ]
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    answers: [
      { text: "Alan Turing", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Tim Berners-Lee", correct: false }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Who painted the famous 'Starry Night'?",
    answers: [
      { text: "Vincent van Gogh", correct: true },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false }
    ]
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  }
];
const questionelement=document.getElementById('question');
const Answerbutton=document.getElementById('answer-buttons');
const nextbutton=document.getElementById('next-btn');

function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}
function showquestion(){
    //resetstate();
    let currentquestion=questions[currentquestionindex];
    let questionno=currentquestionindex+1;
    questionelement.innerHTML=questionno+"."+currentquestion.question;
    Answerbutton.innerHTML = '';
    currentquestion.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add("btn");
        Answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectanswer);
    })
}
/*function resetstate(){
    nextbutton.style.display="none";
    while(Answerbutton.firstChild){
        Answerbutton.removeChild(Answerbutton.firstChild)
    }
}*/
function selectanswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(Answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}
nextbutton.addEventListener('click',()=>{
    if(currentquestionindex<questions.length){
        handlenextbutton();
    }
    else{
        startquiz();
    }
})
function showscore(){
    Answerbutton.innerHTML='';
    questionelement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="play Again";
    nextbutton.style.display="block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}
startquiz();