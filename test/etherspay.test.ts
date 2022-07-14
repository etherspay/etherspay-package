import { expect, it, describe } from '@jest/globals';
import { Etherspay } from '../dist';

const etp = new Etherspay('320c4c7c-db1c-4909-9e0e-a67061d74443');

describe('NPM Package info', () => {
  it('Check package version', () => {
    expect(etp.utils.version).toEqual('0.1.0');
  });
});

// describe('etp.balance()', () => {
//   it('Check project balance', async () => {
//     await etp.balance().then(response => {
//       console.log(response);
//     });
//   });
// });

describe('etp.promocodes', () => {
  // it('Create promo code', async () => {
  //   const promo: object = await etp.promocodes.create({
  //     name: 'Test',
  //     code: 'YES4',
  //   });

  //   console.log(promo);
  // });

  it('Get promo codes', async () => {
    const promo: object = await etp.promocodes.get({
      code: 'YES3',
    });

    console.log(promo);
  });
});

// describe('etp.transactions', () => {
//   it('List all transactions', async () => {
//     await etp.transactions.list().then(response => {
//       console.log(response);
//     });
//   });
// });

describe('etp.utils', () => {
  it('Check API status function', async () => {
    await etp.utils.status().then(response => {
      expect(response).toEqual('Online');
    });
  });
});
