import { combineReducers, createStore } from "redux";

import { appReducer } from "../states/app.reducer";
import { todoReducer } from "../states/todo.reducer";


const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
})

export const store = createStore(rootReducer);


/*
{
  app: {
    isFetching: false,
    user: null
  }

}


*/