/* console.log('Hello');
console.log('I like pizza!')

window.alert('This is an alert!')
 */

//This is a comment

/*
    This
*/

/* document.getElementById("myH1").textContent="Hello";
document.getElementById("paragraft1").textContent="I like pizza!"; */

// variable = a container that store a value.
// behave as if it were the value it contain

// 1. declare       let x;
// 2. assignment    x = 100;

// number data (only number)

/* let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your GPA is ${gpa}`) */

// string data (number and letter)

/* let firstName = "Yobel";
let favoriteFood = "Pizza";
let email = "yobel@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`)
console.log(`My favorite food is ${favoriteFood}`)
console.log(`Your email is ${email}`) */

// booleans (true or false)

/* let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);

console.log(`Bro is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`); */
/* 
let fullname = "yobel";
let age = "25";
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `Your are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled ${student}; */

//aritmetic operators = operands (values, variables, etc.)
// operators (+ - * /)
// ex. 11 = x + 5;

//let students = 30;

//students = students +1;
//students = students -1;
//students = students *2;
//students = students /2;
//students = students **2;
//let extarstudents = students %3;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students %= 2; (modulus (sisa dari bilangan yg dibagi))

//students ++;
//students --;

//console.log(students);
//console.log(extrastudents);

/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & deviation & modulo
    4. addition & subtraction
*/

/* let result = 12 % 5 + 8 / 2;

console.log(result); */

// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

/* let username;

username = window.prompt("What's your username?")
*/

/* let username = window.prompt("What's your username?")

console.log(username) */

/* 
let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("username").value;
    document.getElementById("sayhi").textContent = `Hellow ${username}`
    console.log(username);
}
*/

// type conversion = change the datatype of value to another 
// (string, number, booleans)

/* let age = window.prompt ("how old are you?");
age = Number(age);

age +=1;

console.log(age, typeof age);
*/

//Learn type of conversion

/* 
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); 
*/

// const = a variable that can't be changed

/* const PI = 3.14159;
let radius;
let circumference; */ // (keliling lingkaran)

//radius = window.prompt('Enter the radus of a circle');
//radius = Number(radius);

//console.log(circumference);

/*  document.getElementById("submit").onclick = function(){
    radius = document.getElementById("input").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
} */

//counter program

/* const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");
let count = 0;

increase.onclick = function(){
    count++;
    countLabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
decrease.onclick = function(){
    count--;.
    countLabel.textContent = count;
} */

// MATH = build-in object that provides a collection of properties and methods for mathematical constants and functions

//console.log(Math.PI);
//console.log(Math.E);

//let x = -3.21;
//let y = 2;
//let z = 1;

//z = Math.round(x); // round to the nearest integer
//z = Math.floor(x); // round down to the nearest integer
//z = Math.ceil(x); // round up to the nearest integer
//z = Math.trunc(x); // remove the decimal part
//z = Math.pow(x,y); // x to the power of y
//z = Math.pow(y,x); // y to the power of x
//z = Math.sqrt(x); // square root of x
//z = Math.log(x); // natural logarithm of x
//z = Math.sin(x); // sine of x (x in radians)
//z = Math.cos(x); // cosine of x (x in radians)
//z = Math.tan(x); // tangent of x (x in radians)
//z = Math.abs(x); // absolute value of x
//z = Math.sign(x); // sign of x (1, -1, or 0)
//let max = Math.max(x,y,z);
//let min = Math.min(x,y,z);

//console.log(z);
//console.log(max);
//console.log(min);

// RANDOM NUMBER GENERATOR

/* let random = Math.floor(Math.random() * 6) + 1; // random number between 1 and 100 (not include 1)

console.log(random);

const min = 50;
const max = 100;

randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // random number between min and max (include min and max (50 and 100))

console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const myLabe2 = document.getElementById("myLabe2");
const myLabe3 = document.getElementById("myLabe3");
const mindice = 1;
const maxdice = 6;
let randomDice1;
let randomDice2;
let randomDice3;

myButton.onclick = function(){
    randomDice1 = Math.floor(Math.random() * (maxdice - mindice + 1)) + mindice;
    randomDice2 = Math.floor(Math.random() * (maxdice - mindice + 1)) + mindice;
    randomDice3 = Math.floor(Math.random() * (maxdice - mindice + 1)) + mindice;
    myLabel1.textContent = randomDice1;
    myLabel2.textContent = randomDice2;
    myLabel3.textContent = randomDice3;
} */

// IF STATEMENTS = if a condition is true, then run code
// if not, then do something else

/* let age = 23;

if(age >= 18){
    console.log("You are an adult man and old enough to looking for a job");
}
else{
    console.log("or you still a child");
}

let time = 14;

if(time < 12){
    console.log("Good morning");
}
else if(time < 18){
    console.log("Good afternoon");
}

let isStudent = false;

if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are not a student");
}

let ageLicense = 7;
let hasLicense = true;

if(ageLicense >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("Up");
    }
    else{
        console.log("Down");
    }
}
else{
    console.log("You are not old enough to drive");
}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function(){

    let agez = myText.value;
    agez = Number(agez);

    if(agez >= 100){
        console.log("Almost Died");
        resultElement.textContent = "Almost Died";
    }
    else if(agez == 0){
        
        console.log("You are still zigot in your mother's womb");
        resultElement.textContent = "You are still zigot in your mother's womb";
    }
    else if(!(agez < 18)){
        console.log("You are Old");
        resultElement.textContent = "You are Old";
    }
    else if(agez < 0){
        console.log("Died");
        resultElement.textContent = "Died";
    }
    else{
        console.log("You are Young");
        resultElement.textContent = "You are Young";
    }

} */

// .checked = property that determines the checked state of an 
// HTML checkbox or radio button element 

/* const myCheckbox = document.getElementById("myCheckbox");
const visaButton = document.getElementById("visaButton");
const mastercardButton = document.getElementById("mastercardButton");
const paypalButton = document.getElementById("paypalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    
    if(myCheckbox.checked){
        subResult.textContent = "Subscribed";
    }
    else{
        subResult.textContent = "Not Subscribed";
    }

    if(visaButton.checked){
        paymentResult.textContent = "You selected Visa";
    }
    else if(mastercardButton.checked){
        paymentResult.textContent = "You selected Mastercard";
    }
    else if(paypalButton.checked){
        paymentResult.textContent = "You selected Paypal";
    }
    else{
        paymentResult.textContent = "You didn't select a payment method";
    }
} */

// Ternary Operator = a shortcut for an if/else statement 
// to helps to assign a varibale based on a condition
// condition ? value1 (if true) : value2 (if false)

