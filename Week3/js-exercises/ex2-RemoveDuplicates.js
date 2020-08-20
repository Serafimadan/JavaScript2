/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE

function removeDuplicates(myArray) {
  const filteredStrings = myArray.filter((item, index) => {
    return myArray.indexOf(item) === index;

  });
  return filteredStrings;
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
//get result function, remove duplicate elements
const newLetters = removeDuplicates(letters);

if (JSON.stringify(newLetters) === JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f'])) {
  console.log("Hooray!");
}
