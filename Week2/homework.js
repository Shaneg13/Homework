
let pizzaPlace = "G-Well's Pizza Palace";
let numberOfToppings = 50;

console.log(
  `Welcome to ${pizzaPlace}. We offer a total of ${numberOfToppings} Toppings for our pizza.`
);

if (numberOfToppings <= 10) {
  console.log('Dissapointed');
} else if (numberOfToppings > 10);
console.log('Too Many');

let i = 1;
while (i <= numberOfToppings) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
console.log(pizzaPlace);
console.log(numberOfToppings);