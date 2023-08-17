//JS FUNDAMENTALS

//HELLO,WORLD!
//alert("I’m JavaScript!");

//VARIABLES
/* let admin;
let name;

name = "John";
admin = name; */

/* let ourPlanetName;
let currentUserName;
 */

//DATA TYPES

//Interaction: alert, prompt, confirm

/* let currentUserName = prompt("What's your name");
alert(`Your name is ${currentUserName}`); */

//TYPE CONVERSIONS

//BASIC OPERATORS, MATH

/* let a = 1,
  b = 1;

let c = ++a; // ? 2 -c, a - 2
let d = b++; // ? 1 -d, b- 2

let a = 2;

let x = 1 + (a *= 2); // a=4, x=5

"" + 1 + 0; // '10'
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; // '9px'
"$" + 4 + 5; // '$45'
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // ' -9 5'
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2 

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b);*/

//COMPARISONS

/* 5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // !!!true
undefined == null // true
undefined === null // false
null == "\n0\n" //false
null === +"\n0\n" //false */

//CONDITIONAL BRANCHING

/* let value = prompt("What is the “official” name of JavaScript?", "");

if (value == "ECMAScript") {
  alert("Right!");
} else {
  alert(`You don't know? “ECMAScript”!`);
} */
/* 
let value = prompt("Enter a number", "10");

if (value > 0) {
  alert("1");
} else if (value < 0) {
  alert("-1");
} else {
  alert("0");
} */

//let result = a + b < 4 ? "Below" : "Over";

/* let message;

if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
 */

//LOGICAL OPERATORS

/* if (-1 || 0) alert( 'first' ); y -1
if (-1 && 0) alert( 'second' ); n 0
if (null || -1 && 1) alert( 'third' );y 1 */

/* let login = prompt("Who's there?", "");

if (login === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (!pass) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (!login) {
  alert("Canceled");
} else {
  alert("I don't know you");
} */

//Nullish coalescing operator '??'

//LOOPS: WHILE AND FOR

/* let i = 0;
while (++i < 5) alert(i); // 1 2 3 4

let i = 0;
while (i++ < 5) alert(i); // 1 2 3 4 5

for (let i = 0; i < 5; i++) alert(i); // 0 1 2 3 4
for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4 */
//The value returned by the increment is not used here, so there’s no difference between i++ and ++i.
/* for (let i = 2; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
} */

/* let i = 0;
do {
  alert(`number ${i}`);
} while (++i < 3);

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
} */

/* while (true) {
  let i = +prompt("enter a number greater than 100", "");
  if (i >= 100 || !i) break;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num); */

/* let n = +prompt("enter an integer number", "10");

outer: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue outer;
  }
  console.log(i);
} */

//THE SWITCH STATEMENT

/* let browser = prompt("What is your browser?", "Edge");

if (browser === "Edge") {
  alert(`You've got the Edge!`);
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
} */

/* let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
} */

//FUNCTIONS

/* function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
} */

/* function min(a, b) {
  return a > b ? b : a;
}

min(2, 5); */

/* let x = +prompt("Enter the number", "3");
let n = +prompt("Enter the number", "2");
function pow(x, n) {
  return n >= 1
    ? x ** n
    : alert(`Power ${n} is not supported, use a positive integer`);
}
console.log(pow(x, n)); */

//ARROW FUNCTIONS, THE BASICS

/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do u agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
); */

//POLYFILLS AND TRANSPILERS

// OBJECTS

/* Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */

/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name; */

/* let user = {};

function isEmpty(object) {
  for (let prop in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(user)); */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumUp(obj) {
  let sum = 0;
  for (let prop in obj) {
    sum += obj[prop];
  }
  return sum;
}

console.log(sumUp(salaries)); */

/* let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu); */

//------Object references and copying------

// 1.Object reference
/* let user = { name: "Lana", age: "27" };
let admin = user; //2 references - 1 object;

admin.name = "Sveta"; // changing user using admin;
//alert(user.name); //'Sveta'

admin == user; //true
admin === user; // true */

//2.Shallow copy
//2.1 for in cycle
/* let clone = {};

for (let prop in user) {
  clone[prop] = user[prop];
}

clone.name = "Kate";
console.log(clone.user); // 'Sveta'; */
//2.2 Object.assign(dest,...sources), merging

/* let user = { name: "Ross" };

let permissions1 = {
  canView: true,
};

let permissions2 = {
  canEdit: true,
};

Object.assign(user, permissions1, permissions2);
console.log(user); */

/* 3. Structured clone

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user); //doesn't work with function property; */
