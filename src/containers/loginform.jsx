import React from "react";
import { connect } from "react-redux";
import LoginForm from "../components/loginform";
import { signUpEvent, signInEvent } from "../actions/LoginFormActions";

function mapStateToProps(state) {
    return {
        userCount: state.userCount
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSignIn: () => { dispatch(signInEvent()) },
        onSignUp: () => { dispatch(signUpEvent()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);