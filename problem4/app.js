const person = {
  id: 2,
  gender: "Mail",
};

const student = {
  name: "ravi",
  email: "ravi11@yopmail.com",
};

const user = {
  //Using Spread operator
  ...person,
  ...student,
};

console.log(user);
