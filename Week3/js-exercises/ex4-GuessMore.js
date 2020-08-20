/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

//in this exercise we get 9 in the console, because we callback the function with parameter, but do not return the result of it, so x = 9 as in begining

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
/**in this exercise I get 10, because the value for "y" in block, it is object, so we change the value of the object in function and 
 * get already changed object which is 10
*/