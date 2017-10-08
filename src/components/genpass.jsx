import React from "react";
import LoginForm from "./loginform";

export default class GenPass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginForm/>
            </div>
        );
    }
}