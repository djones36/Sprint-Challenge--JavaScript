// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(par1, par2, cb){
  return cb(par1, par2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(par1, par2){
  return console.log(par1 + par2);
}

function multiply(par1, par2){
  return console.log(par1 * par2);
}

function greeting(par1, par2){
  return console.log(`Hello ${par1} ${par2}, nice to meet you!`)
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

//`nestedfunction()` can access the variable `internal` because it is making use of the concept of Closure, where a nested function can reach out to its parent and access the variable. The parent function is myFunction and inside of it is the nestedFunction, the child. A better way to look at it is parent function is a kingdom in the world, and inside of the kindgom(myFunction) is smaller cities(nestedFunctions), cities can reach out to the kingdom for data but kingdom are too big to reach into cities.  

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();