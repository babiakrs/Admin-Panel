import axios from 'axios';

class MailingService {
  _apiBase = 'https://my-json-server.typicode.com/Almost-Infinity/placeholder-db';

  getMails() {
    return axios.get(`${this._apiBase}/tickets`);
  }
}

export { MailingService };