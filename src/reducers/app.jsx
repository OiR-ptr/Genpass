import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import MuiProvider from "material-ui/styles/MuiThemeProvider";

import LoginForm from "../containers/loginform";
import reducer from "../reducers/loginform";

import TagList from "../components/TagList";

let store = createStore(reducer);
let rootElement = document.getElementById("root");

const tagItems = [
    { title: "1" },
    { title: "2" }
];

render(
    <Provider store={store}>
        <MuiProvider>
            <TagList tags = {tagItems}/>
        </MuiProvider>
    </Provider>, 
    rootElement
);