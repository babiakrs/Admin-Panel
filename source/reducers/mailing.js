import {
  MAILING_REQUEST,
  MAILING_RECEIVE,
  MAILING_RECEIVE_FAILED
} from 'Actions/types';
import initialState from './initial-state';

export const mailingReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAILING_REQUEST: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }

    case MAILING_RECEIVE: {
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      });
    }

    case MAILING_RECEIVE_FAILED: {
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