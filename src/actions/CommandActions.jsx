export const SIGNUP = `SIGNUP`;
export const SIGNIN = `SIGNIN`;
export const SIGNOUT = `SIGNOUT`;
export const GENERATE_PASSWORD = `GENERATE_PASSWORD`;

export function signUp() {
    return {
        type: SIGNUP
    };
}

export function signIn() {
    return {
        type: SIGNIN
    };
}

export function signOut() {
    return {
        type: SIGNOUT
    };
}

export function generatePassword(seed_password, seed_id) {
    return {
        type: GENERATE_PASSWORD,
        seed_password,
        seed_id
    };
}
