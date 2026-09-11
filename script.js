console.log("Hello, world.");
console.log("First Javascript");

//const is unchangeable
const myName = "Philip Alexander Juayong",
    myNumber = 9940369664,
    myAdress = "Hda Sta Teresa, Brgy. Alicante E.B Magalona";

//let is changeable
let age = 20;


//console.log is display output in the console
console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${myNumber}`);
console.log(`Address: ${myAdress}`);

//Functions is calling a block of code that can be reused

function greet(name) {
    return `Good Morning, ${name}!`;

}
//mdas is the order of operations in math, it stands for Multiplication and Division, Addition and Subtraction
function mdas(num1, num2, operator,) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";


    }
}//The output of the function greet is displayed in the console
console.log(greet("Rene"));


//The output of the function mdas is displayed in the console
console.log("Multiplication:" + mdas(5, 3, "*"));
console.log("Division:" + mdas(5, 3, "/"));
console.log("Subtraction:" + mdas(5, 3, "-"));
console.log("Addition:" + mdas(5, 3, "+"));

//const is used to select the first element that matches the specified in HTML code selector
const heading = document.querySelector("h1");


//The output of the heading is displayed in the console
console.log(heading);


//const is used to select all elements that matches the specified in HTML code selector
const main = document.querySelectorAll("h2");

//the output of the main is displayed in the console
console.log(main[1]);
console.log(main[2]);

// The textContent property is used to set or re assign the value.
heading.textContent = "My Portfolio";
main[1].textContent = "Let's Connect!";
main[2].textContent = "Message me!!";

//Changing the color and background color of the heading and main elements using the style property
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";

//Changing the color and background color of the heading and main elements using the style property
main[0].style.color = "purple";
main[1].style.color = "purple";
main[2].style.color = "purple";
