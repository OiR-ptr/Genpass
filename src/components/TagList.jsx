import React from "react";
import Tag from "./Tag";

import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import AddCircle from "material-ui/svg-icons/content/add-circle";
import Subheader from "material-ui/Subheader";

export default class TagList extends React.Component {
    render() {
        var list = [];
        for(var i in this.props.tags) {
            list.push(<Tag key = {i.tagID} title = "can you smell that?" abstract = "its smells good." />);
        }

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
                color: 'rgb(0, 188, 212)',
                height: "50px"
            },
        };

        return (
            <GridList cellHeight = {"auto"} cols = {2} style = {{overflowY: "auto"}}>
                <GridTile
                    key = {0}
                    title = "menu"
                    titleStyle={styles.titleStyle}
                    titleBackground = "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
                    actionIcon = { <IconButton><AddCircle color = "rgb(0, 188, 212)" /></IconButton> }
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