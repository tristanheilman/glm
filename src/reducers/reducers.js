// reducers
import { combineReducers } from 'redux';
import academicsReducer from './academics';
import activitiesReducer from './activities';
import messageBoardReducer from './messages';
import userReducer from './user';

export default combineReducers({
    academics: academicsReducer,
    activities: activitiesReducer,
    messageBoard: messageBoardReducer,
    user: userReducer
});
