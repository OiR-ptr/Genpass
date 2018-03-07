import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import Moment from "moment";

import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Done from "material-ui/svg-icons/action/done";
import VpnKey from "material-ui/svg-icons/communication/vpn-key";

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) =>
    <TextField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            password: "undefined value",
        };
    }

    render() {
        return (
            <form>
                <center>{this.props.tag.tagID}</center>
                <Field 
                    name="title"
                    label="Title"
                    component={renderTextField}
                /><br />
                <Field 
                    name="abstract"
                    label="Abstract"
                    component={renderTextField}
                /><br />
                <Field 
                    name="detail"
                    label="Detail"
                    rows={2}
                    multiLine={true}
                    component={renderTextField}
                /><br />
                <Field 
                    name="seed"
                    label="Seed"
                    type="password"
                    component={renderTextField}
                /><br />
                <center>{this.props.tag.updateAt}</center><br />
                
                <FlatButton 
                    type="submit"
                    label="Save"
                    labelPosition="before"
                    icon={ <Done /> }
                    style={{ float: "right" }}
                    onClick={this.props.handleSubmit(
                        values => {
                            this.props.saveTag({
                                tagID: values.tagID,
                                title: values.title,
                                abstract: values.abstract,
                                detail: values.detail,
                                seed: values.seed,
                                updateAt: Moment().format('LLL'),
                            })
                        }
                    )}
                />
                <RaisedButton 
                    label="Generate"
                    labelPosition="before"
                    primary={true}
                    icon={ <VpnKey /> }
                    style={{ float: "right" }}
                    onClick={this.props.handleSubmit(
                        values => {
                            this.setState({
                                open: true,
                            });
                        }
                    )}
                />

                <Dialog 
                    title="Conguraturations! Generated Password"
                    actions={ <FlatButton label="end" onClick={ () => { this.setState({ open: false }) } } /> }
                    modal={true}
                    open={this.state.open} >すぐにけせすぐにけせすぐにけせすぐにけせすぐにけせすぐにけせ</Dialog>
            </form>
        );
    }
}

let contactForm = reduxForm({
    form: 'contact',
    enableReinitialize: 'true'
})(MainContent);

export default connect(state => ({
    initialValues: state.genpass.selected_tag
}))(contactForm);