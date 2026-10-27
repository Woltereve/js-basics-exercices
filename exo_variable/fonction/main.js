function greet (name)
{
    return (`hello ${name}`)
};
console.log (greet ("eve"));


function calculateArea (width ,height)
 { return width * height}
 console.log (calculateArea (10,12));



 function isEven (number)
 {return number %2 ===0}
console.log (isEven(18));
console.log (isEven(19));



function getPrice(quantity) {
	return(quantity * 2.5);
}
const price = getPrice(4);
console.log(`Total: ${price} €`);



function createUser  (name, age=18, isActive=true)
{
    return {name:name, age:age,isActive:isActive};
}
console.log(createUser('Bob'));
console.log (createUser('Charlie', 25, false));




// main.js:39 Uncaught ReferenceError: Cannot access 'greetExpression' before initialization
const greetExpression = function (name){
    
    return `${name}`
};
console.log (greetExpression("eve"));

// main.js:39 Uncaught ReferenceError: Cannot access 'greetExpression' before initialization
const greetArrow = (name) => {
    
    return `${name}`
};
console.log (greetArrow("banane"));


const globalVar = "global";

function  testScope () {

   const localVar= 'local';
   console.log (globalVar);
   console.log (localVar);
}
testScope();
// console.log(localVar); → ReferenceError: localVar is not defined (localVar n'existe que dans la fonction)





