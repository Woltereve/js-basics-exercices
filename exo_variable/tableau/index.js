const numbers = [];
for (let i = 1 ;i<= 10 ;i++){
    numbers.push(i);
}

console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);
console.log([numbers.length - 1]);
console.log(numbers[10]);

numbers[0] = 0;
console.log(numbers);



const fruits = ["pomme","banane","orange"];

fruits.push("kiwi");

 
 fruits.unshift("fraise");
 fruits.pop ();
 fruits.shift();

console.log(fruits)

