import {connect} from "react-redux";
import {push, go} from "react-router-redux";

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
        },
        authFail() {
            dispatch(AuthFailedEvent());
        },
        gotoContentPage() {
            dispatch(push('/content'));
            console.log("push root directory. hayougokeboke")
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
