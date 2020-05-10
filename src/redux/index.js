import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {stateReducer} from "./stateReducer"
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    state: stateReducer
});

const configurationStore = () => {
    const store = createStore(rootReducer, compose(
        applyMiddleware(
            thunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

    return store
};

export default configurationStore();