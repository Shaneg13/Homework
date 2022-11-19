//for the week 3 homework, use function declaration 
//This is a function declaration
function myFirstFunction() {
    console.log("This is my first function.");
}
// 6) Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// 7) Add, commit, and push your JS file to your GitHub repo.
// 8) Send your TA a link to your GitHub Homework repo when finished.


// An example output for this assignment is:
// Welcome to The Pizza House, our toppings are: 
// pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . 
// Coming up! ...your pizza is cooking... Order up! Here's 
// your large thin crust pizza with sausage, onions, peppers, . Enjoy!

// 1) Create an array of pizzaToppings with at least four different toppings

pizzaToppings = ['Pepperoni' , 'Sausage' , 'Onions' , 'Peppers'];
pizzaPlace = "G-well's Pizza Palace";

// 2) Create a greetCustomer function that prints a message that welcomes a guest, 
// then informs them of the available toppings by looping over pizzaToppings 
// (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
//          i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..." USE A PARAMETER**

let hello = 'Hello';
function greetCustomer(name) {
  console.log(
    `${hello}, ${name, 'Shane'}, Welcome to ${pizzaPlace}. We offer multiple topping for your pizza. Some options are ${pizzaToppings}.`
  );
  for (let topping of pizzaToppings)
{
  console.log(topping)
}}

// 3) Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust , ...toppings) {
console.log(
    `One ${size} ${crust} crust pie with ${toppings} coming up!`);
return [size, crust, toppings];
}
// 4) Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza([size, crust, ...toppings]) {
  console.log('Your pizza is in the oven!')
  let pizza = {
    pizzasize: size,
    pizzacrust: crust,
    pizzatoppings: toppings,
  };
  
  return pizza;
}

// 5) Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizza) {
  console.log(`Order up! Your pizza is ready. Your order was a ${pizza.pizzasize} ${pizza.pizzacrust}, ${pizza.pizzatoppings} pie. As always, thank you and enjoy!`);

return pizza;
}

greetCustomer();
servePizza(preparePizza(getPizzaOrder('Large' , 'Thin', 'pepperoni', 'Sausage')));
