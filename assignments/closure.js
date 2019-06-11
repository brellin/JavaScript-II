// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function func() {
  let closureText = `This is the text for the closure`;
  function subFunc() {
    console.log(`Herein contains the closure text: (${closureText})`);
  }
  return subFunc();
}
func()
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (x) => {
  // Return a function that when invoked increments and returns a counter variable.
  let newCounter = x => ++x;
  console.log(newCounter(x));
};

counter(0);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (x) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let obj = {
    increment: x => ++x,
    decrement: x => --x
  }

  return {
    increment: obj.increment(x),
    decrement: obj.decrement(x)
  }
};

console.log(counterFactory(0))
