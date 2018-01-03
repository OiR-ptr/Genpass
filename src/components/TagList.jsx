import React from "react";
import Tag from "./Tag";
import { List } from "material-ui/List";

export default class TagList extends React.Component {
    render() {
        var list = [];
        for(var i in this.props.tags) {
            list.push(<Tag title = "can you smell that?" abstract = "its smells good." />);
        }

        return (
            <List>
                {list}
            </List>
        );
    }
}