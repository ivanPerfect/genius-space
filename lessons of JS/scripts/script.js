// dz1

// let name;
// let city;
// name = 'Ivan';
// city= name;
// console.log(city)

// dz 2

// let name = "Olga";
// console.log(`привіт ${1}`);
// console.log(`привіт ${"name"}`);
// console.log(`привіт ${name}`);

// привіт 1
// script.js:12 привіт name
// script.js:13 привіт Olga

// dz 3

// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";

// console.log(Number.parseInt(a));
// console.log(Number.parseInt(b));
// console.log(Number.parseInt(c));

// dz 5
// console.log(Math.max(20, 10, 50, 40));

// dz 6

// console.log(Math.random()*(4-2)+2);

// dz 7
// const message = "Welcome to Bahamas!";

// console.log(message.length);

// dz 8
// let mes = "messege";
// console.log(mes.toLocaleUpperCase());

// dz 9

// let obj = {};
// obj.name = "ivan";
// obj.age = "26";
// obj.city = "Lviv";
// console.log(obj);

// delete obj.city;

// console.log(obj);

// obj["like flowers"] = true;

// console.log(obj);

// // dz 10

// for (key in obj) {
//   console.log(obj[key]);
//   console.log(key);
// }

// dz 11
// let value =-3;

// if (value >= 0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// dz 12

// let val ='true';

// if (val == 'test'){
//     console.log(true);
// }else {
//     console.log(false);
// }

// dz 13

// let val = 13;

// if (val > 10) {
//   val =val - 5;
// } else if (val < 10) {
//   val =val +5;
// }
// console.log(val);

// dz 14

// let month = +prompt("Enter of the month");

// switch (month) {
//   case 1:
//     console.log("Январь");
//     break;
//   case 2:
//     console.log("Февраль");
//     break;
//   case 3:
//     console.log("Март");
//     break;
//   case 4:
//     console.log("Апрель");
//     break;
//   case 5:
//     console.log("Май");
//     break;
//   case 6:
//     console.log("Июнь");
//     break;
//   case 7:
//     console.log("Июль");
//     break;
//   case 8:
//     console.log("Август");
//     break;
//   case 9:
//     console.log("Сентябрь");
//     break;
//   case 10:
//     console.log("Октябрь");
//     break;
//   case 11:
//     console.log("Ноябрь");
//     break;
//   case 12:
//     console.log("Декабрь");
//     break;
//     default :
//     console.log("Нету такого месяца");
// }

// // dz 15
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// console.log(fruts.map((item)=>item.name));

// dz 16
// for (let i=2;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// dz 17
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(i);
// }

// dz 18
// let val;
// do{
//     val = prompt("enter the number >100");
// }
// while(val<=100);

// dz 19

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

let arr = girls.map((item)=>item.age);

console.log(arr);


let sum = arr.reduce((summ, item )=>summ+item)/arr.length;

console.log(sum);