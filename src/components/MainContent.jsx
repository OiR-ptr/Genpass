import React from "react";

import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Done from "material-ui/svg-icons/action/done";

export default class MainContent extends React.Component {
    render() {
        return (
            <div>
                <center>{this.props.tag.tagID}</center>
                <TextField floatingLabelText="Title" defaultValue={this.props.tag.title} /><br />
                <TextField floatingLabelText="Abstract" defaultValue={this.props.tag.abstract} /><br />
                <TextField floatingLabelText="Detail" defaultValue={this.props.tag.detail} /><br />
                <TextField floatingLabelText="Seed" defaultValue={this.props.tag.seed} /><br />
                <center>{this.props.tag.updateAt}</center>
                
                <br />
                <FlatButton 
                    label="Label Before"
                    labelPosition="before"
                    icon={ <Done /> }
                    style={{ float: "right" }}
                />
            </div>
        );
    }
}