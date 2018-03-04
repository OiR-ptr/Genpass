import React from "react";

import TagList from "../components/TagList";
import {addTagEvent} from "../actions/Actions";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        tagID: state.genpass.tag_count,
        tags: state.genpass.tags,
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