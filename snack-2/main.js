/* 
A partire da un array di stringhe, crea un secondo array 
formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
 */


//const prova = capitalizeFirstChar('AaAaAaAaA');
//console.log(prova);


let stringArray = [
    'poggiBONSI',
    'pLuTo',
    'PoSILLipo',
    'POMPEI',
    'pecorino',
    'PINguiNO',
    'passaPAROLa',
    'PENELOPe',
    'pistolERO',
    'PaRaCaDuTe'
];


const outputArray = stringArray.map(string => {
    return capitalizeFirstChar(string);
     
})


console.log('Array input:');
console.log(stringArray);
console.log('Array output:');
console.log(outputArray);

function capitalizeFirstChar(inputString) {
    inputString = inputString.toLowerCase();
    let arrayPippo = inputString.split('');
    arrayPippo[0] = arrayPippo[0].toUpperCase()
    inputString = arrayPippo.join('');
    return inputString
}