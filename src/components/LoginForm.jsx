import React from "react";
import * as firebase from "firebase";
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBc_L-c7Xl-ovrZe_vz3ISccmUbEAkwAzg",
            authDomain: "password-generator-aed1d.firebaseapp.com",
            databaseURL: "https://password-generator-aed1d.firebaseio.com",
            projectId: "password-generator-aed1d",
            storageBucket: "password-generator-aed1d.appspot.com",
            messagingSenderId: "715834437227"
          };
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