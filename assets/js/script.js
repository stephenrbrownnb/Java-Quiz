
console.log("java");
var todoList = document.querySelector("#answers");
var startButton = document.querySelector(".start-button");
var largeFontQuestion = document.querySelector(".question");
largeFontQuestion.textContent = "";
let i = "0"
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
  
   
    var todo = quizQuestions[i];
    //Erase this 
    //var li = document.createElement("li");
    //li.textContent = todo.response.a;
    //var li2 = document.createElement("li");
    //li2.textContent = todo.response.b;
    //var li3 = document.createElement("li");
    //li3.textContent = todo.response.c;
    //var li4 = document.createElement("li");
    //li4.textContent = todo.response.d;

   // li.setAttribute("data-index", i);

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
   // todo.appendChild(button);

    todoList.appendChild(button1);
    todoList.appendChild(button2);
    todoList.appendChild(button3);
    todoList.appendChild(button4);
    console.log(todo.response);
    largeFontQuestion.textContent = todo.question;
  }
;
// Add a display none
startButton.addEventListener("click", renderAnswers);

// Add click event to todoList element
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
   
    var index = element.parentElement.getAttribute("data-index");
    console.log("You clicked on"+ index);
    console.log(index)
 
  }
});

// // Calls init to retrieve data and render it to the page on load
// init()