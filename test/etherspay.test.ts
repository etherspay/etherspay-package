import { expect, it, describe } from '@jest/globals';
import { Etherspay } from '../dist';

const etp = new Etherspay('project_secret');

describe('NPM Package info', () => {
  it('Check package version', () => {
    expect(etp.utils.version).toEqual('0.1.0');
  });
});

describe('etp.payments', () => {
  it('Check package version', () => {
    expect(etp.payments.get_payments()).toEqual('project_secret');
  });
});

describe('etp.utils', () => {
  it('Check API status function', async () => {
    await etp.utils.status().then(response => {
      expect(response).toEqual('Online');
    });
  });
});
