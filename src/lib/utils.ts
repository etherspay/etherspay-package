import axios from 'axios';

const version = require('../package.json').version;

export default class Utils {
  private secret: string;

  constructor(project_secret: string) {
    this.secret = project_secret;
  }

  async status(): Promise<string> {
    try {
      const res = await axios.get('http://localhost:5000/v1/', {
        headers: { 'x-api-key': this.secret },
      });
      return res.data.status;
    } catch (err) {
      return 'Offline';
    }
  }

  version: string = version;
}
