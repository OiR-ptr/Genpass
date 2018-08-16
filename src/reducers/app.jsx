import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import createHistory from "history/createBrowserHistory";
import {reducer as formReducer} from "redux-form";
import {routerReducer, routerMiddleware, ConnectedRouter, push} from "react-router-redux";
import tagReducer from "../reducers/TagReducer";
import passwordReducer from "../reducers/PasswordReducer";
import authReducer from "../reducers/AuthReducer";
import Routing from "../components/Routing";

const history = createHistory({
    basename: window.location.pathname
});
const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
    auth: authReducer,
    tag: tagReducer, 
    password: passwordReducer,
    form: formReducer,
    router: routerReducer
})

const store = createStore(rootReducer, applyMiddleware(middleware));
let rootElement = document.getElementById("root");

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routing />
        </ConnectedRouter>
    </Provider>, 
    rootElement
);