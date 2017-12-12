export const SIGNUP = `SIGNUP`;
export const SIGNIN = `SIGNIN`;
export const SIGNOUT = `SIGNOUT`;
export const GENERATE_PASSWORD = `GENERATE_PASSWORD`;

// ActionCreators

export function signUpEvent() {
    return {
        type: SIGNUP
    };
}

export function signInEvent() {
    return {
        type: SIGNIN
    };
}

export function signOutEvent() {
    return {
        type: SIGNOUT
    };
}

export function generatePasswordEvent(seed_password, seed_id) {
    return {
        type: GENERATE_PASSWORD,
        seed_password,
        seed_id
    };
}
