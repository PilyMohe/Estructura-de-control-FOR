/*
//Ejemplo 1

let arreglo = [1,2,3,4,5,6,7,8,9,10]

console.log("Imprimiendo datos 1 por 1")

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);

console.log("Utilizando un ciclo for para automatizar el proceso")

for(let indice = 0; indice <10; indice ++){
    //Código a ejecutar
    console.log(arreglo[indice]);
}

//Ejemplo 2

let poema = ["Me", "gustan", "tus", "ojos", "bonitos", "cuando", "me", "miran"]

//Cuando no sabemos el número de datos, ponemos length

for(let i = 0; < poema.length; i++){
    console.log(poema[i])
}
//Longitud de mi arreglo 
console.log(poema.length);

//Ejemplo 3
console.log("Mostrar en pantalla solamente los elementos tipo numero:")

let elementos = [1, "dos", "tres", 4, true, false, "5", 7, 300];

for(let index = 0; index < elementos.length; index++){
    if(typeof elementos[index] === "number"){
        console.log(arreglo[index]);
    }
}
*/

//Ejercicio 1
//Imprimir numeros impares del 1 al 50

console.log("Números impares del 1 al 50")

for(let i = 1; i <=50; i++){
// Si i es diferente a 0
    if(i % 2 !== 0){
        //Lo que se imprime
        console.log(i);
    }
}



// Ejercicio 2 
var pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ]

// Obtener numero del usuario

  let nombrepokemons = prompt ("Ingresa un número, por favor: ");

  for(i=0; i< nombrepokemons; i++){
    if(i % 5 === 0){
        console.log(pokemons [i]);
    }
  }

  
//Ejercicio 3 
  let Lista = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

  Lista.forEach(elemento => {
    if (typeof elemento === 'number') {
      console.log(elemento);
    }
  });