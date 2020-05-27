import { systemReducer, } from "./system/reducers";
import { chatReducer, } from "./chat/reducers";
import { createStore, combineReducers, applyMiddleware, } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools, } from "redux-devtools-extension";

const rootReducer = combineReducers({
    chat: chatReducer,
    system: systemReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  return createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
  );
};
