var todos = ["Harry", "Ron", "Hermione", "Neville"];

var input = prompt("What would you like to do?");

while (input !=="quit"){
  //hande input
  //list todos
  if(input==="list"){
    listTodos();
  }  else if(input==="new"){
    addTodo();
  } else if (input==="delete"){
    deleteTodo();
  }
  //ask again for new input
  var input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");


function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i+ ": " + todo);
  });
  console.log("*********");
}

function addTodo(){
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add todos array
  todos.push(newTodo);
}

function deleteTodo(){
  //ask for index to be  deleted
  var index= prompt("Enter index of todo to delete");
  //delete that todo
  //splice()
  todos.splice(index,1);
}