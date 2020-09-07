import {
  DASHBOARD_REQUEST,
  DASHBOARD_RECEIVE,
  DASHBOARD_RECEIVE_FAILED
} from './types';
import { DashboardService } from 'Services';

const requestData = () => ({
  type: DASHBOARD_REQUEST
});

const receiveData = (payload) => ({
  type: DASHBOARD_RECEIVE,
  payload
});

const receiveFailed = (err) => ({
  type: DASHBOARD_RECEIVE_FAILED,
  err
});

export const fetchDashboardData = () => {
  let dashboardService = new DashboardService();
  return (dispatch) => {
    dispatch(requestData());
    dashboardService.getAll()
      .then(({ data }) => dispatch(receiveData(data)))
      .catch((err) => dispatch(receiveFailed(err)));
  };
};