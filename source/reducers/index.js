import { combineReducers } from 'redux';
import { dashboardReducer } from './dashboard'

export default combineReducers({
  dashboard: dashboardReducer
});