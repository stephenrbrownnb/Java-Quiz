
console.log("java");
var todoList = document.querySelector("#answers");
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
{question:`Which of the following object is the main entry point to all client side javaSCript features and APIs`,
 response:{
  a:'Position',
  b:'Standard',
  c:'Window',
  d:'Location'
 },
correctAnswer:'c'
}
];
// The following function renders items in a todo list as <li> elements
function renderAnswers() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
 
  // Render the potential answers
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Answer";

    li.appendChild(button);
    todoList.appendChild(li);
    console.log(quizQuestions);
  }
}
renderAnswers();

// // This function is being called below and will run when the page loads.
// function init() {
//   // Get stored todos from localStorage
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                
//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // This is a helper function that will render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Add submit event to form
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// Add click event to todoList element
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    console.log("You clicked on button")
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    todoList.innerHTML = todos;
 
    // Store updated todos in localStorage, re-render the list
    //storeTodos();
    //renderTodos();
  }
});

// // Calls init to retrieve data and render it to the page on load
// init()