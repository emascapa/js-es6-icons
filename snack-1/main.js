/* Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, 
modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le 
auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


const carsArray = [
    {
        brand: 'Fiat',
        model: 'Punto',
        fuel: 'benzina',
    },
    {
        brand: 'Fiat',
        model: 'Panda',
        fuel: 'gpl',
    },
    {
        brand: 'Fiat',
        model: 'Barchetta',
        fuel: 'metano',
    },
    {
        brand: 'Ford',
        model: 'Fiesta',
        fuel: 'gpl',
    },
    {
        brand: 'Ford',
        model: 'Puma',
        fuel: 'diesel',
    },
    {
        brand: 'Ford',
        model: 'Focus',
        fuel: 'elettrico',
    },
    {
        brand: 'Nissan',
        model: 'Micra',
        fuel: 'benzina',
    },
    {
        brand: 'Nissan',
        model: 'Juke',
        fuel: 'elettrico',
    },
    {
        brand: 'Ferrari',
        model: 'Testarossa',
        fuel: 'diesel',
    },
    {
        brand: 'Citroen',
        model: 'Xsara',
        fuel: 'benzina',
    }
]


console.log(`L'array di macchine originale:`);
console.log(carsArray);


const gasolineCars = carsArray.filter(car => {
    return car.fuel === 'benzina';
})
const dieselCars = carsArray.filter(car => {
    return car.fuel === 'diesel';
})
const otherCars = carsArray.filter(car => {
    return (car.fuel !== 'benzina' && car.fuel !== 'diesel');
})


console.log(`L'array di macchine a benzina:`);
console.log(gasolineCars);

console.log(`L'array di macchine a diesel:`);
console.log(dieselCars);

console.log(`L'array di macchine non a benzina e non a diesel:`);
console.log(otherCars);
