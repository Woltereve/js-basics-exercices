const book = {
	title: "Le Chat",
	author: "Me and You",
	year: 2025,
	available: false,
    
};
book.year = 2015;
book.pages= 120;
console.log(book.key);
console.log(book.title);
console.log(book.author);
const _key = "year";

console.log("---- Exercice 2");
delete book.available;
console.log(book);
console.log("AFter");

function createUser(name, age, email) {
	return { name, age, email };
}
function getUserInfo(user) {
	return `${user.name} a ${user.age} ans ,son email est ${user.email}`;
}
const alice = createUser("Alice", 30, "alice@mail.com");
console.log(getUserInfo(alice));

const bob = createUser("Bob", 25, "bob@mail.com");
console.log(getUserInfo(bob));
// book = { title: "Autre livre" };


const user ={
    name :"Eve",
    address :{
      street:"rue de la poissonerie",
      city: "Namur",
        zip: 2294,

    }
}
console.log(user.address.city)
console.log(user.contact?.email ??"pas de mail");




for (const chat in book) {

   
  console.log(`${chat} : ${book[chat]}`);
}

const a = { prix: 1 };
const b = { prix: 1 };
const c = a;

c.prix = 5;

console.log(a === b);
console.log(a === c);
console.log(a.prix); 

// true false 5


function updateUser(utilisateur,modification)
{
  return {...utilisateur,...modification};
}

console.log(updateUser({},{}));

const user2 = updateUser(user, { address: { city: "Liège" } });
console.log(user2);

const copie = structuredClone(address);

