import React from "react";
import {connect} from "react-redux";
import MuiProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {getThemeStyles} from "../reducers/AppReducer";


class GuiThemeContainer extends React.Component {
    render() {
        return (
            <MuiProvider muiTheme={getMuiTheme(getThemeStyles(this.props.state.app.muiTheme))}>
                {this.props.children}
            </MuiProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps)(GuiThemeContainer);
