import React from "react";

export default class MainContent extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.tag.tagID}</li>
                <li>{this.props.tag.title}</li>
                <li>{this.props.tag.abstract}</li>
                <li>{this.props.tag.detail}</li>
                <li>{this.props.tag.seed}</li>
                <li>{this.props.tag.updateAt}</li>
            </ul>
        );
    }
}