const firstName = "Danny";
let lastName = "Pellatt";
var age = 30;
let ex1 = document.getElementById("ex1");
ex1.innerHTML = "I am " + age + " years old";

let newFirstName = "Daniel";
lastName = "Goodwin";
age = 30;
let ex2 = document.getElementById('ex2');
ex2.innerHTML = `My name is ${newFirstName} ${lastName} and I am ${age} years old`; 

let language = "JavaScript";
let createdYear = 1995;
let isCaseSensitive = true;
let ex3 = document.getElementById("ex3");
ex3.innerHTML = "The language " + language + " was created in " + createdYear + ". It is case sensitive.";

let price = 19.99;
let isOnSale = false;
let salePercentage = 15;
let stock = 0;
let inStock = false;
let selectedSize = "M";
let ex4 = document.getElementById('ex4');
ex4.innerHTML = `The original price is: ${price}. It is on sale: ${false} for ${salePercentage}%. <br>The size selected is ${selectedSize} and there are ${stock} items left, so In Stock = ${inStock}`;

let title = "Name of the Wind";
let author = "Patrick Rothfuss";
let pageCount = 722;
let bookmark = 456;
let hasRead = true;
let hasReadTranslator = hasRead == true ? "have read" : "have not read";
let ex5 = document.getElementById('ex5');
ex5.innerHTML = `${title} by ${author} has ${pageCount} pages. <br>I ${hasReadTranslator} ${title} up to page ${bookmark}`;