const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jws = require("jws");

const app = express();

app.set("view engine", "jws");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/CustomerPhnDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PhoneSchema = {
  name: {
    type: String,
    require: [true, "please Enter Name!"],
  },
  phoneNum: {
    type: Number,
    require: [true, "please Enter the Phone number!"],
  },
};

const PhoneNum = mongoose.model("phoneNum", PhoneSchema);

//get method

app
  .route("/PhoneAPI")
  .get(function (req, res) {
    PhoneNum.find({}, function (err, foundData) {
      if (!err) {
        res.send(foundData);
      } else {
        console.log(err);
      }
    });
  })
  .post(function (req, res) {
    PhoneNum.findOne({ phoneNum: req.body.phone }, function (err, FoundPhn) {
      if (!err) {
        //Here it will check posted phone number present in existing list
        if (!FoundPhn) {
          const newContact = new PhoneNum({
            name: req.body.Name,
            phoneNum: req.body.phone,
          });
          newContact.save(function (err) {
            if (!err) {
              res.send("successfully added");
            } else {
              res.send(err);
            }
          });
        } else {
          res.send("phoneNumber alredy exist");
          console.log(FoundPhn);
        }
      } else {
        res.send(err);
      }
    });
  });
app.listen(3000, function () {
  console.log("server has started on 3000 port");
});
