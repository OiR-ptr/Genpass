import React from "react";

import { List, ListItem } from "material-ui/List";

export default class Tag extends React.Component {
    render() {
        return (
            <ListItem 
                primaryText = {this.props.title}
                secondaryText = {this.props.abstract}
            />
        );
    }
}