/* let age = 32;
let message = age >= 18 ? ("You are an adult") : ("You are a child");
console.log(message);

let agez = 13;
let messagez;
if(agez >= 18){
    messagez = console.log ("You are an adult");
}
else{
    messagez = console.log("You are a child");
}

let time = 12;
let greeting = time < 12 ? "Good morning" : time < 18 ? "Good afternoon" : "Good evening";
console.log(greeting);

let isStudent = false;
let studentMessage = isStudent ? "You are a student" : "You are not a student";
console.log(studentMessage);

let purchaseAmount = 125;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * discount / 100}`); */

// SWITCH = can be an efficient replacement to many size if statements

/* let day = "tawon";

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a valid day`);
}

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(`Your letter grade is ${letterGrade}`); */

// string methods = allow you to manipulate and work with text (strings)

/* let userName= "Yobel Codot";

//userNamer.charAt(1); // get character at specific index

console.log(userName.charAt(1));

userName.lastIndexOf("o"); // get the index of a specific character (first occurence)
console.log(userName.lastIndexOf("o"));

console.log(userName.length);

username = userName.trim(); // remove whitespace from both ends of a string
console.log(userName.trim());

userName = userName.toUpperCase(); // convert a string to uppercase letters
console.log(userName.toUpperCase());

userName = userName.toLowerCase(); // convert a string to lowercase letters
console.log(userName.toLowerCase());

//userName = userName.repeat(3); // repeat a string a specified number of times
console.log(userName.repeat(3));

console.log(userName);

let result = userName.startsWith(" "); // check if a string starts with a specific substring

//console.log(result);

if (result){
    console.log("Your username starts with a space ' '");
}
else{
    console.log(userName);
}

result = userName.endsWith(" "); // check if a string ends with a specific substring

if (result){
    console.log("Your username end with a space ' '");
}
else{
    console.log(userName);
}

result = userName.includes(" "); // check if a string contains a specific substring

if (result){
    console.log("Your username cant included contains a space ' '");
}
else{
    console.log(userName);
}

let phoneNumber = "081-234-567-890";

phoneNumber = phoneNumber.replaceAll("-",""); // replace all occurences of a substring with another substring

console.log(phoneNumber);

phoneNumbers = phoneNumber.padStart(15,"+62");

console.log(phoneNumbers);

phoneNumberz = phoneNumber.padEnd(16,"+62");

console.log(phoneNumberz); */

// STING SLICING = create a substring from a portion of another string

// string.slicee (start, end) = slice from start index to end index (not include end index)

//const fullName = "Yobel Codot";

//let firstName = fullName.slice(0, fullName.indexOf(" "));
//let lastName = fullName.slice(fullName.indexOf(" ") + 1);

//let firstName = fullName.slice(0,5);
//let lastName = fullName.slice(6);

//let firstChar = fullName.slice(0,1); 
//let lastChar = fullName.slice(-1);

//console.log(firstName);
//console.log(lastName);
//console.log(firstChar);
//console.log(lastChar);

//const email = "gwntod@gmail.com"
//let username = email.slice(0, email.indexOf("@"));
//let extension = email.slice(email.indexOf("@") + 1);

//console.log(username);
//console.log(extension);

// METHOD CHANING = calling one method after another in one continuous line of code

// ----- NO METHOD CHAINING -----

//let userName = window.prompt("Enter your username");

//userName = userName.trim();
//let letter = userName.charAt(0);
//letter = letter.toUpperCase();

//let extraChar = userName.slice(1);
//extraChar = extraChar.toLowerCase();

//userName = letter + extraChar;

//console.log(userName);

// ----- METHOD CHAINING -----

//userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

//console.log(userName);

// LOGICAL OPERATORS = used to combine or manipulate boolean values (true or false)

// AND (&&) = both conditions must be true
// OR (||) = one of the conditions must be true
// NOT (!) = reverse the value of a boolean

/* const temp = 35; 

if(temp <= 0 && temp <= 10){
    console.log("The weather is cold");
}
else if(temp > 10 || temp <= 30){
    console.log("The weather is anget");
}
else{
    console.log("The weather is PANAS COK");
}

const isSunny = true;

if(!isSunny){
    console.log("The weather is CLOUDY");
}
else{
    console.log("it is sunny");
}
*/

// ----- STRICT EQUALITY -----

//   = assignment operator
//  == comparison operator (compare if value are equal)
// === strict equality operator (compare if value & datatype are equal)
//  != loose inequality operator (compare if value are equal)
// !== strict inequality operator (compare if value & datatype are equal)

/* const PI = 3.14;

if(PI == "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
}

if(PI === 3.14){
    console.log("That is PI");
}
else{
    console.log("That is NOT PI");
}

if(PI != "3.14"){
    console.log("That NOT PI");
}
else{
    console.log("That is PI");
}

if(PI !== 3.14){
    console.log("That NOT PI");
}
else{
    console.log("That is PI");
} */

// ----- WHILE LOOPS -----
// while loop = repeat some code WHILE a condition is true

//let username = "";

//while(username === ""){
//    console.log("You didn't enter your username");
//}

//console.log(`Hello ${username}`);

// ----- FOR LOOPS -----
// for loop = repeat some code a certain amount of times

//do{
//    username = window.prompt("Enter your username");
//}while(username === "" || username === null)

//console.log(`Hello ${username}`);

// ----- undefined username & standart while loop -----

//let usernamez;

//while(usernamez === "" || usernamez === null){
//    usernamez = window.prompt("Enter your username");
//}

//console.log(`Hello ${usernamez}`);

// ----- FOR LOOPS -----

/* let loggedIn = false;
let username;
let password;

do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "YobelCodot" && password === "12345"){
        loggedIn = true;
        console.log("You are logged in");
    }
    else{
        console.log("Incorrect username or password");
    }
}while(!loggedIn); */

// for loop = repeat some code a LIMITED amount of times

//for(let i = 10; i > 0; i-=2){
//    console.log(i);
//}

//console.log("Happy New Year!");

/* for(let i = 1; i <= 20; i++){

    if(i == 13){
        console.log("Unlucky 13!");
        continue;
    }
    else{
        console.log(i);
    }
} */

// ----- NUMBER GUESSING GAME -----
/* 
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Enter a guess between ${minNum} and ${maxNum} : (or type 'exit' to quit)`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Game exited");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Try Again");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! Try again.");
        }
        else if(guess > answer){
            window.alert("Too high! Try again.");
        }
        else{
            window.alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running = false;
        }
    }
}
*/

// FUNCTION = a section of reusable code.
// Declare code once, use it whenever you want.
// Call the function to execute the code.

/* function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("Yobel", 25);
happyBirthday("Codot", 13);
happyBirthday("Gwentod", 7); 
*/

