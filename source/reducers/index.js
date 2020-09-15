import { combineReducers } from 'redux';
import { dashboardReducer } from './dashboard'
import { mailingReducer } from './mailing'

export default combineReducers({
  dashboard: dashboardReducer,
  mailing: mailingReducer
});