import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import MuiProvider from "material-ui/styles/MuiThemeProvider";

import reducer from "../reducers/genpass";
import GenPass from "../components/GenPass";

let store = createStore(reducer);
let rootElement = document.getElementById("root");

render(
    <Provider store={store}>
        <MuiProvider>
            <GenPass />
        </MuiProvider>
    </Provider>, 
    rootElement
);