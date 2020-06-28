export const SET_MESSAGE_BOARD = 'messageBoard:setMessageBoard';
export const ADD_NEW_MESSAGE = 'messageBoard:addNewMessage';
export const REPLY_TO_MESSAGE = 'messageBoard:replyToMessage';

export const setMessageBoard = (messages) => {
    return {
        type: SET_MESSAGE_BOARD,
        payload: messages
    }
}

export const addNewMessage = (newMessage) => {
    return {
        type: ADD_NEW_MESSAGE,
        payload: newMessage
    }
}

export const replyToMessage = (index, replyMessage) => {
    return {
        type: REPLY_TO_MESSAGE,
        index: index,
        payload: [replyMessage]
    }
}
