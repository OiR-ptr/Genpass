import {AUTHENTIFICATION_SUCCEEDED, AUTHENTIFICATION_FAILED} from "../actions/AuthActions";

const initialState = {
    isAuth: false,
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case AUTHENTIFICATION_SUCCEEDED:
            console.log("auth reducer : isAuth success");
            return Object.assign({}, state, {
                isAuth: true,
            });

        case AUTHENTIFICATION_FAILED:
            console.log("auth reducer : isAuth fail");
            return Object.assign({}, state, {
                isAuth: false,
            });

        default:
            return state;
    }
}

