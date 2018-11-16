
// Print all numbers between -10 and 19
console.log("Problem 1:");

var num1 = -10;

while (num1 < 20){
  console.log(num1);
  num1++;
}

// Print all even numbers betwen 10 and 40
console.log("Problem 2:");

var num2 = 10;

while(num2 < 41){
  if(num2%2==0){
    console.log(num2);
  }
  num2++;
}

//Print all odd numbers between 300 and 333
console.log("Problem 3:");

var num3 = 301

while(num3 < 334){
  if(num3%2 != 0){
    console.log(num3);
  }
  num3++;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Problem 4:");
var num4 = 5
while(num4 < 50){
  if(num4%3 == 0 && num4%5 == 0){
  console.log(num4);
}
  num4++;
}
