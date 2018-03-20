import React from "react";
import {Switch, Route} from "react-router-dom";

import LoginForm from "../components/LoginForm";

export default class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={} />
                <Route path="/login" component={LoginForm} />
            </Switch>
        );
    }
}