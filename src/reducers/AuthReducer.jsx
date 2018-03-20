import {AUTHENTIFICATION_SUCCEEDED, AUTHENTIFICATION_FAILED} from "../actions/AuthActions";

const initialState = {
    isAuth: false,
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case AUTHENTIFICATION_SUCCEEDED:
            return state;

        case AUTHENTIFICATION_FAILED:
            return state;

        default:
            return state;
    }
}