/* function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(5, 10);
console.log(answer);

//or

function add(x, y){
    return x + y;
}

console.log(add(5, 10));

// subtract function

function subtract(x, y){
    return x - y;
}

console.log(subtract(5, 10));

function multiply(x, y){
    return x * y;
}

console.log(multiply(5, 10));

function divide(x, y){
    return x / y;
}

console.log(divide(5, 10));

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(4));

function isOdd(number){
    return number % 2 === 0 ? false : true;
}

console.log(isOdd(6));

function isValidEmail(email){

    /* if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }

    //or

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("YobelCodot@gmail.com")); 
*/

// VARIABLE SCOPE = where a variable is recognized and accessible (local vs gloobal)

// ----- LOCAL SCOPE -----

/* function1();

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

// ----- GLOBAL SCOPE -----
// if there is local first than a global

let x = 3; // global scope

function3();

function function3(){
    //let x = 1; // local scope
    console.log(x);
}

function function4(){
    //let x = 2; // local scope
    console.log(x);
} */

// ----- TEMPERATURE CONVERSION PROGRAM -----

/* const TextBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

function convert(){

    if(toFahrenheit.checked){
        //result.textContent = "You selected to Fahrenheit";
        temp = Number(TextBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "℉";
    }
    else if(toCelcius.checked){
        //result.textContent = "You selected to Celcius";
        temp = Number(TextBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "℉";
    }
    else{
        result.textContent = "Select a unit";
    }

} */

// ----- ARRAY -----

// ARRAY = a variable like structure that can hold more than 1 value

/* let fruits = ["apple","orange","banana"]; // this is array

fruits[3] = "coconut"; // this add element in arrray

//fruits.push("mango");     // add more element (last paragraft)
//fruits.pop();             // remove last element
//fruits. unshift("mango"); // add element in the begining
//fruits.shift();           // remove element in the begining

//console.log(fruits);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);
//console.log(fruits[4]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");
let index2 = fruits.indexOf("grape"); // if there's no the element it would be -1

console.log(index);
console.log(index2);
console.log(numOfFruits);

let fruit = ["apple","orange","banana","coconut"];

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

for(let i = fruit.length -1 ; i >= 0 ; i--){
    console.log(fruit[i]);
}

let foods = ["meatball","pizza","instan noodles","taco"]

foods.sort().reverse(); // sort method

for(let food of foods){
    console.log(food);
} */

// ----- SPREAD OPERATOR -----
// allows an iterable such as an array or string to be expended into separate element (unpack the element)

/* let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // spread operator
let minimum = Math.min(...numbers)

console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = "Yobel Codot";
let letter = [...username].join(".");

console.log(letter);

let fruits = ["apple","orange","banana"];
let vegetables = ["carrot","celery","potatoes"]
let both = [...fruits, ...vegetables, "eggs", "milks"];

console.log(both); */

// ----- REST PARAMETERS -----
// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread = expands an array into separate elements
// rest = bundles separate elements into an array

// ----- rest combined with spread -----

/* function restSPREAD(){

function openFridge(...foods){
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

}

// ----- REST -----

function REST(){
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

const foods = getFood(food1,food2,food3,food4,food5)

console.log(foods);
}

// Run them
restSPREAD();
REST(); // from bundle into array

// ----- sum & average -----

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;

}

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;

}
 
const total = sum (1,2,3,4);
const average = getAverage (2,5,6,7);

console.log(`Your total is ${total}`);
console.log(`Your total is ${average}`);

// ----- ANOTHER -----

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III")

console.log(fullName); */

// ----- DIRE ROLLER PROGRAM -----

/* function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        //console.log(value);
        values.push(value);
        images.push(`<img src="images/dice_images/${value}.png" alt="Dice ${value}">`);
    }
    //console.log(values)

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
} */

// RANDOM PASSWORD GENERATORS

/* function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){  
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    console.log(allowedChars);
    
    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i ++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowerCase, 
                                  includeUpperCase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`Generate password: ${password}`);
*/

// ----- CALL BACK -----

// callback = a function that is passed as an argument to another function.

// used to handle asynchronous operation;
// 1. Reading a file
// 2. Network requests
// 3. Interacting with database

// "Hey, when you're done, call this next."

/* hellos();
goodbyes();

// delayed message
function hellos(){
    setTimeout(function(){
        console.log("Hello!");
    }, 3000);
}

function goodbyes(){
    console.log("Goodbye!");
}


hello(wait);

//call back
function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
} */

// ----- forEach -----

// forEach() = method used to iterate over the elements 
// of an array and apply a specified function (callback) to each element

// array.forEach(callback)

/* let number = [1, 2, 3, 4, 5];

number.forEach(display);

function display(element){
    console.log(element);
} */

// array.forEach(callback) with double argument

/* let numbers = [1, 2, 3, 4, 5];

//numbers.forEach(double);
//numbers.forEach(triple);
//numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(display);

function double(elements, index, array){
    array[index] = elements * 2;
}

function triple(elements, index, array){
    array[index] = elements * 3;
}

function square(elements, index, array){
    array[index] = Math.pow(elements, 2);
}

function square(elements, index, array){
    array[index] = Math.pow(elements, 2);
}

function cube(elements, index, array){
    array[index] = Math.pow(elements, 3);
}

function display(elements){
    console.log(elements);
} */

/* let fruits = ["apple", "orange", "banana", "coconut"];

//fruits.forEach(upperCase);
//fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(dispay);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function dispay(element){
    console.log(element);
} */

// ----- .map -----

//.map() = accepts a callback and applies that function to each element of an array, 
// then return to new array

// ----- numbers call back useing .map -----

/* const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

// ----- string call back useing .map -----

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

// ----- dates call back useing .map -----

const dates = ["2024-1-10", "2025-2-20","2025-3-30"];
const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// ----- .FILTER -----

// .filter() = creates a new array by filtering out elements

let numberz = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numberz.filter(isEven);
let oddNums = numberz.filter(isOdd);

console.log(evenNums);  // genap
console.log(oddNums);   // ganjil

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

// ----- another example -----

const age = [16, 17, 18, 18 , 19, 20, 60];
const adults = age.filter(isAdult);
const children = age.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element){
    return element >=18;
}

function isChild(element){
    return element < 18;
}

// ----- another example -----

const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];
const ShortWord = words.filter(getShortWord);
const LongWord = words.filter(getSLongWord);

console.log(ShortWord);
console.log(LongWord);

function getShortWord(element){
    return element.length <= 6;
}

function getSLongWord(element){
    return element.length > 6;
} */

// ----- .REDUCE -----

// .reduce() = reduce the elements of an array to a single value

/* const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`${total.toFixed(2)}`)

// loop for variable from array entity and submited into the function

function sum(accumulator//(previous element), element//(next element)){
    return (accumulator//(previous element), element//(next element);
}

// ----- another example -----

const grade = [75, 40, 90, 80, 65, 95];

const maximum = grade.reduce(getMax);
const manimum = grade.reduce(getMin);

console.log(`${maximum}`)
console.log(`${manimum}`)

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
} */

