import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

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

export default class MainContent extends React.Component {
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
                            this.props.generatePassword(values.seed);
                        }
                    )}
                />
            </form>
        );
    }
}
