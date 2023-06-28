const chalk = require("chalk");
const num_array = [];

while (num_array.length < 99) {
  let num = Math.floor(Math.random() * 100);
  if (!num_array.includes(num)) {
    num_array.push(num);
  }
}

for (var i = 0; i < num_array.length; i++) {
  if (!num_array.includes(i)) {
    console.log(
      chalk.blue("Missing Value between 1-100 is ") + chalk.red.bold(i)
    );
  }
}

console.log(
  chalk.yellow.bold("Here is the 1-100 numbers  ") + chalk.green.bold(num_array)
);
