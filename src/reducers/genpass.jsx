import React from "react";
import {GENERATE_PASSWORD} from "../actions/CommandActions";

const initialState = {
};

export default function genpass(state = initialState, action) {
    switch(action.type) {
        case GENERATE_PASSWORD:
            return state;

        default:
            return state;
    }
}
