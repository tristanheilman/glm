import {
    SET_USER_INFO,
    UPDATE_DISPLAY_NAME
} from '../actions/user';

const initialState = {
    info: {}
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return Object.assign({}, state, {
                info: action.payload
            });
        case UPDATE_DISPLAY_NAME:
            return {...state, info: {
                ...state.info, name: action.payload
            }};
        default:
            return state;
    }
}
