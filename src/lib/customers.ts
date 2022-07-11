export default class Customers {
  private secret: string;

  constructor(project_secret: string) {
    this.secret = project_secret;
  }

  get_payments(): string {
    return this.secret;
  }
}
