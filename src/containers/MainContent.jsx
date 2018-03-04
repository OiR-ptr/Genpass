import React from "react";
import {connect} from "react-redux";

import MainContent from "../components/MainContent";
import {saveTagEvent} from "../actions/Actions";

function mapStateToProps(state) {
    return {
        tag: state.genpass.selected_tag,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveTag(obj) {
            dispatch(saveTagEvent(obj))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);