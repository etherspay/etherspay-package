import axios from 'axios';

const version = require('../package.json').version;

export default class Utils {
  async status(): Promise<string> {
    try {
      const res = await axios.get('http://localhost:5000/v1/');
      return res.data.status;
    } catch (err) {
      return 'Offline';
    }
  }

  version: string = version;
}
