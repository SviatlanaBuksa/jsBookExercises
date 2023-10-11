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

//GARBAGE COLLECTION

/* function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

console.log(family); */

//OBJECT METHODS, 'THIS'

/* let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(this.name); // leads to an error
  },
};

let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); */

/* function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John
 */

/* let calculator = {
  read() {
    this.a = +prompt("a?", "5");
    this.b = +prompt("b?", "5");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */

/* let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); */

//CONSTUCTOR, OPERATOR 'NEW'
/* let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true */

/* function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", "5");
    this.b = +prompt("b?", "5");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul()); */

/* function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("value?", "10");
  };
}

let accumulator = new Accumulator(1); // initial value 1
console.log(accumulator);
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values */

//OPTIONAL CHANING ?.

//SYMBOL TYPE

/* The optional chaining ?. syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined. */

//NUMBERS

/* function sumUp() {
  let a = +prompt("a", "10");
  let b = +prompt("b", "2");
  let sum = a + b;

  alert(sum);
}

sumUp(); */
//alert((6.35).toFixed(1));

//alert(Math.round(6.35 * 10) / 10);

/* function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Read: ${readNumber()}`); */

/* let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i);
} */
/* 
function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 5)); */

/* function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

console.log(randomInteger(5, 9)); */

//STRINGS
/* 
function ucFirst(str) {
  if (!str) return str;

  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

alert(ucFirst("john")); */

/* function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("viagra") || str.includes("xxx")) {
    return true;
  }
  return false;
}

alert(checkSpam("innocent rabbit")); */

/* function truncate(str, maxlength) {
  return str.length > maxlength ? str.substr(0, maxlength - 1) + "..." : str;
}

alert(truncate("What I'd like to tell on this topic is:", 20)); */

/* function extractCurrencyValue(str) {
  return +str.slice(1);
}
alert(extractCurrencyValue("$120") === 120); */

//ARRAYS

/* let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles[Math.floor(styles.length - 1 / 2)] = "Clasics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles); */

/* function sumInput() {
  let inputs = [];
  let input;

  do {
    input = prompt("number?", "10");
    inputs.push(input);
  } while (isFinite(input) && input !== "" && input !== null);

  inputs.pop();

  let sum = 0;
  for (let input of inputs) {
    sum = sum + +input;
  }

  return sum;
} */

//A maximal subarray
/* function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
} */

//Array methods

//Translate border-left-width to borderLeftWidth
/* function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

alert(camelize("-webkit-transition")); */

//Filter range
/* let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

console.log(filtered);
console.log(arr); */

//Filter range "in place"
/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1] */

//Sort in decreasing order

/* let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
console.log(arr); */

//Copy and sort array

/* let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr); */

//Create an extendable calculator

/* let calc = new Calculator();

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    arr = str.split(" ");
    a = +arr[0];
    op = arr[1];
    b = +arr[2];

    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8 */

//Map to names

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names); */

// MAP TO OBJECTS

/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

 let usersMapped = users.map(function (item) {
  return {
    fullName: item.name + " " + item.surname,
    id: item.id,
  };
}); 
let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith */

// SORT USERS BY AGE

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

function sortByAge(users) {
  return users.sort((user, nextUser) => user.age - nextUser.age);
}

console.log(sortByAge(arr));

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name); */

//Shuffle an array
//Fisher-Yates algorithm

/* let arr = [1, 2, 3];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffle(arr)); */

// GET AVERAGE AGE
/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary]; */
/* function getAverageAge(users) {
  let sum = 0;
  users.forEach((user) => {
    sum += user.age;
  });
  return sum / users.length;
} */

/* function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

console.log(getAverageAge(arr)); */

//FILTER UNIQUE ARRAY MEMBERS
/* let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

//console.log(strings);

console.log(unique(strings)); */

// CREATE KEYED OBJECT FROM ARRAY

/* let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(users) {
  return users.reduce(function (obj, current) {
    obj[current.id] = current;
    return obj;
  }, {});
}

let usersById = groupById(users);
console.log(usersById); */

//ITERABLES
/* let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

 for (let num of range) {
  console.log(num);
} 

 for (let char of "test") {
  console.log(char);
} 

 let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike);
console.log(arr);
console.log(arr.pop());  */

//MAP AND SET
//Filter unique array members

/* let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(values));
 */

//Filter anagrams

