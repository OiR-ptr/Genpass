import { SIGNIN, SIGNUP } from "../actions/LoginFormActions";


const initState = { userCount: 0 };

export default (state = initState, action) => {
    switch(action.type) {
        case SIGNUP:
            return Object.assign({}, state, {
                userCount: state.userCount + 1
            });

        case SIGNIN:
            return Object.assign({}, state, {
                userCount: state.userCount - 1
            });

        default:
            return state;
    }
};