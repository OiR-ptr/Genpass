import React from "react";

import { List, ListItem } from "material-ui/List";
import GridTile from "material-ui/GridList/GridTile";

export default class Tag extends React.Component {
    render() {
        return (
            <GridTile onClick = { (e) => { this.props.selectTag( this.props.tagID ) } }>
                <ListItem 
                    primaryText = {this.props.title}
                    secondaryText = {this.props.abstract}
                />
            </GridTile>
        );
    }
}