import React from "react";
import {connect} from "react-redux";

import {addTagEvent} from "../actions/Actions";
import TagList from "../components/TagList";

function mapStateToProps() {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        addTag: (tagID) => {
            dispatch(addTagEvent(tagID))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);