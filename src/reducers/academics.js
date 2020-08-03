import update from 'immutability-helper';

import {
    SET_CLASS_LIST,
    UPDATE_CLASS_LIST
} from '../actions/academics';

const initialState = {
    classes: []
}

export default function academicsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CLASS_LIST:
            return Object.assign({}, state, {
                classes: action.payload
            });
        case UPDATE_CLASS_LIST:
            return update(state, {
                classes: {
                    [action.index]: {$set: action.payload}
                }
            })
        default:
            return state;
    }
}
