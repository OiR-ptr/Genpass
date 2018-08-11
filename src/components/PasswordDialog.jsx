import React from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

export default class PasswordDialog extends React.Component {
    render() {
        return (
            <Dialog 
                title="Conguraturations! Generated Password"
                actions={ <FlatButton label="end" onClick={ () => { this.props.passwordDone() } } /> }
                modal={true}
                open={this.props.open} >
                {this.props.password}
            </Dialog>
        );
    }
}