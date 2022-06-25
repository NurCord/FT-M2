import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//si ubieran varios reducer
// importo conbineReducer
//const allReducer = conbineReducer(reducer1, reducer2,../)
export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);