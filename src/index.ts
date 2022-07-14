import Payments from './lib/payments';
import Transactions from './lib/transactions';
import Utils from './lib/utils';

import axios from 'axios';

export class Etherspay {
  private secret: string;

  payments: Payments;
  utils: Utils;
  transactions: Transactions;

  constructor(project_secret: string) {
    this.secret = project_secret;
    this.payments = new Payments(this.secret);
    this.utils = new Utils(this.secret);
    this.transactions = new Transactions(this.secret);
  }

  async balance(): Promise<string> {
    try {
      const res = await axios.get('http://localhost:5000/v1/balance', {
        headers: { 'x-api-key': this.secret },
      });
      return res.data;
    } catch (err) {
      return 'Error occured';
    }
  }
}
