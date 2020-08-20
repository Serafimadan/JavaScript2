/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();
/** result is 12, because of we override the variable 
inside the const x, the value of which is to the function, 
which returns an function as a result, and displays the value of the overridden variable.
The function has full access to external variables and can change their value.
*/