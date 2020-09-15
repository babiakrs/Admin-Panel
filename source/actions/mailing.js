import {
  MAILING_REQUEST,
  MAILING_RECEIVE,
  MAILING_RECEIVE_FAILED
} from './types';
import { MailingService } from 'Services';

const requestData = () => ({
  type: MAILING_REQUEST
});

const receiveData = (payload) => ({
  type: MAILING_RECEIVE,
  payload
});

const receiveFailed = (err) => ({
  type: MAILING_RECEIVE_FAILED,
  err
});

export const fetchMailingData = () => {
  let mailingService = new MailingService();
  return (dispatch) => {
    dispatch(requestData());
    mailingService.getMails()
      .then(({ data }) => dispatch(receiveData(data)))
      .catch((err) => dispatch(receiveFailed(err)));
  };
};