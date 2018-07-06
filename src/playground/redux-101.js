
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1

      return {
        count: state.count + incrementBy
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

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
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

// decremenetBy 10 

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
})

store.dispatch({
  type: 'SET',
  count: 101
})

// I'd like to increment the count
// I'd like to reset the count to zero


