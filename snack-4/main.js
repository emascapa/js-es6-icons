/* 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una 
frase con il nome e cognome e l’indicazione se può guidare, in base all’età. 
*/


const nameArray = [
    'Aldo',
    'Giovanni',
    'Giacomo',
    'Anna',
    'Meredith',
    'Willy',
    'Pippo',
    'Ulisse',
    'Edward',
    'Laura'
];

const surnameArray = [
    'Rossi',
    'Palladio',
    'Baudo',
    'Scaramellozzi',
    'Wonka',
    'Palmer',
    'Gates',
    'Semprini',
    'Doe',
    'Elric',
    'Piccinini',
    'Robertson',
    'Grifone',
];


const peopleArray = generateRandomPeopleArray(10);

console.log(`Persone nel registro:`);
console.log(peopleArray);


const drivingInfo = canTheyDrive(peopleArray);

console.log(`Chi può guidare?`);
console.log(drivingInfo);


function canTheyDrive(inputArray) {
    const drivingString = inputArray.map(person => {
        if (person.age > 18) {
            return `${person.name} ${person.surname} può guidare`;
        } else {
            return `${person.name} ${person.surname} non può guidare perchè è minorenne`;
        }
    })
    return drivingString;
}


function generateRandomPeopleArray(outputLength) {

    const outputArray = [];

    while (outputArray.length !== outputLength) {

        
        const randomName = Math.floor(Math.random() * nameArray.length);
        //console.log(randomName);
        const randomSurname = Math.floor(Math.random() * surnameArray.length);
        const randomAge = Math.floor((Math.random() * 100) + 1);
    
        const person = {
            name: nameArray[randomName],
            surname: surnameArray[randomSurname],
            age: randomAge
        }

        //console.log(person);
        //`${nameArray[randomName]} ${surnameArray[randomSurname]}`;
    
        outputArray.push(person);
    }
    return outputArray;
}



