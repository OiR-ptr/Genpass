import moment from "moment";

export const ADD_TAG = 'ADD_TAG';


export function addTagEvent(tagID) {
    return {
        type: ADD_TAG,
        tagID: tagID,
        updateAt: moment().format('LL')
    };
}

