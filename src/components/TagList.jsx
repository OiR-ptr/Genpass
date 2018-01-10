import React from "react";
import Tag from "./Tag";

import {GridList, GridTile} from "material-ui/GridList";
import Subheader from "material-ui/Subheader";

export default class TagList extends React.Component {
    render() {
        var list = [];
        for(var i in this.props.tags) {
            list.push(<Tag key = {i.tagID} title = "can you smell that?" abstract = "its smells good." />);
        }

        return (
            <GridList cellHeight = {180} cols = {2} style = {{overflowY: "auto"}}>
                <Subheader>Header</Subheader>
                {list}
            </GridList>
        );
    }
}