import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import Moment from "moment";

import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Done from "material-ui/svg-icons/action/done";

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

function submit(values) {
    this.props.saveTag({
        tagID: values.tagID,
        title: values.title,
        abstract: values.abstract,
        detail: values.detail,
        seed: values.seed,
        updateAt: Moment().format('LLL'),
    });
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit( values => {
                console.log(values);
                this.props.saveTag({
                    
                });
            })}>
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
                    label="Label Before"
                    labelPosition="before"
                    icon={ <Done /> }
                    style={{ float: "right" }}
                />
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