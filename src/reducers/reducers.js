// reducers
import { combineReducers } from 'redux';
import academicsReducer from './academics';
import activitiesReducer from './activities';
import messageBoardReducer from './messages';

export default combineReducers({
    academics: academicsReducer,
    activities: activitiesReducer,
    messageBoard: messageBoardReducer
});
