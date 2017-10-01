import React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import Genpass from "../components/genpass";
import genpass from "../reducers/genpass";

let store = createStore(genpass);

let rootElement = document.getElementById("root");
render(<Provider store={store}></Provider>, rootElement);