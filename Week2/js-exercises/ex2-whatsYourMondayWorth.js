/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */


function dayWorth(tasks, hourlyRate) {
  // put your code in here, the function does returns a euro formatted string
  //use method map to get the duration time for each task in hours and get hourly pay for each task
  const durationPaiment = mondayTasks.map(function (time) {
    return (time.duration / 60 * hourlyRate);
  })
  //use method reduce to get paid for all tasks
  let totalPaiment = durationPaiment.reduce((total, amount) => total + amount); 
  //use method toLocaleString
  return totalPaiment.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
}


const mondayTasks = [{
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25))
console.log(dayWorth(mondayTasks, 13.37))