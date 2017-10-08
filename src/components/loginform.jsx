import React from "react";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import {purple300} from "material-ui/styles/colors";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const formStyles = {
            icon: {
                height: 200,
                width: 200,
                overfloat: "hidden",
                display: "table-cell",
                verticalAlign: "middle"
            },
            username: {
            },
            password: {
            },
            signin: {
                margin: 12
            }
        }

        return (
            <div>
                <center>
                    <Paper style={formStyles.icon}>
                        <img src="./resource/img/gen_password.png" style={{width: "75%", height: "auto"}}/>
                    </Paper><br />
                    <TextField
                        floatingLabelText = "user"
                        floatingLabelStyle = {formStyles.username}
                    /><br />
                    <TextField
                        floatingLabelText = "password"
                        type = "password"
                        style = {formStyles.password}
                    /><br />
                    <RaisedButton 
                        label = "Sign in"
                        primary = {true}
                        style = {formStyles.signin}
                    />
                    <RaisedButton
                        label = "Create new account"
                        style = {formStyles.signin}
                    />
                </center>
            </div>
        );
    }
}