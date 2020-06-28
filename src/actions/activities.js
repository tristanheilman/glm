export const SET_EVENT_LIST = 'academics:setEventList';
export const ADD_NEW_EVENT = 'academics:addNewEvent';

export const setEventList = (events) => {
    return {
        type: SET_EVENT_LIST,
        payload: events
    }
}

export const addNewEvent = (newEvent) => {
    return {
        type: ADD_NEW_EVENT,
        payload: newEvent
    }
}
