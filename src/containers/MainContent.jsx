import React from "react";
import {connect} from "react-redux";

import MainContent from "../components/MainContent";

function mapStateToProps(state) {
    return {
        tag: state.selected_tag,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);