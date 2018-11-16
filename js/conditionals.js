var age = prompt("What is your age?");

if (age<0) {
  alert("Error!");
}
else if (age==21) {
  alert("Happy 21st Birthday");
}
else if (age % Math.sqrt(age) === 0){
  alert("Perfect Square!");
}
else if (age%2!=0){
  alert("Your age is odd");
}
else{
  alert("You are " + age + " years old!");
}
