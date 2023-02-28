//questions
var questionBank= [
    {
        question:'Where do Rachel and Ross go on their first date?',
        option: ['The Cinema','Ross Museum','Central Perk','The Empire State Building'],
        answer: 'Ross Museum'
    },
    {
        question:'What is the name of Joey’s acting agent?',
        option: ['Andrea','Estelle','Martha','Carole'],
        answer: 'Estelle'
    },
    {
        question:'Which job did Rachel’s fiancé Barry Farber do?',
        option: ['Lawyer','Plumber','Orthodontist','Journalist'],
        answer: 'Orthodontist'
    },
    {
        question:'Ross is allergic to which kind of fruit?',
        option: ['Lemon','Apple','Kiwi','Pomegranate'],
        answer: 'Kiwi'
    },
    {
        question:'Phoebe has a twin sister. What is her name?',
        option: ['Scarlett','Ursula','Sharon','Rita'],
        answer: 'Ursula'
    },
    {
        question:'What instrument does Phoebe Buffay play?',
        option: ['Guitar','Drums','Flute','Synthesiser'],
        answer: 'Guitar'
    },
    {
        question:'What is the name of Phoebe’s alter-ego?',
        option: ['Phoebe Neeby','Monica Bing','Regina Falange','Elaine Benes'],
        answer: 'Regina Falange'
    },
    {
        question:'What is the name of the grumpy person who works at the coffee shop?',
        option: ['Herman','Frasier','Eddie','Gunther'],
        answer: 'Gunther'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var options= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score=0;

//question on display
function displayQuestion() {
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= 'Question'+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background='#1c5c34'; //maybe change later
    }
    else{
        document.getElementById(e.id).style.background='#c44536'; //maybe change later
    }
    setTimeout(nextQuestion,300);
}

//next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display='block';
    }
}


//button back to quiz 
function backToQuiz() {
    location.reload();
}

//check answers 
function checkAnswer() {
    var answerBank= document.getElementById ('answerBank');
    var answers= document.getElementById ('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li')
        ;
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}



displayQuestion();