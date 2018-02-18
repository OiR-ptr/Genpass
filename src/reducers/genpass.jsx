import React from "react";
import { ADD_TAG } from "../actions/Actions";

const initialState = {
    tag_count: 0,
    tags: [],
};

export default function genpass(state = initialState, action) {
    alert("call of reducer");
    switch(action.type) {
        case ADD_TAG:
            return Object.assign({}, state, {
                tag_count: tag_count + 1,
                // tags: [
                //     ...state.tags.slice(0, action.tagID),
                //     Object.assign({}, state.tags[action.tagID], {
                //         tagID: action.tagID,
                //         title: "",
                //         abstract: "",
                //         detail: "",
                //         seed: "",
                //         updateAt: action.updateAt
                //     }),
                //     ...state.todos.slice(action.tagID + 1)
                // ]
            });

        default:
            return state;
    }
}
