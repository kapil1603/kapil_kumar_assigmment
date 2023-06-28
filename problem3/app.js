const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/assignDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const CustomerSchema = new mongoose.Schema({
  email: String,
  name: String,
});

const Customers = mongoose.model("user", CustomerSchema);
const customers = [
  {
    email: "anurag11@yopmail.com",
    name: "anurag",
  },
  {
    email: "sameer11@yopmail.com",
    name: "sameer",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "santhosh11@yopmail.com",
    name: "santhosh",
  },
  {
    email: "Rakesh11@yopmail.com",
    name: "Rakesh",
  },
];

customers.forEach((currentCus) => {
  let curCus = currentCus.email;
  customers.find((cus) => {
    if (currentCus.name !== cus.name && currentCus.email === cus.email) {
      currentCus.name = cus.name;
    } else {
      const newCus = new Customers(currentCus);
      newCus.save();
    }
  });
});
