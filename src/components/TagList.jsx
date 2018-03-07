import React from "react";
import Tag from "../containers/Tag";

import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import AddCircle from "material-ui/svg-icons/content/add-circle";
import Subheader from "material-ui/Subheader";

export default class TagList extends React.Component {
    render() {
        var list = [];
        this.props.tags.forEach(element => {
            list.push(
                <Tag key = {element.tagID} tagID = {element.tagID} title = {element.title} abstract = {element.abstract} />
            );
        });

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
            },
            titleStyle: {
                height: "50px"
            },
        };

        return (
            <GridList cellHeight = {"auto"} cols = {2} style = {{overflowY: "auto"}}>
                <GridTile
                    key = {1}
                    title = "REGISTER"
                    titleStyle={styles.titleStyle}
                    actionIcon = { <IconButton onClick = {(e) => { this.props.addTag(this.props.tagID + 1) }}><AddCircle /></IconButton> }
                    cols = {2}
                    rows = {1}
                    >
                    <div style = {styles.titleStyle} />
                </GridTile>
                {list}
            </GridList>
        );
    }
}