// ----- FUNCTION DECLARATION -----

// function declaration = define a reusable block of code that performs specific task

// this is declaration function

/* function hello(){
    console.log("Hello");
} */

// ----- FUNCTION EXPRESSION -----

// function expression = a way to define functions as values or variables

// this is expression function (no callback so its run first and linear)

/* setTimeout(function(){
    console.log("Hello")
}, 3000);

// ----- another example -----

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total); */

// benefit using expression this doesnt need to thinks the function name 
// and we re not polluting the global name with function name

// ----- ARROW FUNCTION -----

// arrow function = a concise way to write function expressions good for simple functions 
// that you use only once (parameters) => some code

// ----- arrow function -----

/* const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};

hello("Yobel Codot", 23); */

// ----- expression function example -----

/* setTimeout(function(){
    console.log("Hello")
}, 3000); */

// ----- another arrow example -----

/* setTimeout( () => console.log("Hello"), 3000);

// ----- another arrow example -----

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => (element % 2 === 0));
const oddNums = numbers.filter((element) => (element % 2 !== 0));
const total = numbers.reduce((accumulator, element) => (accumulator + element));

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total); */

// ----- OBJECT -----

// OBJECT = a collection of related 
// PROPERTIES (things that object has (firstName, lastname, or age)) 
// and/or 
// METHODS (is a function that belong its object(sayHello, sayBye, as example like what can object 
// do)) can represent real world object (people, product, place)

// object = {key: value, funtion()}

/* const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: "30",
    isEmployed: true,
    sayHello: function(){setTimeout( () => console.log("Hi! I am Spongebob!"), 1000)},
    eat: function(){setTimeout( () => console.log("I am eating a Krabby Patty"), 4000)},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: "42",
    isEmployed: false,
    sayHello: () => setTimeout( () => console.log("Hey, I'm Patrick..."), 2000),
    eat: () => setTimeout( () => console.log("I am eating a roast beef, chicken, and pizza"), 3000),
}

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed); */

// ----- THIS -----

// this = reference to the object where THIS is used (the object depend on the imediate context)
// person.name = this.name

/* const person1 = {
    name: "Spongebob",
    favFood: "Hamburger",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}, 
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

// this. function doesnt work with arrow function

const person2 = {
    name: "Spongebob",
    favFood: "Hamburger",
    sayHello: () => {console.log(`Hi! I am ${this.name}`)}, 
    eat: () => {console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

// globally return this an windows object
console.log(this); */

// ----- CONSTRUCTOR -----

// costructor = special method for definine the properties and methods of objects

/* function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", "2024", "red");
const car2 = new Car("Chevrolet", "Camaro", "2025", "orange");
const car3 = new Car("Dodge", "Charger", "2026", "silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive(); */

// ----- CLASS -----

// class = (ES6 feature) provide a more structured and cleaner way to 
// work with object compared to traditional constructor function 
// ex. static keyword, encapsilation, inheritance

/* class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underware", 100.00);

product1.displayProduct(); //envoke
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);

console.log(`Total price (with tax): $${total.toFixed(2)}`); */

// ----- STATIC -----

// static = keyword that defines properties or methods that belong 
// to class itself rathen than the objects created 
// from that class (class owns anything static, not the objects)

/* class mathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius **2 ;
    }
}

console.log(mathUtil.PI);
console.log(mathUtil.getDiameter(10));
console.log(mathUtil.getCircumference(10));
console.log(mathUtil.getArea(10));

// ----- Another Example -----

class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++; //aditional command u can add more
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Squidward");

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

console.log(User.userCount);

User.getUserCount(); // class own anything static */

// ----- INHERITANCE -----

// inheritance = allow a new class to inherit properties and methods 
// from an existing class (parent -> child)
// helps with code reusability

/* class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
    console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
    console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive)
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive)
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk.alive)
hawk.eat();
hawk.sleep();
hawk.fly(); */

// ----- SUPER KEY WORD -----

// super = keyword is used in classes to call tht constructor or
// access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

/* class Animals{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}
class Rabbit extends Animals{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animals{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animals{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 5, 30);
const hawk = new Hawk("hawk", 20, 100);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly(); */

// ----- GETTER & SETTER -----

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

/* class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    // ⬇️⬇️⬇️ THIS IS SETTERS ⬇️⬇️⬇️ 

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive numbers");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive numbers");
        }
    }

    // ⬇️⬇️⬇️ THIS IS GETTERS ⬇️⬇️⬇️ 
    
    get width(){
        return `${this._width.toFixed(1)} cm`;
    }

    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }
}

const rectangle = new Rectangle (3, 4);

// updated value example
//rectangle.width = 5;
//rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ----- another example -----

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("First name must be a non-empty number");
        }
    }

    get firstName(){
        return `${this._firstName}`;
    }

    get lastName(){
        return `${this._lastName}`;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return `${this._age}`;
    }
}

const person = new Person("Songebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age); */


// ----- DESTRUCTURING -----

// destructuring = extract values from arrays and objects,
// then assign them to variables in a convenient way
// [] = to perform array destructuring
// () = to perform object destructuring
// 5 examples

// ----- EXAMPLE 1 -----
// SWAP THE VALUE OF TWO VARIABLES

/* let a = 1;
let b = 2;

[a, b] = [b, a]; // swap array to another array 

console.log(a);
console.log(b);

// ----- EXAMPLE 2 -----
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];  

[colors[0], colors[4]] = [colors[4], colors[0]] // swap red and white

console.log(colors);

// ----- EXAMPLE 3 -----
// ASSIGN ARRAY ELEMENT TO VARIABLES

const colour = ["red", "green", "blue", "black", "white"];  

const [firstColor, secondColor, thirdColor, ...extraColor] = colour; // swap extra variable on array

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);

// ----- EXAMPLE 4 -----
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2= {
    firstName: "Patrick",
    lastName: "Stars",
    age: 40,
}

const {firstName, lastName, age, job = "Unemployed"} = person1; // curly braces for object swap     
const {} = person2; // object variable

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ----- EXAMPLE 5 -----
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson ({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person4= {
    firstName: "Patrick",
    lastName: "Stars",
    age: 40,
}

displayPerson(person4); */

// ----- NESTED OBJECTS -----

// nested object =  objects inside of other objects.
// allows you to represent more complex data structure 
// Child Object is enclosed by a Parent object

// Person{Address{}, Contacctinfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

/* const person = {
    fullName: "Spongebob Squarepants",
    age: "30",
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "142 Conch St.",
        city: "Bikini Bottom",
        country: "International Water"
    }
}

for(const property in person.address){
    console.log(person.address[property]);
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address.street); */

