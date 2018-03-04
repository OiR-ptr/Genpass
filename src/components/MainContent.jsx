import React from "react";

import Moment from "moment";

import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import Done from "material-ui/svg-icons/action/done";

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.tag.title,
            abstract: props.tag.abstract,
            detail: props.tag.detail,
            seed: props.tag.seed,
        }
    }

    render() {
        let data = { title: this.props.tag.title, abstract: this.props.tag.abstract, detail: this.props.tag.detail, seed: this.props.tag.seed}

        return (
            <div>
                <center>{this.props.tag.tagID}</center>
                <TextField floatingLabelText="Title" value={this.title} onChange={(e) => { this.title = e.target.value }} /><br />
                <TextField floatingLabelText="Abstract" value={this.state.abstract} onChange={(e) => { this.setState({ abstract: e.target.value })}} /><br />
                <TextField floatingLabelText="Detail" value={this.state.detail} onChange={(e) => { this.setState({ detail: e.target.value })}}/><br />
                <TextField floatingLabelText="Seed" value={this.state.seed} onChange={(e) => { this.setState({ seed: e.target.value })}}/><br />
                <center>{this.props.tag.updateAt}</center>
                
                <br />
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