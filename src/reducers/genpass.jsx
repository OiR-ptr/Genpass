import React from "react";
import Moment from "moment";
import {Enigma, Rotor, Reflector, Plugboard, EntryWheel} from "enigma";

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
            else {
                newtags.push(action.tag);
            }
            return Object.assign({}, state, {
                tags: newtags
            });

        default:
            return state;
    }
}

const passwordInitialState = {
    password: "",
};

const rotor_one = new Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 'Q');
const rotor_two = new Rotor('ESOVPZJAYQUIRHXLNFTGKDCMWB', 'J');
const rotor_three = new Rotor('BDFHJLCPRTXVZNYEIWGAKMUSQO', 'V');
const reflector = new Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');
const plugboard = new Plugboard( 'AD CN ET FL GI JV KZ PU QY WX' );
const wheel = new EntryWheel('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const enigma = new Enigma([rotor_one, rotor_two, rotor_three], reflector, plugboard, wheel);
const startPosition = 'QWE';

export function passwordReducer(state = passwordInitialState, action) {
    switch(action.type) {
        case GENERATE_PASS:
            enigma.setPositions( startPosition );
            return Object.assign({}, state, {
                password: enigma.string( action.seed )
            });

        case GENERATE_PASS_DONE:
            return Object.assign({}, state, {
                password: "",
            });

        default:
            return state;
    }
}