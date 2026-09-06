const myArray = [1, 2, 3, 4];

map(); // Transforms every element into a new array.
// Example: myArray.map(x => x * 2);
// [2, 4, 6, 8]

filter(); // Keeps elements that match a specific condition.
// Example: myArray.filter(x => x > 2);
// [3, 4]

reduce(); // Combines all elements into one final value.
// Example: myArray.reduce((sum, x) => sum + x, 0);
// 10

find(); // Returns the first element matching a condition.
// Example: myArray.find(x => x > 2);
// 3

includes(); // Checks whether an array contains a specific value.
// Example: myArray.includes(3);
// true
