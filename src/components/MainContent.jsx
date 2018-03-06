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

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <center>{this.props.tag.tagID}</center>
                    <Field 
                        name="title"
                        label="Title"
                        component={renderTextField}
                    /><br />
                    <center>{this.props.tag.updateAt}</center><br />
                </form>

                <FlatButton 
                    label="Label Before"
                    labelPosition="before"
                    icon={ <Done /> }
                    style={{ float: "right" }}
                    onClick={(e) => { 
                        this.props.saveTag({
                            tagID: this.props.tag.tagID,
                            title: this.state.title,
                            abstract: this.state.abstract,
                            detail: this.state.detail,
                            seed: this.state.seed,
                            updateAt: Moment().format('LL'),
                        }) 
                    }}
                />
            </div>
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