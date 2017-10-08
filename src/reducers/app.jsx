import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import MuiProvider from "material-ui/styles/MuiThemeProvider";

import Genpass from "../components/genpass";
import genpass from "../reducers/genpass";

let store = createStore(genpass);

let rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <MuiProvider>
            <Genpass />
        </MuiProvider>
    </Provider>, 
    rootElement
);