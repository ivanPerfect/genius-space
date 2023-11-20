// import { name } from "./module.js";
// import "./style.css";
// import isEmail from "validator/lib/isEmail";
// import isURL from "validator/lib/isURL";
// import toDate from "validator/lib/toDate";

// console.log("your name " + name);

// var validator = require("validator");

// console.log(validator.isEmail("foo@bar.com")); //=> true)

// //2 способ

// console.log(isEmail("foo@bar.com")); //=> true)

// console.log(isURL("https://www.npmjs.com/package/validator"));

// console.log(toDate("https://www.npmjs.com/package/validator"));

// console.log(toDate("12/1/1222"));

var moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(moment().format("MMM Do YY"));