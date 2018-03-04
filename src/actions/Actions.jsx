import moment from "moment";

export const ADD_TAG = 'ADD_TAG';
export const SELECT_TAG = 'SELECT_TAG';
export const SAVE_TAG = 'SAVE_TAG';

export function addTagEvent(tagID) {
    console.log("Occurred add tag event." + tagID)
    return {
        type: ADD_TAG,
        tagID: tagID,
        updateAt: moment().format('LL')
    };
}

export function selectTagEvent(tagID) {
    console.log("Occurred select tag event." + tagID)
    return {
        type: SELECT_TAG,
        tagID: tagID,
    }
}

export function saveTagEvent(obj) {
    console.log("Occurred save tag event." + obj);
    return {
        type: SAVE_TAG,
        obj: obj,
    }
}
