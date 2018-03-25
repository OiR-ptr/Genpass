import React from "react";
import fs from "fs";
import * as firebase from "firebase";
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";

import {LIGHT_THEME, DARK_THEME} from "../reducers/AppReducer";

export default class LoginForm extends React.Component {
    componentWillMount() {
        var config = JSON.parse(fs.readFileSync('./firebaseauth.json', 'utf-8'));
        firebase.initializeApp(config);
    }

    render() {
        return(
            <Paper>
                <FlatButton label="ChangeTheme" primary={true} onClick={(e) => {
                    this.props.changeTheme( this.props.theme );
                }} />

                <FlatButton label="SignIn" secondary={true} onClick={(e) => {
                    firebase.auth().signInWithEmailAndPassword('youremailaddress', 'password')
                    .then((value) => {
                        console.log("Auth success!");
                        this.props.authSuccess();
                    }).catch( (error) => {
                        console.log("Auth failed!");
                        this.props.authFail();
                        if(error != null) {
                            console.log(error.message);
                            return;
                        }
                    })
                }}/>

                <FlatButton label="SignUp" secondary={true} onClick={(e) => {
                    firebase.auth().createUserWithEmailAndPassword('youremailaddress', 'password')
                    .then((value) => {
                        console.log("Auth success!");
                        this.props.authSuccess();
                    }).catch( (error) => {
                        console.log("Auth failed!");
                        this.props.authFail();
                        if(error != null) {
                            console.log(error.message);
                            return;
                        }
                    })
                }}/>
            </Paper>
        );
    }
}