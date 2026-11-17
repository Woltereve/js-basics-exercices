console.log("exercice 1");

const paragraphes = document.querySelectorAll("#ex1 .content p");
console.log(`nombres de paragraphe: ${paragraphes.length}`);

const special = document.querySelector("#ex1 .special");
console.log(`cet exercice est :${special.textContent}`);

const para = document.querySelector("#ex1 .content p");
console.log(`il est le :${para.textContent}`);

for (const p of paragraphes) {
	console.log(p.textContent);
}

const missing = document.querySelector(`#ex1 .missing`);
console.log(missing);

console.log(missing ? "trouver" : "je ne voiss rien");

console.log(paragraphes);
console.log(Array.isArray(paragraphes));

const nodesToArray = Array.from(paragraphes);
console.log(nodesToArray);


