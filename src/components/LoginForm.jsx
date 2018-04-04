import React from "react";
import fs from "fs";
import * as firebase from "firebase";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Snackbar from "material-ui/Snackbar";
import LockOpen from "material-ui/svg-icons/action/lock-open";
import {LIGHT_THEME, DARK_THEME} from "../reducers/AppReducer";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        var json = JSON.parse(fs.readFileSync('./firebaseauth.json', 'utf-8'));
        var config = {
            apiKey: json.apiKey,
            authDomain: json.authDomain,
            databaseURL: json.databaseURL,
            messagingSenderId: json.messagingSenderId,
            projectId: json.projectId,
            storageBucket: json.storageBucket,
        };
        
        this.state = {
            authFailed: false,
            authSucceeded: false,
            email: '',
            password: '',
            app: firebase.initializeApp(config),
        };

        console.log(this.state.app);
    }

    render() {
        return(
            <Paper>
                <TextField name="email" floatingLabelText="Email" value={this.state.email}
                    onChange={ (e) => { this.setState({email: e.target.value}); }} /><br />
                <TextField name="password" floatingLabelText="Password" value={this.state.password}
                    onChange={ (e) => { this.setState({password: e.target.value}); }} /><br />

                <RaisedButton label="SignIn" labelPosition="before" secondary={true} icon={ <LockOpen /> } onClick={(e) => {
                    firebase.auth(this.state.app).signInWithEmailAndPassword(this.state.email, this.state.password)
                    .then((value) => {
                        console.log("then. auth succeess");
                        this.props.authSuccess();
                        this.setState({ authSucceeded: true });
                        return;
                    }).catch( error => {
                        if(error != null) {
                            console.log(error.message);
                            return;
                        }
                        console.log("catch. auth fail");
                        this.props.authFail();
                        this.setState({ authFailed: true });
                    })
                }}/>

                <RaisedButton label="SignUp" secondary={true} onClick={(e) => {
                    firebase.auth(this.state.app).createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((value) => {
                        this.props.authSuccess();
                        this.setState({ authSucceeded: true });
                    }).catch( error => {
                        this.setState({ authFailed: true });
                        this.props.authFail();
                        if(error != null) {
                            console.log(error.message);
                            return;
                        }
                    })
                }}/>

                <Snackbar open={this.state.authSucceeded}
                    message="Authentication succeeded" 
                    autoHideDuration={2000} 
                    onRequestClose={ () => {
                        this.setState({ authSucceeded: false })
                }}/>
                <Snackbar open={this.state.authFailed}
                    message="Authentication failed" 
                    autoHideDuration={2000}
                    onRequestClose={ () => {
                        this.setState({ authFailed: false })
                }}/>
            </Paper>
        );
    }
}