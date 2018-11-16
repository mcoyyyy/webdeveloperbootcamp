// Print all numbers between -10 and 19
console.log("Problem 1:")

for(var i=-10;i<20;i++){
  console.log(i);
}

// Print all even numbers betwen 10 and 40
console.log("Problem 2:");

for (var i=10;i<41;i++){
  if(i%2===0){
    console.log(i);
  }
}

//Print all odd numbers between 300 and 333
console.log("Problem 3:");

for(var i=300;i<334;i++){
  if(i%2!==0){
    console.log(i);
  }
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Problem 4:");

for(var i=5;i<51;i++){
  if(i%3===0 && i%5===0){
    console.log(i);
  }
}