// ----- ANOTHER EXAMPLE -----

/* class Person{
    
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "142 Conch St.", 
                                            "Bikini Bottom", 
                                            "International Sea");

const person2 = new Person("Patrick", 37,  "144 Conch St.", 
                                           "Bikini Bottom", 
                                           "International Sea");

const person3 = new Person("Squidward", 37, "143 Conch St.", 
                                            "Bikini Bottom", 
                                            "International Sea");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person3.name);
console.log(person3.age);
console.log(person3.address); */

// ----- Array of an Object -----

/* const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// ----- to add a new elements -----
// fruits.push({name: "grapes", colour: "purple", calories: 62}); 

// ----- remove last variable -----
// fruits.pop(); 

// ----- to remove elements at certain indicies -----
// fruits.splice(1, 2); 

// ----- forEach methods for loop trough the entire elements -----
// fruits.forEach(fruit => console.log(fruit)); 
// fruits.forEach(fruit => console.log(fruit.name)); 

// ----- map() -----
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColor = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColor);
// console.log(fruitCalories);

// ----- filter() -----
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalories = fruits.filter(fruit => fruit.calories < 100);
const highCalories = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalories);
console.log(highCalories);

// ----- reduce() -----
const maxFruit = fruits.reduce((max, fruit)  => 
                                fruit.calories > max.calories ? 
                                fruit : max);

const minFruit = fruits.reduce((min, fruit)  => 
                                fruit.calories < min.calories ? 
                                fruit : min);

console.log(maxFruit);
console.log(maxFruit.calories);
console.log(minFruit);
console.log(minFruit.calories); */

// console.log(fruits);
// console.log(fruits[0].name);

// ----- SORT() -----

// sort() = method used to sort elements of an array in place.
// sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + number + symbols) as strings

/* let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 8, 6, 3, 2, 4, 5, 9, 7];

fruits.sort();
const numberNormal = numbers.sort((a, b) => a - b);
// const numberReverse = numbers.sort((a, b) => b - a);

console.log(fruits);
console.log(numberNormal);
// console.log(numberReverse);

// ----- new example -----

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); // normal
people.sort((a, b) => b.age - a.age); // reverse
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people); */

// ----- SHUFFLE AN ARRAY -----

// Fisher-Yaters algorithm

/* const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9 , 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
} */

// ----- DATES -----

// Date objects = Objects that contain values that represent dates and time
//                These date objects can be changed and formatted

// Date (year, month, day, hour, minute, second, ms)

/* const date = new Date(2024, 0, 1, 2, 3, 4, 5);
const dates = new Date("2024-01-02T12:00:00Z");

console.log(date);
console.log(dates); */

// ----- another example dates now -----

/* const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay()

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(dayOfWeek); */

// ----- another example for setting the days-----

/* const date = new Date();

const year = date.setFullYear(2024);
const month = date.setMonth(0);
const day = date.setDate(1);
const hour = date.setHours(2);
const minute = date.setMinutes(3);
const second = date.setSeconds(4);
// const dayOfWeek = date.setDay()

console.log(date);

// ----- another example for setting the days (strings) -----

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
} */

// ----- CLOSURE -----

// closure = a function defined inside of another function,
// the inner function has access to the variables
// and scope of the outer function.
// allow for privete variables and state maintenance
// Used frequently in 3S frameworks: React, Vue, Angular.

/* function outer(){ 

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

// ----- another example -----

function createCounter(){

let count = 0;

    function increment(){
        count ++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

// ----- another example -----

function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`)
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`)
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(9);
game.decreaseScore(15);

console.log(`The final score is ${game.getScore()}pts`)
*/

// ----- setTimeout() -----

// setTimeout = function in JavaScript that allows you to schedule
// the execution of a function after amount of time (millisecond)
// times are approximate (varies based on the workload of the JavaScript runtime env.)

// setTimeout(callback, delay);

/* function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

// ----- another example -----

setTimeout(function(){window.alert("Yobel Codot")}, 3000);

// ----- another example -----

setTimeout(() => window.alert("Fuck You!", 3000));

// clearTimeout (timeoutId) = can cancel a timeout before it triggers

const timeoutId = setTimeout(() => window.alert("Dick!", 3000));

clearTimeout(timeoutId); */

// ----- another example -----

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout (timeoutId);
    console.log("CLEARED");
}

// ----- DIGITAL CLOCK -----

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

// ----- STOP WATCH -----

const display= document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime; //12.00 - 0
        timer = setInterval(update, 10); // 
        isRunning = true;
        //console.log(timer)
    }

    // console.log(startTime);
}

function stop(){
    
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}


