const numbers = [];
for (let i = 1 ;i<= 10 ;i++){
    numbers.push(i);
}

console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers[10]);

numbers[0] = 0;
console.log(numbers);



const fruits = ["pomme","banane","orange"];

fruits.push("kiwi");
fruits.unshift("fraise");

const dernier = fruits.pop();
    console.log(dernier);


const premier = fruits.shift();
console.log(premier);

console.log(fruits)

for (const fruit of fruits)
    console.log(fruit);
// ------------------------------------------------------------------
for (let i=0;i < fruits.length;i++){

    console.log(`${i+1}. ${fruits[i]}`)
}


const grades= [12,15,8,17,10];
let total = 0;
for(const grade of grades) {
    total += grade;
}
console.log(total / grades.length);

// -------------------------------------------------------------------
let trouve = false;

for (const fruit of fruits){

    if ( fruit === "mangue" ){
        trouve = true 
 
        
        break
    
    }
}
console.log(trouve ? 'trouvé' : `introuvable`)

// ----------------------------------------------------------------------------------------
const chiffres = [3, -1, 7, -4, 0, 5];
let totaly =0;

for (const chiffre of chiffres){
    if (chiffre <=0 ){
        continue;
    }
    console.log(chiffre)
    totaly+=chiffre
}
    console.log (`Total ${totaly}€`)
    // -----------------------------------------------------------------------------------


const unADix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

unADix.forEach((nombre, index) => {
    
    console.log(`indice ${index} : ${nombre}`);
});

// -------------------------------------------------------------------------------

const prix = [10, 20, 30];
const prixDoubles = prix.map((p) => p * 2);


for(const prixDouble of prixDoubles){

    
}


console.log(prixDoubles);   // [20, 40, 60]












// const client = "Marie";
// const table = 5;
// const couverts = 4;
// const prixMenu = 18;

// console.log(`${client} table (${table}) : ${couverts} menu(s) = ${couverts * prixMenu} €`);

// const plats = ["lasagne","quiche", "soupe"];
// for (let i=0 ; i< plats.length;i++){

//     console.log(`plat nr ${i+1} : ${plats[i]}`);
// }

// const prix = [12, 8, 15];
//  for (let i=0 ; i<prix.length; i++){

//     console.log(`Article ${i+1} : ${prix[i]} € (x2 = ${prix[i]*2} €) `)
//  };

//  const plats = ["lasagne", "quiche", "soupe"];
// const prix = [12, 9, 6];
// let totale = 0

// for (let i=0; i<prix.length; i++){

//     console.log(`${i+1}. ${plats[i]} : ${prix[i]}€ `)
//     totale+= prix[i];
// };
// console.log (`Total ${totale} €`)


// ;const plats = ["lasagne", "quiche", "soupe"];
// const prix = [12, 9, 6];
// const quantites = [2, 1, 3];
// let totale = 0

// for(let i=0; i<prix.length; i++){

// console.log(` ${quantites[i]} ${plats[i]} ${prix[i]*quantites[i]} `)
// totale+= prix[i]*quantites[i];
// }
// console.log (`Total ${totale}€`)

