import {
  DASHBOARD_REQUEST,
  DASHBOARD_RECEIVE,
  DASHBOARD_RECEIVE_FAILED
} from 'Actions/types';
import initialState from './initial-state';

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }

    case DASHBOARD_RECEIVE: {
      return Object.assign({}, state, {
        isFetching: false,
        data: {
          currencies: action.payload
        }
      });
    }

    case DASHBOARD_RECEIVE_FAILED: {
      return Object.assign({}, state, {
        isFetching: false,
        fetchingError: action.err
      });
    }

    default: {
      return state;
    }
  }
};