//1 .- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos

let numbers = [4, 5, 6, 7, 8, 9, 10];

let elevados = () => numbers.map(num => num ** 4);

let resultado = elevados();

console.log(resultado);
// _____________________________________________________

// 2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let menu = foodList.map(food => {
    switch (food) {
        case 'Pizza':
            return 'Como soy de Italia, amo comer Pizza'
            break;
        case 'Ramen':
            return 'Como soy de Japón, amo comer Ramen'
            break;
        case 'Paella':
            return 'Como soy de Valencia, amor comer Paella'
            break;
        case 'Entrecot':
            return 'Aunque no como carne, el Entrecot es sabroso'
    }
});

// ______________________________________________________________________-

// 3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

let segundoArray = staff.map(persona => {
    const { name, role, hobbies } = persona;
    return `${name} es ${role} y le gusta ${hobbies.join(' y ')}`;
})
console.log(segundoArray);

// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

// ___________________________________________________________________________________________-


// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter(num => num % 2 !== 0)

console.log(result4);

// ______________________________________________________________________________________________________________-

// 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
// ['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

let result5 = foodList2
    .filter(food => food.isVeggie)  // Filtramos solo los platos veganos
    .map(food => `Que rico${food.name.endsWith('a') ? 'a' : ''} ${food.name} me voy a comer!`); // Generamos las frases

console.log(result5);
// ______________________________________________________________________________________________________

// 6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

const masQue = inventory         
    .filter(item => item.price > 300)
    .map(item => item.name); 

    console.log(masQue);

/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/
// ______________________________________________________________________________________________________________                 CHECKK THIS UNDER.....

// 6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array... USANDO REDUCE

const numeros = [39, 2, 4, 25, 62];

const multiplicacionTotal = numeros.reduce((acumulador, valorActual) => acumulador * valorActual, 1);

console.log(multiplicacionTotal);

// ___________________________________________________________________________________________________________________________-     CHECKK THIS UNDER....

// 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
// const sentenceElements = [
//     'Me',
//     'llamo',
//     /* Tu nombre aqui! */,
//     'y',
//     'quiero',
//     'sentir',
//     'la',
//     'fuerza',
//     'con',
//     'javascript'
//   ];
  
  // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
  
  const frase = sentenceElements.reduce((acumulador, palabra) => `${acumulador} ${palabra}`);
  
  console.log(frase);
//   ______________________________________________________________________________________________________________________________     CHECKK THIS UNDER....

//   8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.    // Resultado --> 60
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  const totalCodeBooksPrice = books
  .filter(book => book.category === 'code') // Filtrar libros de la categoría 'code'
  .reduce((acumulador, book) => acumulador + book.price, 0); // Sumar los precios de los libros

console.log(totalCodeBooksPrice);