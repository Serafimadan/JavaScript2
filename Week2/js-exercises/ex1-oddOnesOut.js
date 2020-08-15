/**

 ** Exercise 1: The odd ones out **

 Rewrite the following function using map and filter. 
 Avoid using for loop or forEach.
 The function should still behave the same.

 */
function doubleEvenNumbers(numbers) {
    let filtered = myNumbers.filter(currentValue => currentValue % 2 == 0);
    let newNumbers = filtered.map(currentValue => currentValue * 2);
  return newNumbers;
}

  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

