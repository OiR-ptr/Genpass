import moment from "moment";

export const ADD_TAG = 'ADD_TAG';
export const SELECT_TAG = 'SELECT_TAG';

export function addTagEvent(tagID) {
    alert("Occurred add tag event." + tagID)
    return {
        type: ADD_TAG,
        tagID: tagID,
        updateAt: moment().format('LL')
    };
}

export function selectTagEvent(tagID) {
    alert("Occurred select tag event." + tagID)
    return {
        type: SELECT_TAG,
        tagID: tagID,
    }
}
