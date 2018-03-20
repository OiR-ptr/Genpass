export const AUTHENTIFICATION_SUCCEEDED = 'AUTHENTIFICATION_SUCCEEDED';
export const AUTHENTIFICATION_FAILED = 'AUTHENTIFICATION_FAILED';

export function AuthSucceededEvent() {
    return {
        type: AUTHENTIFICATION_SUCCEEDED,
    };
}

export function AuthFailedEvent() {
    return {
        type: AUTHENTIFICATION_FAILED,
    };
}

