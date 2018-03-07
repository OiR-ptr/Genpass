import React from "react";
import Moment from "moment";

import { ADD_TAG, SELECT_TAG, SAVE_TAG } from "../actions/Actions";

const initialState = {
    selected_tag: {
        tagID: 1,
        title: "-",
        abstract: "-",
        detail: "-",
        seed: "-",
        updateAt: Moment().format('LLL'),
    },
    tag_count: 0,
    tags: [],
};

export default function genpassReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TAG:
            var t = {
                tagID: action.tagID,
                title: "-", abstract: "-", detail: "-", seed: "-", updateAt: action.updateAt
            }
            var obj = Object.assign({}, state, {
                tag_count: state.tag_count + 1,
                tags: Array.from(new Set([...state.tags, t]))
            });
            return obj;

        case SELECT_TAG:
            return Object.assign({}, state, {
                selected_tag: Object.assign({}, state.tags.filter( function( value ) {
                    return value.tagID == action.tagID;
                })[0])
            });

        case SAVE_TAG:
            let newtags = state.tags.slice();
            const idx = state.tags.findIndex( function(value) {
                return value.tagID == action.tag.tagID;
            });
            if(idx != -1) {
                newtags[idx] = action.tag;
            }
            return Object.assign({}, state, {
                tags: newtags
            });

        default:
            return state;
    }
}
