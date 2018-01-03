import React from "react";
import {connect} from "react-redux";

import TagList from "../components/TagList";

function mapStateToProps() {
    return state;
}

function mapDispatchToProps(dispatch) {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);