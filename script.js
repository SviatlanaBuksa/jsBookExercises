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
