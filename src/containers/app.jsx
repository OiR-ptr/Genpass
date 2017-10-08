import React from "react";
import {connect} from "react-redux";

import GenPass from "../components/genpass";
import { generatePassword } from "../actions/CommandActions";

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        // bind action creators Actions, dispatch
        handleClick: () => {
            dispatch(increment())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GenPass);
