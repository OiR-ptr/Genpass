
export const GENERATE_PASSWORD = `GENERATE_PASSWORD`;

export function generatePassword(seed_password, seed_id) {
    return {
        type: GENERATE_PASSWORD,
        seed_password,
        seed_id
    };
}