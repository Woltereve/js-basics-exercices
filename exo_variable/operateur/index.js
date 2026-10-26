const a = 17;
const b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const n = 24;
console.log(n % 2 === 0);

let counter = 5;
console.log(counter);
counter += 3;
console.log(counter);
counter *= 2;
console.log(counter);
counter -= 4;
console.log(counter);
counter %= 5;
console.log(counter);

console.log(`5${1}`);
console.log("5" - 1);
console.log("5" * "2");
console.log(5 === "5");
console.log(5 === "5");

const firstname = "Alice";
const age = 30;
// biome-ignore lint/style/useTemplate: exercice avec +
console.log(" Bonjour " + firstname + " ," + " vous avez " + age +  " ans ");


// punaise ca c'est top
console.log(` bonjour ${firstname} vous avez ${age} ans `);

let myAge = 30
let hasValideEmail = true
let isActive = false

const isValidUser = (myAge>= 18 && hasValideEmail && isActive )
console.log(isValidUser)


// const myAge = 30;
// const hasValideEmail = true;
// const isActive = false;

// const isValidUser = myAge >= 18 && hasValideEmail && isActive;
// console.log(isValidUser);

// const isInRange = (my_Age>= && me_age <=) faux

const isInRange = myAge >= 18 && myAge <= 65;
console.log(isInRange)


console.log(isValidUser  ? "Accès autorisé" : "Accès refusé")

