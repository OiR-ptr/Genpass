import React from "react";

import Paper from "material-ui/Paper";
import TagList from "../containers/TagList";
import MainContent from "../containers/MainContent";

export default class GenPass extends React.Component {
    render() {
        return (
            <Paper>
                <Paper style = {{width: "30%", float: "left"}} >
                    <TagList />
                </Paper>
                <Paper style = {{width: "70%", float: "right"}} >
                    <div style = {{float: "left"}} >
                        <MainContent />
                    </div>
                </Paper>
            </Paper>
        );
    }
}