function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.round(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// make functions available to buttons in HTML

// window.start = start;
// window.stop = stop;
// window.reset = reset;

// ----- addEventListener -----

// document.getElementById("startButton").addEventListener("click", start);
// document.getElementById("stopButton").addEventListener("click", stop);
// document.getElementById("resetButton").addEventListener("click", reset);

// ----- ES6 MODULE -----

// ES6 Module = An external file that contains reusable code 
// that can be imported into other JavaScript files. 
// Write reusable code for many different apps
// Can contain variables, classes, function ... and more
// Introduce as part of ECMAScript 2015 update

/* import {PI, getCircumference, getArea, getVolume} from './math.js';

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10); 

console.log(`${circumference.toFixed(2)}cm`)
console.log(`${area.toFixed(2)}cm²`)
console.log(`${volume.toFixed(2)}cm³`) 
*/

// ----- SYNCRONOUS ----- 

// syncronous = Execute line by line consecutively in sequential manner
// Code that waits for an operation to complete.

// ----- ASYNCRONOUS -----

// asyncronous = Allow multiple operations to be performed concurrently without waiting
// Doesn't block the execution flow and allow the program to continue
// (I/0 operation, network requests, fetching data)
// Handled with: Callback, Promises, Async/Await

// ----- example for sycronous ansycronous code -----

/* function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2); */

// ----- ERROR -----

// Error = An object that is created to represent a problem that occurs
// occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any trown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up 
//              ex. close files, close connection, release resources  

/* try{
    // ----- uncaught TypeError -----
    console.log(x);
    // NETWORK ERROR
    // PROMISE REJECTION
    // SECURITY ERROR
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES 
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always execute");
}

console.log("You have reached the end!");

// ----- another example -----

try{
    const dividend = Number(window.prompt("Enter a divident:"));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if(divisor == 0){
        throw new Error("You can't devide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Value must be a number")
    }
    
    const result = dividend / divisor;
    // ----- uncaught TypeError -----
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("You have reached the end!"); */

// ----- CALCULATOR PROGRAM -----

const screen = document.getElementById("screen");

let errorState = false; // keep track if calculator is in error

function appendToDisplay(input){

    if(errorState){
        return;
    }

    const operator = "+-*/.";
    const lastChar = screen.value.slice(-1); // get last typed character

    if(operator.includes(lastChar) && operator.includes(input)){
        screen.value = screen.value.slice(0, -1) + input;
    }
    else{
        screen.value += input;
    }

    screen.scrollLeft = screen.scrollWidth;
}

function clearDisplay(){
    screen.value = "";
    errorState = false;
    screen.scrollLeft = screen.scrollWidth;
}

function calculate(){

    // ----- DANGEROUS VERSION eval() -----
    // screen.value = eval(); 
    // (EVAL IS DANGEROUS COMMAND! because its executes everything in the string)

    /*  
    try{
        screen.value = eval(display.value);
    }
    catch{
        screen.value = "Error";
    } */

    // ----- SAVER VERSION -----

    try{
        // ----- using REGEX ----- 
        if (/^[0-9+\-*/(). ]+$/.test(screen.value)){
          screen.value = new Function("return " + screen.value)();
          errorState = false; // back to normal
          screen.scrollLeft = 0; // scroll back to the right
        }
        else{
          throw new Error("Invalid input");
        }
    } 
    catch{
        screen.value = "Error";
        errorState = true; // calculate is locked until CE
    }

}

// ----- DOM = DOCUMENT OBJECT MODEL -----

// DOM = DOCUMENT OBJECT MODEL
// Object{} that  represent the page you see in the web browser
// and provide you with an API to interact with it
// Web browser construct the DOM when it load an HTML document,
// and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically
// change the content, structure, and style of a web page. 

// ----- document title -----
/* document.title = "My Website";

// ----- document black mode -----
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// constan username
const username = "Yobel Codot";

// good bye message
const goodbyeMessage = document.getElementById("goodbye-msg");

goodbyeMessage.textContent += username === "" ? `Guest` : username;

// console.log the document
console.log(document);

// console the directory of the document
console.dir(document); */

// ----- ELEMENT SELECTOR -----

// element selector = is a methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements
// from the DOM (Document Object Model)

// 1. document.getElementById()            // ELEMENT OR NULL
// 2. document.getElementsByClassName()    // HTML COLLECTION
// 3. document.getElementsByTagName()      // HTML COLLECTION
// 4. document.querySelector()             // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()          // NODELIST

// ----- CSS USING JS -----

// ===== get element by id =====

/* const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); */

// ===== get element by class =====

/* const fruits = document.getElementsByClassName("my-fruits"); */

// ----- highlight single element -----

/* fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow"; */

// ----- iterate over all the element using for loop -----

/* for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
} */

// ----- forEach cant be using to modify each element -----//
// ----- so using Class of Array ----- //

/* Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "yellow";
});

console.log(fruits) */

// ===== HTML Colection using TagName() =====

/* const head4ELements = document.getElementsByTagName("h4");
const listElements = document.getElementsByTagName("li");

for(let head4ELement of head4ELements){
    head4ELement.style.backgroundColor = "#39962fff";
}

for(let listElement of listElements){
    listElement.style.backgroundColor = "#72bf6a";
}

console.log(head4ELements); */

// ----- so using Class Of Array ----- //

/* Array.from(head4ELements).forEach(head4ELement =>{
    head4ELement.style.backgroundColor = "yellow";
});

Array.from(listElements).forEach(listElement =>{
    listElement.style.backgroundColor = "yellow";
}); */

// ===== HTML Colection using querySelector() =====

/* const element = document.querySelector(".fruits");
const element = document.querySelector("ul");

element.style.backgroundColor = "yellow";  */

//query selector only turn a single element (the first matches elements)

// ===== HTML Colection using querySelectorAll() =====

/* const fruits = document.querySelectorAll("li");

// fruits[0].style.backgroundColor = "yellow";

fruits.forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

console.log(fruits); */

// ----- DOM NAVIGATION -----

// DOM Navigation = the process of navigating trought the structure 
// of HTML document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ----- .firstElementChild -----
// first element children (first element on the list)

// ===== single example =====

/* const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"; 

// ===== ul = unordered list (select all the first children of all matching elements) =====

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}); */

// ----- .lastElementChild -----

/* const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;

lastChild.style.backgroundColor = "orange";

// ===== ul = unordered list (select all the first children of all matching elements) =====

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";

    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = "orange";
}); */

// ----- .lastElementChild -----

/* const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;

nextSibling.style.backgroundColor = "yellow"; */

// ----- .previousElementSibling -----

/* const element = document.getElementById("orange");
const prevSibling = element.previousElementSibling;

prevSibling.style.backgroundColor = "yellow";  */

// ----- .parentElement -----

/* const element = document.getElementById("orange");
const parentElement = element.parentElement;

parentElement.style.backgroundColor = "yellow"; */

// ----- .children -----

/* const element = document.getElementById("fruits");
const children = element.children;

console.log(children);

// HTML collection dont have a build-in forEach() method need to type casted as an array

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});

// another example to access mid children

children[1].style.backgroundColor = "orange"; */

// ----- ADD & CHANGE HTML -----

// ----- EXAMPLE 1 <h1> -----

// STEP 1 CREATE ELEMENT

/* const newHeading1 = document.createElement("heading1"); */

// ----- example 2 -----

// const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTE/PROPERTIES

/* newHeading1.textContent = "I like pizza!";
newHeading1.id = "myHead1";
newHeading1.style.color = "tomato";
newHeading1.style.textAlign = "center"; */

// ----- example 2 -----

/* newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"; */


// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newHeading1); // this element is lastchild 

// document.body.prepend(newHeading1); // this element is first child

// document.getElementById("box2").append(newHeading1); // last child so heading bottom 
//                                                   // (box 2 is direct parent of our Heading1)

// document.getElementById("box2").prepend(newHeading1); // first child so heading in top of word

// const box2 = document.getElementById("box2"); // select only between two box
// document.body.insertBefore(newHeading1, box2); // insert element between box 1 and box 2

// this work too in the condition where theres no element id
// const boxes = document.querySelectorAll(".box"); // select from all of query and act like quarry
// document.body.insertBefore(newHeading1, boxes[1]); // insert element from array

// ----- example 2 -----

// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// this more flexible 
// const listitems = document.querySelectorAll("#fruits li"); 
// document.getElementById("fruits").insertBefore(newListItem, listitems[4]);

// REMOVE HTLM ELEMENT

// document.body.removeChild(newHeading1); // remove heading if heading act as Child 
//                                         (this cant remove direct parent)

// document.getElementById("box2").removeChild(newHeading1); // to remove direct parent elements

// ----- example 2 -----

// document.getElementById("fruits").removeChild(newListItem);

// ----- MOUSE EVENT APPLICATION -----

// event listener = Listen for specific events to create interactive web pages 
// event: click, mouseover, mouseout
// .addEventListener(event, callback)

// ----- FIRST WE ADD .addEventListeners -----

const clickMe = document.getElementById("mouse-events");

// save value from HTML/CSS

const originalText = clickMe.textContent;
const originalColor = getComputedStyle(clickMe).backgroundColor;

let isClicked = true;

// ----- using callback ----- 

/* function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Jancuk 🥲";

    // console.log(event);
}

clickMe.addEventListener("click", changeColor); */

// -----  using anonymous function ----- 

/* clickMe.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Jancuk 🥲";
}); */

// -----  using arrow function ----- 

clickMe.addEventListener("click", event => {
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "AHHH.. 💦";
});

// ----- SECOND WE ADD mouseover -----

clickMe.addEventListener("mouseover", event => {

    if(isClicked){
        event.target.style.backgroundColor = "yellow";
        event.target.textContent = "Jangan! 🙅‍♂️";
    }
});

clickMe.addEventListener("mouseout", event => {

    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😂";

    /* if(!isClicked){
        event.target.style.backgroundColor = "lightgreen";
        event.target.textContent = "Click Me 😂";
    }
    else if(isClicked){
        event.target.style.backgroundColor = "orange";
        event.target.textContent = "Penakut 😣";
    }  */
});

// ----- KEY EVENT APPLICATION -----

// event listener = Listen for specific events to create interactive web pages 
// event: keydown, keyup, keypress// but key press doesnt available
// document.addEventListener(event, callback)

const angry = document.getElementById("angry");
const moveAmount = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    angry.textContent = "😂";
    angry.style.backgroundColor = "none";
    // console.log(`key down = ${event.key}`);

    if(event.key && event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        angry.style.top = `${y}px`;
        angry.style.left = `${x}px`;
    }
});

