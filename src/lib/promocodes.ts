import axios from 'axios';

interface PromoCode {
  name: string;
  code: string;
  active?: boolean;
  amount_off?: number;
  percent_off?: number;
  max_redemptions?: number;
  min_amount?: number;
  first_time_transaction?: boolean;
}

interface PromoParams {
  active?: boolean;
  code?: string;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
  limit?: number;
}

export default class Promocodes {
  private secret: string;

  constructor(project_secret: string) {
    this.secret = project_secret;
  }

  async create(promo_code: PromoCode): Promise<object> {
    try {
      const res = await axios.post(
        `http://localhost:5000/v1/promotion_codes/`,
        {
          ...promo_code,
        },
        {
          headers: { 'x-api-key': this.secret },
        }
      );

      return res.data;
    } catch (error) {
      return { error };
    }
  }

  async get(params: PromoParams): Promise<object> {
    try {
      const res = await axios.get('http://localhost:5000/v1/promotion_codes/', {
        headers: { 'x-api-key': this.secret },
        params: {
          ...params,
        },
      });

      return res.data;
    } catch (error) {
      return { error };
    }
  }
}
