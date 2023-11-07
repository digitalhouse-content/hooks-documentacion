
/**
 * Nombre de usuario
 * @type {string}
 */

let userName = "Humberto"

/**
 * Edad del usuario
 * @type {number}
 */
let usarAge = 45



/**
 * Lista de edades de usarios
 * @type {Array<Number>}
 */
const usersAge = [21, 23, 24, 27, 33]


/**
 * Lista de valores
 * @type {Array<Number | String | Boolean>}
 */
const mixedArray = [42, 'Hola', true]

/**
 * Usario
 * @type {{id: number, name: string, age: number, isActive: boolean}}
 */
const user = {
  id: 1,
  name: "Humberto",
  age: 37,
  isActive:true
}



/**
 * @typedef {object} User
 * @property {number} id este el el id del usuario
 * @property {string} name este es el nombre del usuario
 * @property {number} age esta es la edad del usario
 * @property {boolean} isActive si el usario esta activo
 */
const user2 = {
  id: 1,
  name: "Humberto",
  age: 37,
  isActive:true
}

/**
 * @type {User}
 */
const user3 = {
  id: 1,
  name: "Humberto",
  age: 37,
  isActive: true
}

/**
 * Imprime por consola un saludo del nombre del user
 * @param {User} user 
 * @returns {void}
 * @example
 * sayHeloo(user)
 */
function sayHello(user) {
  console.log(`Hola ${user.name}`)
}

/**
 * @function
 * @param {number[]} numbers - el array de numero a filtar
 * @returns {number[]} un NUevo array con los numeros pares
 */

function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}


/**
 * @async
 * @function
 * @param {string} url La URL del servidor remoto 
 * @returns  {Promise<object>} los datos obtenidos del servidor
 * @throws {Error} si la solicitud al servidor falla
 */
async function fetchData(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Fallo al obtener los datos del servidor')
  }

  return response.json()
}