import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import MuiProvider from "material-ui/styles/MuiThemeProvider";
import createHistory from "history/createBrowserHistory";
import {reducer as formReducer} from "redux-form";
import {routerReducer, routerMiddleware, ConnectedRouter, push} from "react-router-redux";
import tagReducer from "../reducers/TagReducer";
import passwordReducer from "../reducers/PasswordReducer";
import authReducer from "../reducers/AuthReducer";
import {appReducer} from "../reducers/AppReducer";
import Routing from "../components/Routing";
import GuiThemeContainer from "../containers/GuiThemeContainer";

const history = createHistory();
const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
    app: appReducer,
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
            <GuiThemeContainer>
                <Routing />
            </GuiThemeContainer>
        </ConnectedRouter>
    </Provider>, 
    rootElement
);