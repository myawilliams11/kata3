function add (number1, number2) {
    return (number1 + number2);
}
console.log(add(2, 4))



function multiply(x,y) {
    var result= 0;  
    for (let i=0; i < 9; i++)
    result= add(result,6)
}
console.log(multiply(6*8))
// 6*8


function pwr(x,n) {
    var result= 0;  
    for (let i=0; i < 9; i++)
    result= add(result,6)
}
console.log(pwr(2^8))

// 2^8


function factorialize(num) {
    return num;
  }
  factorialize(4);
  console.log(factorialize(4*3*2*1))




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



