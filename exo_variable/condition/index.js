// Partie 1 : if...else


function checkAge(age) {
  if (age >= 18) {
    return 'majeure';
  } else {
    return 'mineur';
  }
}
console.log(checkAge(12));
console.log(checkAge(18));
console.log(checkAge(22));


// Partie 2 : else if

function getGrade(score){
    if (score >=16){
    return 'A';}

    else if (score >=14){
    return 'B';}

    else if  (score >=12){
        return 'C';}

        else if (score>=10){
            return 'D';}
            else{
                return "E";}
 }
 console.log(getGrade(18));
 console.log(getGrade(13));
 console.log(getGrade(5));


//  Partie 3 : l’année bissextile 


function isLeapYear(year) {

return (year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0 ;
}


console.log(isLeapYear (2024));
console.log(isLeapYear (2023));
console.log(isLeapYear (1900));
console.log(isLeapYear (2000));

// partie 4 : truthy ou falsy ?

const value = []; 

if (value) {
	console.log('truthy');
} else {
	console.log('falsy');
};


function displayStock(quantity) {
  if (quantity !== null && quantity !== undefined) {
    console.log(`Quantité: ${quantity}`);
  } else {
    console.log('Quantité inconnue');
  }
}
console.log (displayStock(0));
console.log(displayStock(5));
console.log(displayStock(null));

// 5. switch

const light = 'orange';

switch (light) {
	case 'green':
		console.log('Go');
		break;
	case 'orange':
		console.log('Slow down');
		break;
	case 'red':
		console.log('Stop');
		break;
}