import React from "react";
import {connect} from "react-redux";

import TagList from "../components/TagList";
import {addTagEvent} from "../actions/Actions";

function mapStateToProps(state) {
    return {
        tagID: state.tag_count,
        tags: state.tags,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTag(tagID) {
            dispatch(addTagEvent(tagID));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);