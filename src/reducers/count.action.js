// constant
export const INCREMENT = 'COUNT/INCREMENT';
export const DECREMENT = 'COUNT/DECREMENT';
export const SHOW_LOADING = 'COUNT/SHOW_LOADING';
export const HIDE_LOADING = 'COUNT/HIDE_LOADING';

// actions creator
export function increment(payload) {
  return {
    type: INCREMENT,
    payload
  }
}

export function decrement(payload) {
  return {
    type: DECREMENT,
    payload
  }
}

export function showLoading() {
  return {
    type: SHOW_LOADING
  }
}

export function hideLoading() {
  return {
    type: HIDE_LOADING
  }
}