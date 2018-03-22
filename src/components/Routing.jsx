import React from "react";
import {Switch, Route} from "react-router-dom";
import PrivateRoute from "../containers/PrivateRoute";
import LoginForm from "../containers/LoginForm";
import GenPass from "../components/GenPass";

export default class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={LoginForm} />
                <PrivateRoute path="/" component={GenPass} />
            </Switch>
        );
    }
}