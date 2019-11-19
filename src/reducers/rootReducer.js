import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import cycleHireReducer from './cycle-hire-reducer';

export default combineReducers({
    servicesReducer,
    cycleHireReducer
});