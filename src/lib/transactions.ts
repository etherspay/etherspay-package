import axios from 'axios';

export default class Transactions {
  private secret: string;

  constructor(project_secret: string) {
    this.secret = project_secret;
  }

  async list(): Promise<string | object> {
    try {
      const res = await axios.get('http://localhost:5000/v1/transactions', {
        headers: { 'x-api-key': this.secret },
      });
      return res.data;
    } catch (err) {
      return 'Offline';
    }
  }
}
