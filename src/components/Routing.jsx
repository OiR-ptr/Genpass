import React from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import LoginForm from "../containers/LoginForm";
import GenPass from "../components/GenPass";

export default class Routing extends React.Component {
    render() {
        const ConnectedSwitch = connect(state => ({
            location: state.router.location
        }))(Switch);
        return (
            <ConnectedSwitch>
                <Route path="/" component={LoginForm} />
                <Route path="/content" component={GenPass} />
                <Redirect to={{pathname: '/'}} />
            </ConnectedSwitch>
        );
    }
}
