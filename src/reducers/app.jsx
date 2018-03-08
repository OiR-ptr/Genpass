import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import { reducer as formReducer } from "redux-form";
import MuiProvider from "material-ui/styles/MuiThemeProvider";

import {tagReducer, passwordReducer} from "../reducers/genpass";
import GenPass from "../components/GenPass";

const rootReducer = combineReducers({
    tag: tagReducer, 
    password: passwordReducer,
    form: formReducer
})

let store = createStore(rootReducer);
let rootElement = document.getElementById("root");

render(
    <Provider store={store}>
        <MuiProvider>
            <GenPass />
        </MuiProvider>
    </Provider>, 
    rootElement
);