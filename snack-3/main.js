/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
 */


const animalsArray = [
    {name: 'leone',
    family: 'felidi',
    species: 'mammiferi'
    },
    {name: 'cane',
    family: 'canidi',
    species: 'mammiferi'
    },
    {name: 'coccodrillo',
    family: 'boh',
    species: 'rettili'
    },
    {name: 'dodo',
    family: 'fasianidi',
    species: 'uccelli'
    },
    {name: 'elefante',
    family: 'elefantidi',
    species: 'mammiferi'
    },
    {name: 'ragno',
    family: 'aracnidi',
    species: 'insetti'
    },
    {name: 'puma',
    family: 'felidi',
    species: 'mammiferi'
    },
    {name: 'gallina',
    family: 'fasianidi',
    species: 'uccelli'
    },
    {name: 'ornitorinco',
    family: 'strani',
    species: 'mammiferi'
    },

];


const mammalsArray = animalsArray.filter(animal => {
    return animal.species === 'mammiferi'
})



console.log(`Array animali totali:`);
console.log(animalsArray);
console.log(`Array mammiferi filtrati dall'array iniziale:`);
console.log(mammalsArray);