console.log("Hello World!");

const myName = 'Alken Flores';
let Age = '20';
const myNumber = 9638233541;
const myAdress = 'Cadiz City';

console.log(`Name: ${myName}`);
console.log(`Age: ${Age}`);
console.log(`Number: ${myNumber}`);
console.log(`Adress: ${myAdress}`);

//Functions
function greet(name){
    return`Goodmorning, ${name}`;
}
console.log(greet(myName));

function mdas(num1, num2){
    let multiplacation = num1 * num2;
    let division = num1 / num2;
    let addition = num1 + num2;
    let subtraction = num1 - num2;

    return (`Values: ${num1} and ${num2}. Product: ${multiplacation}, Quotient: ${division}, Sum; ${addition},Diff: ${subtraction}`);
}
console.log (mdas(5,3))
const heading = document.querySelector("h1")
console.log(heading);

const contactHeading = document.querySelector("#contact h2")
console.log(contactHeading);
const projectHeading= document.querySelector("#services h2")
console.log(projectHeading);

heading.textContent ="My Portfolio";
contactHeading.textContent = "Let's build together!"
projectHeading.textContent = "My Projects";


