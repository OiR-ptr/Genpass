import React from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import LoginForm from "../containers/LoginForm";
import GenPass from "../components/GenPass";

class Routing extends React.Component {
    shouldComponentUpdate(nextProps) {
        console.log(nextProps.location);
        return true;
    }

    render() {
        return (
            <Switch>
                <Route path="/" component={LoginForm} />
                <Route path="/content" component={GenPass} />
                <Redirect to={{pathname: '/'}} />
            </Switch>
        );
    }
}

export default withRouter(connect(state => ({ location: state.router.location }))(Routing));
