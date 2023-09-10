// actions
import * as appActions from './app.action';

const initialState = {
  isFetching: false,
  user: null
}

export const appReducer = (state = initialState, { type, payload }) => {
  console.log('appReducer')
  switch (type) {
    case appActions.SET_FETCHING: {
      return {
        ...state,
        isFetching: payload
      }
    }
    case appActions.SET_USER: {
      return {
        ...state,
        user: payload
      }
    }
    default:
      return state;
  }
}