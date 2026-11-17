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

const docs = document.querySelector(`#ex3 .docs-link`);
console.log(docs)

const docus = docs.getAttribute(`href`)
console.log(docus)


docs.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model");
docs.textContent = "Documentation du DOM";

docs.setAttribute("target", "_blank");

const button = document.querySelector(`#ex3 .send`);
console.log(button);
button.disabled = true;
console.log(button.hasAttribute("disabled"));

const result = document.querySelector(`#ex3 .result`);

// result.textContent =`lien:${docLink.href} , bouton desactiver: ${button.disabled}`

const note = document.querySelector ("#ex4 .note")
note.classList.add ('hightlight');
note.classList.remove('muted');
console.log(note.className)

const toggles = document.querySelectorAll ( "#ex4 .toggles");

for ( const t of toggles) {
        t.classList.toggle("hightlight");
        
}
console.log(toggles[0] .classList.contains(hightlight));
console.log(toggles[1] .classList.contains(hightlight));


