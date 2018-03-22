import React from "react";
import {Redirect, Route} from "react-router-dom";

export default class PrivateRouteContainer extends React.Component {
    render() {
      const {
        isAuth,
        component: Component,
        ...props
      } = this.props
  
      return (
        <Route
          {...props}
          render={props =>
            isAuth
              ? <Component {...props} />
              : (<Redirect to={{pathname: '/login', state: { from: props.location }}} />)
          }
        />
      )
    }
  }