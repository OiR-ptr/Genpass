import {connect} from "react-redux";
import {push} from "react-router-redux";

import LoginForm from "../components/LoginForm";
import {AuthSucceededEvent, AuthFailedEvent} from "../actions/AuthActions";

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authSuccess() {
            dispatch(AuthSucceededEvent());
            dispatch(push('/'));
        },
        authFail() {
            dispatch(AuthFailedEvent());
            dispatch(push('/login'));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);