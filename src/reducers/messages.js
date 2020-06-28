import update from 'immutability-helper';

import {
    SET_MESSAGE_BOARD,
    ADD_NEW_MESSAGE,
    REPLY_TO_MESSAGE
} from '../actions/messages';

import { messageData } from './data';

const initialState = {
    messages: messageData
}

export default function messageBoardReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MESSAGE_BOARD:
            return Object.assign({}, state, {
                messages: action.payload
            });
        case ADD_NEW_MESSAGE:
            return update(state, {
                messages: {$push: [action.payload]}
            })
        case REPLY_TO_MESSAGE:
            return update(state, {
                messages: {
                    [action.index]: {
                        replies: {$push: action.payload}
                    }
                }
            });
        default:
            return state;
    }
}