document.addEventListener("keyup", event => {
    angry.textContent = "😡";
    angry.style.backgroundColor = "none";
    // console.log(`key up = ${event.key}`);
});

// ----- HIDE AN ELEMENTS -----

const killButton = document.getElementById("hide")

killButton.addEventListener("click", event => {
    
    // you can change dispay into visibility and the value as (hidden for none or visible for block)
    // if(angry.style.display === "hidden")
    // angry.style.display = "visible";

    if(angry.style.display === "none"){
        angry.style.display = "block";
        angry.style.alignItems = "center";
        angry.style.justifyContent = "center";
        angry.style.position = "relative";
        killButton.textContent = "Shoot Him!";
    }
    else{
        angry.style.display = "none";
        killButton.textContent = "Revive 😇";
    }
});

// ----- NODELIST -----

// NodeList = Static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes to DOM

/* let buttons = document.querySelectorAll(".node-list");

// console.log(buttons);

// ADD HTML OR CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "💦";
});

// CLICK EVENT LISTENER

buttons.forEach(button => {
   button.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
   }); 
});

// MOUSE OVER EVENT LISTENER

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green";
    });
}); 

// ADD AN ELEMENT

const newButton = document.createElement("button"); // STEP 1 create element new button
newButton.textContent = "Button 5"; // STEP 2 adjust up id Button 5
newButton.classList = "node-list"; // STEP 3 adjust up class node-list
document.body.appendChild(newButton); // STEP 3 In JS (DOM manipulation), append add = something to the end of another element.

buttons = document.querySelectorAll(".node-list"); // ADD MANUALLY INTO THE (select again elements by class)

console.log(buttons);

// REMOVE AN ELEMENTS

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".node-list");
        console.log(buttons);
    });
}); */

// ---- CLASS LIST -----

// Classlist = Element property in JavaScript used to interact 
// with an element's list of Classes (CSS Clases) 
// Allow you to make reusable Classes for many elements accross your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// container()

// const classButton = document.getElementById("class-list");

// classButton.classList.add("enabled"); // add
// classButton.classList.remove("enabled"); // remove

// classButton.classList.add("hover"); // add class (hover from CSS)

/* classButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

classButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
}); */

// classButton.classList.add("enabled");

/* classButton.addEventListener("click", event => {

    // this works using if else (checking) here using contain() and replace()
    // if(event.target.classList.contains("enabled")){
    //     event.target.classList.replace("enabled", "disabled");
    // }
    // else{
    //     event.target.classList.replace("disabled", "enabled");
    // } 

    // this works too using toggle() function
    // classButton.classList.toggle("enabled");
    // classButton.classList.toggle("disabled");
});  */

// ----- Another Example -----

/* const buttonClass = document.querySelectorAll(".button-class");

buttonClass.forEach(button => {
    button.classList.add("enabled");
});

// buttonClass.forEach(button => {
//     button.classList.remove("enabled");
// });

buttonClass.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttonClass.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttonClass.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
}); */

/* ----- ROCK PAPER SCISSOR PROGRAM ----- */

const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    console.log(computerChoice);

    if(playerChoice === computerChoice){
        result = "Cie Samaan";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "Batu banget kaya orangnya!" : "You Lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose";
                break;                 
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;    
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    if(result === "You Win!" || result === "Batu banget kaya orangnya!"){
        playerScore ++;
        playerScoreDisplay.textContent = playerScore;
        resultDisplay.classList.add("greenText");
    }
    else if(result === "You Lose"){
        computerScore ++;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.classList.add("redText");
    }
}

// ----- IMAGE SLIDER -----

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeIndex();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000)
    }

    // console.log(intervalId);
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex --;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex ++;
    showSlide(slideIndex);
}

// ----- CALL BACK HELL -----

// Callback Hell = Situation in JavaScript where callbacks
// are nested within other callback to the 
// degree where the code is difficult to read.
// Old pattern to handle asynchronous function.
// Use Promises + async/await to avoic callback hell

// ----- SYNCRONOUS TASK -----

/* function task1(){
    console.log("Task 1 Complete");
} 

function task2(){
    console.log("Task 2 Complete");
}

function task3(){
    console.log("Task 3 Complete");
}

function task4(){
    console.log("Task 4 Complete");
}

task1();
task2();
task3();
task4();

console.log("All tasks complete"); */

// ----- ASYNCRONOUS TASK -----

/* function task1(callback){

    setTimeout(() => {
    console.log("Task 1 Complete");
    callback();
    }, 2000);
} 

function task2(callback){

    setTimeout(() => {
    console.log("Task 2 Complete");
    callback();
    }, 1000);
}

function task3(callback){

    setTimeout(() => {
    console.log("Task 3 Complete");
    callback();
    }, 3000);
}

function task4(callback){

    setTimeout(() => {
    console.log("Task 4 Complete");
    callback();
    }, 1500);
}

// This call back hell (unreasonable code) and should avoided

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All tasks complete")); 
        });
    });
}); */

