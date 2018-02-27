import React from "react";
import Moment from "moment";

import { ADD_TAG, SELECT_TAG } from "../actions/Actions";

const initialState = {
    selected_tag: {
        tagID: -1,
        title: "-",
        abstract: "-",
        detail: "-",
        seed: "-",
        updateAt: Moment().format('LL'),
    },
    tag_count: 0,
    tags: [],
};

export default function genpass(state = initialState, action) {
    switch(action.type) {
        case ADD_TAG:
            var obj = Object.assign({}, state, {
                tag_count: state.tag_count + 1,
                tags: [
                    ...state.tags.slice(0, action.tagID),
                    Object.assign({}, state.tags[action.tagID], {
                        tagID: action.tagID,
                        title: "",
                        abstract: "",
                        detail: "",
                        seed: "",
                        updateAt: action.updateAt
                    }),
                    ...state.tags.slice(action.tagID + 1)
                ]
            });
            console.log(obj);
            return obj;

        case SELECT_TAG:
            return Object.assign({}, state, {
                selected_tag: Object.assign({}, state.tags.filter( function( value ) {
                    return value.tagID == action.tagID;
                })[0])
            });

        default:
            return state;
    }
}
