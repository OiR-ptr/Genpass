import React from "react";
import { ADD_TAG } from "../actions/Actions";

const initialState = {
    tags: [],
    tag_count: 0,
};

export default function genpass(state = initialState, action) {
    alert("call genpass reducers.");
    switch(action.type) {
        case ADD_TAG:
            return Object.assign({}, state, {
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
                    ...state.todos.slice(action.tagID + 1)
                ]
            });

        default:
            return state;
    }
}
