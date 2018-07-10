// const person = {
//     name: 'Ally',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person; 
// //const name = person.name;
// //const age = person.age; 

// console.log(`${firstName} is ${age}`)

// const { city, temp: temprature } = person.location

// if (city && temprature) {
//     console.log(`It's ${temprature} in ${city}`)
// }

// const book = { 
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher; 

// console.log(publisherName)

//const address = ['1432 Crested Butte Way', 'Texas','Austin','78728']

//onsole.log(`You are in ${address[1]} ${address[2]}`)

// you can use destructure to perform above operation

//const [street, city, state, zip] = address

//console.log(`You are in ${city} ${state}`)

// you can destructure just what you need in the arrary but keep the comma for the first value and middle values. 

// example 

//const [, , state ] = address; 

//console.log(`You are in ${state}`)

// You can also set a default name

//const address = []

//const [, , state = 'Arkansas'] = address; 

//console.log(`You are in ${state}`)


// const address = ['1432 Crested Butte Way', 'Texas','Austin','78728']


// const [street, city, state, zip] = address

// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice] = item
// grab first and third items using array destructuring 

console.log(`A medium ${itemName} cost ${mediumPrice}`)