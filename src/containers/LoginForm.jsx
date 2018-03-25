import {connect} from "react-redux";
import {push} from "react-router-redux";

import LoginForm from "../components/LoginForm";
import {AuthSucceededEvent, AuthFailedEvent} from "../actions/AuthActions";
import {ChangeThemeEvent} from "../actions/AppConfigActions";

function mapStateToProps(state) {
    return {
        theme: state.app.muiTheme,
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
        changeTheme(theme) {
            dispatch(ChangeThemeEvent(theme));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);