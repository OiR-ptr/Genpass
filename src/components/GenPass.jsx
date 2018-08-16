import React from "react";

import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

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
                <Paper style={{ float: "left", width: "30%"}}>
                    <TagList />
                </Paper>
                <Paper style={{ float: "left", width: "70%"}}>
                    <MainContent />
                </Paper>
                <PasswordDialog />
            </Paper>
        )
        : <CircularProgress size={40} thickness={5} />;
    }
}
