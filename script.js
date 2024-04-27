let firstName = "karam";
let lastName = " mustafa";
let age = 27;
let city = "damascus";
let country = "syria";

let karamInfoObject = {
  firstName: "karam", // accept all supported javascript data types
  lastName: "mustafa",
  age: "27",
  city: "damascus",
  country: "syria",
};

let aliInfoObject = {
  firstName: "ali", // accept all supported javascript data types
  lastName: "mohammed",
  age: "21",
  city: "latakia",
  country: "syria",
};

let nouraInfoObject = {
  firstName: "noura", // accept all supported javascript data types
  lastName: "mahmoud",
  age: "24",
  city: "latakia",
  country: "syria",
};

// let karamInfo = firstName + lastName + " and his age: " + age + " he lives in: " + city + " in: " + country;
// let karamInfo = `${firstName} ${lastName} and his age: ${age} and he lives in: ${city} in: ${country}`;
let displayKaramInfo = `${karamInfoObject.firstName} ${karamInfoObject.lastName} and his age: ${karamInfoObject.age} and he lives in: ${karamInfoObject.city} in: ${karamInfoObject.country}`;
let displayAliInfo = `${aliInfoObject.firstName} ${aliInfoObject.lastName} and his age: ${aliInfoObject.age} and he lives in: ${aliInfoObject.city} in: ${aliInfoObject.country}`;
let displayNouraInfo = `${nouraInfoObject.firstName} ${nouraInfoObject.lastName} and his age: ${nouraInfoObject.age} and he lives in: ${nouraInfoObject.city} in: ${nouraInfoObject.country}`;

// console.log(displayKaramInfo);
// console.log('===========================');
// console.log(displayAliInfo);
// console.log('===========================');
// console.log(displayNouraInfo);




let students = [
    'ahmed', // 0
    'mohammed',// 1
    'ali1',// 2
    'ali2',// 3
    'ali3',// 4
    'ali4',// 5
    'ali5',// 6
    'ali6',// 7
    'ali7',// 8
];

let text = '';

for(let index = 0;  index < students.length; index++) {

    text = text + ' ' + students[index];


    console.log(index, students[index])
}
console.log(text)
