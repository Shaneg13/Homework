//for the week 3 homework, use function declaration 
//This is a function declaration
function myFirstFunction() {
    console.log("This is my first function.");
}

// 1) Create an array of pizzaToppings with at least four different toppings

// 2) Create a greetCustomer function that prints a message that welcomes a guest, 
// then informs them of the available toppings by looping over pizzaToppings 
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//          i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..." USE A PARAMETER**


// 3) Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings


// 4) Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings


// 5) Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in


// 6) Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// 7) Add, commit, and push your JS file to your GitHub repo.
// 8) Send your TA a link to your GitHub Homework repo when finished.


// An example output for this assignment is:
// Welcome to The Pizza House, our toppings are: 
// pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . 
// Coming up! ...your pizza is cooking... Order up! Here's 
// your large thin crust pizza with sausage, onions, peppers, . Enjoy!

pizzaToppings = ['Pepperoni' , 'Sausage' , 'Onions' , 'Peppers'];
pizzaPlace = "G-well's Pizza Palace";

let hello = 'Hello';
function greet(name) {
  console.log(
    `${hello}, ${name}, Welcome to ${pizzaPlace}. We offer multiple topping for your pizza. Some options are ${pizzaToppings}.`
  );
}
greet('Shane');

let getPizzaOrder = [
  'Small',
  'Large',
  'Thick Crust',
  'Regular Crust',
  pizzaToppings,
];
function orderPizza() {
  console.log(
    `One ${getPizzaOrder[1]} ${pizzaToppings[1]} pizza with ${getPizzaOrder[2]} coming up!`
  );
}
orderPizza();

let preparePizza = 'Your pizza is being prepared';
function cookingPizza() {
  console.log(
    `Cooking pizza! Your ${getPizzaOrder[1]} ${pizzaToppings[1]}, ${getPizzaOrder[2]} pizza is coming out!`
  );
}
cookingPizza();

let servePizza = 'Your pizza is ready';
function orderUp() {
  console.log(
    `Order up! Your pizza is ready. Your order was a ${getPizzaOrder[1]} ${pizzaToppings[1]}, ${getPizzaOrder[2]} pie. As always, thank you and enjoy!`
  );
}
orderUp();