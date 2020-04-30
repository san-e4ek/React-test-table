import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import {dataReducer} from "./dataReducer"
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    data: dataReducer
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