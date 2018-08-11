import React from "react";

import Paper from "material-ui/Paper";
import CircularProgress from "material-ui/CircularProgress";
import TagList from "../containers/TagList";
import MainContent from "../containers/MainContent";
import PasswordDialog from "../containers/PasswordDialog";

export default class GenPass extends React.Component {
    componentDidMount() {
        this.props.loadTags();
    }

    render() {
        return this.props.isLoaded ? (
            <Paper>
                <Paper style = {{width: "30%", float: "left"}} >
                    <TagList />
                </Paper>
                <Paper style = {{width: "70%", float: "right"}} >
                    <div style = {{float: "left"}} >
                        <MainContent />
                    </div>
                </Paper>
                <PasswordDialog />
            </Paper>
        )
        : <CircularProgress size={40} thickness={5} />;
    }
}
