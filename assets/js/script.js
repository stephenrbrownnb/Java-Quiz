
var todoList = document.querySelector("#answers");
var startButton = document.querySelector(".start-button");
var largeFontQuestion = document.querySelector(".question");
largeFontQuestion.textContent = "";
var rightDis = document.querySelector(".right");
var wrongDis = document.querySelector(".wrong");
var timerElement = document.querySelector(".timer-count");
var i = "0";
var right = "0";
var wrong = "0";
var score = 0;
var endTime = 0;
var highScores = [];
var initials ="";




//timer variables
var timerCount;
var timer;
var penalty;
//Questions array
let quizQuestions = [
  {question:'What is JavaScript?',
  response: {
    a:'JavaScript is a scripting language used to make the website interactive.',
    b:'JavaSCript is an assembly language used to make the website interactive.',
    c:'JavaScript is a compiled language used to make the website interactive.',
    d:'None of the above.'
},
correctAnswer:'a'
},
{question:`Which of the following is correct about JavaScript?`,
 response:{
  a:'JavaScript is an Object-Based language.',
  b:'JavaScript is Assembly-language.',
  c:'JavaScript is an Object-Oriented language.',
  d:'JavaScript is a High-level language.'
 },
correctAnswer:'a'
},
{question:`Arrays in JavaSCript are defined by which of the following statements`,
 response:{
  a:'It is an ordered list of objects',
  b:'It is an ordered list of values',
  c:'It is an ordered list of string',
  d:'It is an ordered list of functions'
 },
correctAnswer:'b'
},
{question:`Which of the following is not javascript data types?`,
 response:{
  a:'Null type',
  b:'Undefined type',
  c:'Number type',
  d:'All of the above.'
 },
correctAnswer:'d'
},
{question:`Which of the following object is the main entry point to all client side javaScript features and APIs`,
 response:{
  a:'Position',
  b:'Standard',
  c:'Window',
  d:'Location'
 },
correctAnswer:'c'
}
];
console.log(quizQuestions[0]);
// The following function renders items in a todo list as <li> elements
function renderAnswers() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";

  // Render the potential answers
  if (i < quizQuestions.length) {
    
  
   
    var todo = quizQuestions[i];
    var button1 = document.createElement("button");
    button1.setAttribute("data-index", 'a')
    button1.textContent = todo.response.a;
    var button2 = document.createElement("button");
    button2.setAttribute("data-index", 'b')
    button2.textContent = todo.response.b;
    var button3 = document.createElement("button");
    button3.setAttribute("data-index", 'c')
    button3.textContent = todo.response.c;
    var button4 = document.createElement("button");
    button4.setAttribute("data-index", 'd')
    button4.textContent = todo.response.d;
    todoList.appendChild(button1);
    todoList.appendChild(button2);
    todoList.appendChild(button3);
    todoList.appendChild(button4);
    console.log(todo.response);
    largeFontQuestion.textContent = todo.question;
  }
  else {
  endGame();
  }
};

//things to do when game is over
function endGame(){
  largeFontQuestion.textContent ="Game Over " + endTime + " seconds left.";
  clearInterval(timer);
  score = right * endTime;
  console.log(score);
  createHighScores();
  
}

//Event listener.to start the game. 
startButton.addEventListener("click", startGame);{
  console.log("starting game");
}


// Event for clicking on answers
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
   
    var index = element.getAttribute("data-index");
   //checks if answer is correct. 
 if (index === quizQuestions[i].correctAnswer) {
  console.log("Correct");
  i++;
  right++;
  rightDis.textContent = right;
  
 renderAnswers();
  
 }
 //if not correct
 else {console.log("wrong");
 wrong++;
 wrongDis.textContent = wrong;
 timerCount = timerCount -5;
console.log(timerCount);
i++;

renderAnswers();
}
  
}
});

function startGame(){
  let i = "0";
   right = "0";
   wrong = "0";
 timerCount = 30;
  startTimer(timerCount);
  renderAnswers();

}
  startTimer = function () {
    // Sets timer
 
    console.log(timerCount);
    timer = setInterval(function() {
      timerCount--;
      //timerCount = timerCount -
      timerElement.textContent = timerCount;
      console.log(timerCount);
      endTime = timerCount
      if (timerCount >= 0) {
        
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        
        endGame();
      }
    }, 1000);
  }
  function createHighScores () {
    
  
    let initials = prompt('What are your initials'); 
    var highScore = {Name:initials,score:score};
     highScores.push(highScore);
     console.log(highScores)
     localStorage.setItem("highScores",JSON.stringify(highScores));
i=0;

    }