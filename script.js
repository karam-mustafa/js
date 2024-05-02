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
  "ali0", // 0
  "ali1", // 1
  "ali2", // 2
  "ali3", // 3
  "ali4", // 4
  "ali5", // 5
  "ali6", // 6
  "ali7", // 7
  "ali8", // 8
  "ali9", // 9
];

let text = "";

// for loop
// for (let index = 0; index < students.length; index++) {
// text = text + " " + students[index];
// document.write(`${students[index]} \n`);
// }

// forEach

// while
// let index = 0;
// while (index < students.length) {
//   document.write(`${students[index]} \n`);
//   index++;
// }

// function printArrayValues(ahmed, ali) {

//   students.forEach(function (item) {
//     console.log(item);
//   });

//   console.log(ahmed + ali);
// }

// printArrayValues(30, 20);

// let programmingLanguages = [
//   'C++',
//   'C',
//   'JS',
//   'PHP',
//   'JAVA',
// ];

// function printLanguages(lang) {
//   // create the element
//   let createdElement = document.createElement('div')
//   // give the element new text
//   createdElement.innerText = `This is: ${lang}`;
//   // select the body
//   let body = document.querySelector('body');
//   // give the body a new child
//   body.appendChild(createdElement)
// }

// programmingLanguages.forEach((item) => {

//   // for each item like C++, C, Js ..etc
//   // run this function
//   printLanguages(item)
// })

// arrow function
// const print = () => {
//   console.log(1);
// }

// print()

// const tr = document.createElement('tr');
// const th = document.createElement('th');
// th.innerText = '3';
// const td1 = document.createElement('td');
// td1.innerHTML = 'karam';
// const td2 = document.createElement('td');
// td2.innerHTML = 'mustafa';
// const td3 = document.createElement('td');
// td3.innerHTML = 'karam';

// tr.appendChild(th)
// tr.appendChild(td1)
// tr.appendChild(td2)
// tr.appendChild(td3)

const addRowToTable = (name, last, handle, elementIndex) => {
  const tableBody = document.querySelector(".table tbody");
  tableBody.insertAdjacentHTML(
    "beforeend",
    `
          <tr>
              <th scope="row">${elementIndex}</th>
              <td>${name}</td>
              <td>${last}</td>
              <td>${handle}</td>
              <td>      
              <button onclick="deleteRow(event)" class="btn btn-danger delete-button-${elementIndex}">Delete row</button>
              </td>
          </tr>
  `
  );
};


let elementIndex = 0;

const newRowButton = document.querySelector(".add-new-button");
// option1
newRowButton.addEventListener("click", () => {
  
  // get the input values
  const nameInput = document.querySelector(".name");
  const lastInput = document.querySelector(".last");
  const handleInput = document.querySelector(".handle");
  
  // add the new row
  addRowToTable(nameInput.value, lastInput.value, handleInput.value, elementIndex);

  // option2
  // newRowButton.addEventListener("click", addRowToTable);

  // get the delete button
  const deleteButton = document.querySelector(`.delete-button-${elementIndex}`);

  // add delete button on user click
  deleteButton.addEventListener("click", (event) => {
    event.target.parentElement.parentElement.remove();
  });

  elementIndex += 1;


  nameInput.value = '';
  lastInput.value = '';
  handleInput.value = '';

});

const deleteRow = (event) => {
  event.target.parentElement.parentElement.remove();
};