// ----- PROMISES -----

// Promises = An Object that manages asyncronous operations.
// Wrap a Promise Object around (asyncronous code)
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promises ((resolve, reject) => {asyncronous code})


// DO THESE CHORES IN ORDER

// 1. WALK THE DOG

/* function walkDog(callback){

    setTimeout(() => {
        console.log("You Walk the dog 🐕");
        callback();
    }, 1500);

    return new Promise(resolve, reject) => {
        
    };
}

// 2. CLEAN THE KITCHEN

function cleanKitchen(callback){

    setTimeout(() => {
        console.log("You clean the kitchen 🧹");
        callback();
    }, 2500);
}

// 3. TAKE OUT THE TRASH

function takeOutTrash(callback){

    setTimeout(() => {
        console.log("You take out the trash ♻️");
        callback();
    }, 500);
}

// CALLBACK HELL (avoided) we using promises

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash (() => 
            console.log("You finished all the chores!")
        );
    });
}); */

// ----- BETTER && CORRECT USE PROMISES -----

/* // 1. WALK THE DOG

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You Walk the dog 🐕");
            }
            else{
                reject("You didn't walk the dog");
            }
            
        }, 1500);
    });
}

// 2. CLEAN THE KITCHEN

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You didn't clean the kitchen");
            }

        }, 2500);
    });
}

// 3. TAKE OUT THE TRASH

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            const trashTakeOut = true;

            if(trashTakeOut){
            resolve("You take out the trash ♻️");
            }
            else{
                reject("You didn't take the trash");
            }

        }, 500);
    });
}

// ----- METHOD CHAINING ----- 
// call multiple methods on the same object

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error)); */

// ----- ASYNCRONOUS OR AWAITS -----

// Async/Await = Async = makes a function return a promise
//               Async = makes a async function wait for a promise

// Allows you write asyncronous code in a syncronous manner 
// Async doesnt have resolve or reject parameters
// Everything after await is placed in an event queue

// ASYNCRONOUS AND AWAITS replaced an CHAINING METHOD

// 1. WALK THE DOG

/* function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve("You Walk the dog 🐕");
            }
            else{
                reject("You didn't walk the dog");
            }
            
        }, 1500);
    });
}

// 2. CLEAN THE KITCHEN

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }
            else{
                reject("You didn't clean the kitchen");
            }

        }, 2500);
    });
}

// 3. TAKE OUT THE TRASH

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {

            const trashTakeOut = false;

            if(trashTakeOut){
            resolve("You take out the trash ♻️");
            }
            else{
                reject("You didn't take the trash");
            }

        }, 500);
    });
}

// AWAITS only valid using async functions

async function doChores(){
    
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!")    
    }
    catch(error){
        console.error(error);
    }
    
}

doChores() */

// ----- JSON (JavaScript Object Notation) -----

// JSON = (JavaScript Object Notation) data-intercharge format
// Used for exchanging data between a server and a web application
// JSON files {key:value} or [value1, value2, vlaue3]

// JSON.stringify() = convert a JS object to a JSON string.
// JSON.parse() = convert a JSON string to a JS object 

// ----- JSON.stringify() -----

/* const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 35,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false   
}]

const jsonString1 = JSON.stringify(names);
const jsonString2 = JSON.stringify(person); // JSON work with one long string
const jsonString3 = JSON.stringify(people);

console.log(names); // array
console.log(person);
console.log(people);

console.log(jsonString1); // object
console.log(jsonString2);
console.log(jsonString3);

// ----- JSON.parse() -----

// to convert object into strings using we can surround them with `` pair and back tick

const jsonNames  = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{ "name": "Spongebob","age": 30,"isEmployed": true,"hobbies": 
                    ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                    {"name": "Patrick","age": 35,"isEmployed": false},
                    {"name": "Squidward","age": 50,"isEmployed": true},
                    {"name": "Sandy","age": 27,"isEmployed": false}]`;

// to convert into original form using json.parse() method 

const parsedData1 = JSON.parse(jsonNames);
const parsedData2 = JSON.parse(jsonPerson);
const parsedData3 = JSON.parse(jsonPeople);

console.log(jsonNames); // first it was string representation of an array
console.log(parsedData1); // turn into JS array

console.log(jsonPerson); 
console.log(parsedData2); // JS object

console.log(jsonPeople); 
console.log(parsedData3); // array of an object */

// ----- fetch() -----
// fetch() = request or pull data

/* fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("name.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))

// iterate the object (print every object)

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))

    // more specific elements below

    // .then(values => values.forEach(value => console.log(value.name)))
    // .then(values => values.forEach(value => console.log(value.age)))
    // .then(values => values.forEach(value => console.log(value.isEmployed)))

    .catch(error => console.error(error)) */

// ----- FETCH FUNCTION -----

// fetch = function used for making HTTP requests to fetch resoucers.
// (JSON style data, images, files)
// Simplifies asyncronous data fetching in JavaScript and 
// used for interacting with APIs to retrieve and send 
// data asynchronously over the web.
// fetch(url, {options})

// method: "GET"    // to get data
// method: "POST"   // to send data
// method: "PUT"    // to replace data
// method: "DELETE" // to delete data

// ----- FETCH DATA FROM API -----

// request the data from api using fetch()

/* fetch("https://pokeapi.co/api/v2/pokemon/charizard")

    .then(response => {

        if(!response.ok){
            throw new Error ("Could not fetch resource");
        }
        return response.json();

    }) // checking are response okay

    .then(data => console.log(data))
    .catch(error => console.error(error)); */

// HTTPS RESPONSE STATUS CODE

// HTTP response status codes indicate whether a 
// specific HTTP request has been succesfully completed

// Response are grouped in 5 classes:

// 1. Informational response   (100 - 199)
// 2. Succesful response       (200 - 299)  
// 3. Redirection response     (300 - 399) 
// 4. Client error response    (400 - 499) 
// 5. Server error response    (500 - 599) 

// ----- Another example using async function -----

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        console.log(data);
    }
    catch(error){
        console.error(error);
    }

} 

// ----- BUILD WEATHER APP AND FETCH DATA FROM API -----

const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "0c9dd80b169a63fc0a1702800c7ff44c";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherinfo(weatherData);
        }
        catch(error){
            console.log(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

async function getWeatherData(city){

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();

    //console.log(response);
}

function displayWeatherinfo(data){

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
    
    card.textContent= "";
    card.style.display = "flex";
    
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp)}°K`;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    // tempDisplay.textContent = `${((temp - 273.15)* (9/5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `Humidity ${humidity} %`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
    
    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

    //console.log(data);
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 500):
            return "☔";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🍃";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "⛅";
        default: 
            return "❓";
    }
}

function displayError(message){
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}