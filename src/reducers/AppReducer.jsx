import darkTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import lightTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import {CHANGE_THEME} from "../actions/AppConfigActions";

export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";

const initialState = {
    muiTheme: LIGHT_THEME,
};

export function appReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_THEME:
            return Object.assign({}, state, {
                muiTheme: action.theme
            });
    }
    return state;
}

export function getThemeStyles(theme) {
    switch(theme) {
        case LIGHT_THEME:
            return lightTheme;

        case DARK_THEME:
            return darkTheme;

        default:
            return lightTheme;
    }
}