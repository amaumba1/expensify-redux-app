
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: state.count === 0
      }
    default:
      return state; 
  }
})

console.log(store.getState());

// Actions - than an object that gets sent to the store. 

// Actions eg - increament, decrement, reset
//  so let's create the above action 

// I'd like to increment the count

// dispatch job is to send action to the store. 

store.dispatch({
  type: 'INCREMENT'
})

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


// I'd like to increment the count
// I'd like to reset the count to zero

console.log(store.getState());
