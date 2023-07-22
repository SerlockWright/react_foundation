import * as countActions from './count.action';

// initial state
export const initialState = {
  count: 0,
  isLoading: false
}

// reducer A, B, C -> A: 3, B: 2, C: 1
// dispatch action A -> 3 reducer === 6 case

// reducer function
export function reducer(state = initialState, { type, payload }) {
  switch(type)  {
    case countActions.INCREMENT: {
      return {
        ...state,
        count: state.count + payload
      }
    }
    case countActions.DECREMENT: {
      return {
        ...state,
        count: state.count - payload
      }
    }
    case countActions.SHOW_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case countActions.HIDE_LOADING: {
      return {
        ...state,
        isLoading: false
      }
    }
      
  }
}