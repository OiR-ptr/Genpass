import React from "react";
import {connect} from "react-redux";

import GenPass from "../components/genpass";
import { generatePassword } from "../actions/CommandActions";

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(increment())
        }
    };
}

export default connect(mapStateToProps)(GenPass);
