// currying is the technique of translating the evaluation of a function that takes multiple arguments.
// Into evaluating a sequence of functions, each with a single argument.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);

//10 years
curriedMultiplyBy5(4);
curriedMultiplyBy5(4);
curriedMultiplyBy5(4);
