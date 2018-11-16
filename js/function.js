//isEven
// function isEven(x){
//   //return if true
//   if(x%2===0){
//     return true;
//   }
//   //return if false
//   return false;
// }

function isEven(x){
  return x%2===0;
}


//factorial
// function factorial(x){
//   if(x!==0){
//     for(var i=x-1;i>=1; i--){
//     x=x*i;
//     }
//     return x;
//   }
//   else {
//     return 1;
//   }
// }

function factorial(num){
  var result=1;
  for(i=2; i<=num; i++){
    result=result*i;
  }
  return result; 
}



//kebabToSnake
function kebabToSnake(str){
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
    //try with: "this - is -a - ---test";
}
