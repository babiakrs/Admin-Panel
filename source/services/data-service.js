import axios from 'axios';

class DataService {
  _apiBase = 'https://pastebin.com/raw/PGnDrghv';

  getAll() {
    return axios.get(`${this._apiBase}`);
  }
}

export { DataService };