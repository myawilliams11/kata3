
// first one
function add (number1, number2) {
    return (number1 + number2);
}
console.log(add(2, 4))


// second one
function multiply(x,y) {
    result= 0;  
    for (let i=0; i < y; i++){
    result = add(result,x)
}
return result
}
 console.log(multiply(6,8))



// third one
function pwr(x,n) {
    var result= 1;  
    for (let i=0; i < n; i++){
    result = multiply(result,x)
}
return result
}
console.log(pwr(2,8))



// 4th one
function factorialize(num) {
 var result = 1;
 for (let i=1; i<=num; i++) {
   result = multiply(result,i)
 }
    return result;
  }
  console.log(factorialize(4))



// 5th one
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
 console.log(fibonacci_series(7));