/* let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();

  for(let word of arr){
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return Array.from(map.values());
}

aclean(arr); */

//Iterable keys

/* let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more"); */

// WEAKMAP AND WEAKSET

//Store "unread" flags

/*let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

alert(`Read message 0:` + readMessages.has(messages[0]));

messages.shift(); */

//OBJECTS.KEYS, VALUES, ENTRIES

//Sum the properties

/* let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  /*  let result = 0;
  for (let value of Object.values(salaries)) {
    result += value;
  }
  return result; 
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

alert(sumSalaries(salaries)); */

//Count properties

/* function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

alert(count(user));
 */

//DESTRUCTURING ASSIGNMENT

/* let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;
alert(name); // John
alert(age); // 30
alert(isAdmin); // false */

//The maximal salary
/* let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let result = 0;
  let name = null;
  for (const [key, value] of Object.entries(salaries)) {
    if (value > result) {
      result = value;
      name = key;
    }
  }
  return name;
} */

//DATE AND TIME

//Create a date

/* let date = new Date(2012, 1, 20, 3, 12);
alert(date); */

//Show a weekday
/* let date = new Date(2012, 0, 3);
let day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
function getWeekDay(date) {
  return day[date.getDay()];
}
alert(getWeekDay(date)); */

//European weekday

/* let date = new Date(2012, 0, 3);

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;
}

alert(getLocalDay(date)); */

//Which day of month was many days ago?
/* let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
  let copyDate = new Date(date);

  copyDate.setDate(date.getDate() - days);
  return copyDate.getDate();
}

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365)); */

//Last day of month?
/* function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1)); */

//How many seconds have passed today?

/* function getSecondsToday() {
  let date = new Date();
  return 3600 * date.getHours() + 60 * date.getMinutes() + date.getSeconds();
}
console.log(getSecondsToday()); */

//How many seconds till tomorrow?
/* function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tomorrow - now) / 1000);
}
console.log(getSecondsToTomorrow()); */

//Format the relative date

/* function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) {
    return "right now";
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + "sec. ago";
  }

  let min = Math.floor(diff / 60000);

  if (min < 60) {
    return min + "min. ago";
  }

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map(component.slice(-2));

  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}
formatDate(new Date(new Date() - 86400 * 1000)); */

//JSON METHODS, TOJSON

//Turn the object into JSON and back
/* let user = {
  name: "John Smith",
  age: 35,
};

let json = JSON.stringify(user);

console.log(json);

let fromJson = JSON.parse(json);
console.log(fromJson); */

//Exclude backreferences

/* let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) || key == "self" ? undefined : value;
  })
); */

//RECURSION

//Sum all numbers till the given one
//using a for loop
/* function sumTo(n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
}

console.log(sumTo(100)); */

//using recursion

/* function sumTo(n) {
  if (n == 0) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(100)); */

// arithmetic progression

/* function sumTo(n) {
  return (n * (1 + n)) / 2;
}

console.log(sumTo(4)); */

// Calculate factorial

/* function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

alert(factorial(3)); */

//Fibonacci numbers

/* function fib(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fib(7)); */

//Output a single-linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

/* function printList(list) {
  let tmp = list;
  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}
printList(list);  */

/* function printList(list) {
  tmp = list;
  alert(tmp.value);
  if (tmp.next) {
    printList(tmp.next);
  }
}

printList(list); */

/* function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}

printReverseList(list); */

/* function printReverseList(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}
printReverseList(list); */

//REST PARAMETERS AND SPREAD SYNTAX

//VARIABLE SCOPE, CLOSURE

//sum with closures

/* function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); */

//Filter through function

//filter inBetween
//let arr = [1, 2, 3, 4, 5, 6, 7];

/* function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
alert(arr.filter(inBetween(3, 6))); */

//filter inArray

/* function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
alert(arr.filter(inArray([1, 2, 10]))); */

//Sort by field

/* let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

alert(users.sort(byField("name"))); */

//[object Object],[object Object],[object Object]

//Army of functions

/* function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // create a shooter function,
      alert(j); // that should show its number
    };
    shooters.push(shooter);
    // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on. */

//THE OLD 'VAR'
/* var has no block scope
var tolerates redeclaration and reasignment
var can be declared below their use */

//GLOBAL OBJECT
/* 
-the global object holds variables and functions that should be available anywhere;
-universal name - globalThis(window if browser);
- if declared with var - property of the global object;
-access directly as window.x;
*/
