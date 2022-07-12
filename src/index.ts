import Payments from './lib/payments';
import Utils from './lib/utils';

export class Etherspay {
  private secret: string;

  payments: Payments;
  utils: Utils;

  constructor(project_secret: string) {
    this.secret = project_secret;
    this.payments = new Payments(this.secret);
    this.utils = new Utils(this.secret);
  }
}
