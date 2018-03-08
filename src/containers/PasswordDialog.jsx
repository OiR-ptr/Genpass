import React from "react";
import {connect} from "react-redux";

import PasswordDialog from "../components/PasswordDialog";
import {clearPasswordEvent} from "../actions/Actions";

function mapStateToProps(state) {
    return {
        open: state.password.open,
        password: state.password.password,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        passwordDone() {
            dispatch(clearPasswordEvent())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordDialog);