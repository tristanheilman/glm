import update from 'immutability-helper';

import {
    SET_EVENT_LIST,
    ADD_NEW_EVENT
} from '../actions/activities';

import { eventData } from './data';

const initialState = {
    events: eventData
}

export default function activitiesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EVENT_LIST:
            return Object.assign({}, state, {
                events: action.payload
            });
        case ADD_NEW_EVENT:
            return update(state, {
                events: {$push: [action.payload]}
            })
        default:
            return state;
    }
}
