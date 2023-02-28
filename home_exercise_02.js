// Declare an array called players containing three strings
const players = ['Peter', 'Kate', 'John'];

// Loop through each element of the players array using a for loop
for (let i = 0; i < players.length; i++) {
  // Use console.log to print out the index of the current element (i + 1) and the element itself (players[i])
  console.log(`${i + 1}. ${players[i]}`);
}



// Define a function called extractTypes that takes an array as an argument
function extractTypes(arr) {
  // Initialize an empty array called types to store the types of each element
  const types = [];
  // Loop through each element of the input array using a for loop
  for (let i = 0; i < arr.length; i++) {
    // Use the typeof operator to determine the type of the current element and push it onto the types array using Array.push()
    types.push(typeof arr[i]);
  }
  // Return the types array
  return types;
}

// Declare an array x containing a string, a number, and a boolean
const x = ['', 4, true];
// Call the extractTypes function with the x array as an argument and store the result in a variable called extractedTypes
const extractedTypes = extractTypes(x);
// Use console.log to print out the extractedTypes array
console.log(extractedTypes); // Should output ['string', 'number', 'boolean']

