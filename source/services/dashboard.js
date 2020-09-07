import axios from 'axios';

class DashboardService {
  _apiBase = 'https://my-json-server.typicode.com/Almost-Infinity/placeholder-db';

  getAll() {
    return axios.get(`${this._apiBase}/db`);
  }
}

export { DashboardService };