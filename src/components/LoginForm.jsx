import React from "react";
import fs from "fs";
import * as firebase from "firebase";
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";

export default class LoginForm extends React.Component {
    componentWillMount() {
        var config = JSON.parse(fs.readFileSync('./firebaseauth.json', 'utf-8'));
        firebase.initializeApp(config);
    }

    render() {
        return(
            <Paper>
                <FlatButton label="Secondary" secondary={true} onClick={(e) => {
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
            </Paper>
        );
    }
}