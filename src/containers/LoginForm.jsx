import {connect} from "react-redux";
import {push} from "react-router-redux";

import {firebaseApp} from "../firebase/firebaseinstance";
import LoginForm from "../components/LoginForm";
import {AuthSucceededEvent, AuthFailedEvent, AuthDone} from "../actions/AuthActions";

function mapStateToProps(state) {
    return {
        isAuthSuccess: state.auth.isAuthSuccess,
        isAuthFailed: state.auth.isAuthFailed,
        dialogClose: state.auth.closing,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signIn(email, password) {
            firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then( value => {
                console.log("then. auth succeess.");
                dispatch(AuthSucceededEvent());
            }).catch( error => {
                console.log("catch. auth failed..." + error);
                dispatch(AuthFailedEvent());
            });
        },
        signUp(email, password) {
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then( value => {
                console.log("then. auth success.");
                dispatch(AuthSucceededEvent());
            }).catch( error => {
                console.log("catch. create user failed..." + error);
                dispatch(AuthFailedEvent());
            });
        },
        gotoContentPage() {
            dispatch(push('/content'));
            dispatch(AuthDone());
        },
        closeDialog() {
            dispatch(AuthDone());
            dispatch(AuthDone());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
