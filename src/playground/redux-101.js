
import { createStore } from 'redux';

// Action generators are functions that return action objects

// const incrementCount = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }

// the below function is the same as the above one 

// const incrementCount = (payload = {}) => ({ 
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

// Apply Destructure 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1

      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    
    default:
      return state; 
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})



// Actions - than an object that gets sent to the store. 

// Actions eg - increament, decrement, reset
//  so let's create the above action 

// I'd like to increment the count

// dispatch job is to send action to the store. 

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch({
  type: 'INCREMENT'
})

// RESET - set the count equal to zero 

store.dispatch({
  type: 'RESET'
})

store.dispatch({
  type: 'DECREMENT'
})

// decremenetBy 10 

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
})

store.dispatch({
  type: 'SET',
  count: 101
})




// example of destructuring function

// const add = (data) => {
//   return data.a + data.b
// }

// destructure 

// const add = ({ a , b }, c) => {
//   return a + b + c
// }

// console.log(add({ a : 1, b : 12 }, 100))
