import React from "react";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Snackbar from "material-ui/Snackbar";
import LockOpen from "material-ui/svg-icons/action/lock-open";

export default class LoginForm extends React.Component {z
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        return(
            <Paper>
                <TextField name="email" floatingLabelText="Email" value={this.state.email}
                    onChange={ (e) => { this.setState({email: e.target.value}); }} /><br />
                    
                <TextField name="password" floatingLabelText="Password" value={this.state.password}
                    onChange={ (e) => { this.setState({password: e.target.value}); }} /><br />

                <RaisedButton label="SignIn" labelPosition="before" secondary={true} icon={ <LockOpen /> } onClick={(e) => {
                    this.props.signIn(this.state.email, this.state.password);
                }}/>

                <RaisedButton label="SignUp" secondary={true} onClick={(e) => {
                    this.props.signUp(this.state.email, this.state.password);
                }}/>

                <Snackbar open={this.props.isAuth}
                    message="Authentication succeeded" 
                    autoHideDuration={2000} 
                    onRequestClose={ () => {
                        this.props.gotoContentPage();
                }}/>
                
                {/* <Snackbar open={this.state.authFailed}
                    message="Authentication failed" 
                    autoHideDuration={2000}
                    onRequestClose={ () => {
                        this.setState({ authFailed: false })
                }}/> */}
            </Paper>
        );
    }
}