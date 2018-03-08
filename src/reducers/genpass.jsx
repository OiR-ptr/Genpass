import React from "react";
import Moment from "moment";

import { ADD_TAG, SELECT_TAG, SAVE_TAG, GENERATE_PASS, GENERATE_PASS_DONE } from "../actions/Actions";

const initialState = {
    selected_tag: {
        tagID: 1,
        title: "example",
        abstract: "",
        detail: "",
        seed: "default seed",
        updateAt: Moment().format('LLL'),
    },
    tag_count: 0,
    tags: [],
};

export function tagReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TAG:
            var t = {
                tagID: action.tagID,
                title: "example", abstract: "", detail: "", seed: "default seed", updateAt: action.updateAt
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

const passwordInitialState = {
    open: false,
    password: "",
};

export function passwordReducer(state = passwordInitialState, action) {
    switch(action.type) {
        case GENERATE_PASS:
            return Object.assign({}, state, {
                open: true,
                password: "toria-ez",
            });

        case GENERATE_PASS_DONE:
            return Object.assign({}, state, {
                open: false,
                password: "",
            });

        default:
            return state;
    }
}