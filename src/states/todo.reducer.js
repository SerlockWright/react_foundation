// actions
import * as todoActions from './todo.action';

const initialState = {
  todos: []
}

export const todoReducer = (state = initialState, { type, payload }) => {
  console.log('todoReducer')
  switch (type) {
    case todoActions.ADD_TODO: {
      return {
        ...state,
        todos: payload
      }
    }
    default:
      return state;
  }
}