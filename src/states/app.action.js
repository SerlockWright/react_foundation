// CONSTANT
export const SET_FETCHING = 'APP/SET_FETCHING';
export const SET_USER = 'APP/SET_USER';

// action creator
export const setFetching =  (isFetching) => ({
  type: SET_FETCHING,
  payload: isFetching
})

export const setUser =  (payload) => ({
  type: SET_USER,
  payload
})