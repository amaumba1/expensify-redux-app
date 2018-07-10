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

const address = ['1432 Crested Butte Way', 'Texas','Austin','78728']

//onsole.log(`You are in ${address[1]} ${address[2]}`)

// you can use destructure to perform above operation

const [street, city, state, zip] = address

console.log(`You are in ${city} ${state}`)