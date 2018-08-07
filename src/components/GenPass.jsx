import React from "react";

import Paper from "material-ui/Paper";
import TagList from "../containers/TagList";
import MainContent from "../containers/MainContent";
import PasswordDialog from "../containers/PasswordDialog";
import {firebaseApp} from "../firebase/firebaseinstance";
import { connect } from "react-redux";

class GenPass extends React.Component {
    componentDidMount() {
        console.log(firebaseApp.auth().currentUser);
    }

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
                <PasswordDialog />
            </Paper>
        );
    }
}
export default connect()(GenPass);