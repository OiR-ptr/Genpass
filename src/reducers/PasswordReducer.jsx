import {Enigma, Rotor, Reflector, Plugboard, EntryWheel} from "enigma";

import {GENERATE_PASS, GENERATE_PASS_DONE} from "../actions/Actions";

const initialState = {
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

export default function passwordReducer(state = initialState, action) {
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