import { expect, it, describe } from '@jest/globals';
import { Etherspay } from '../dist';

const etp = new Etherspay('15e49de6-6c00-498f-9c35-85e8e9ebf5a8');

describe('NPM Package info', () => {
  it('Check package version', () => {
    expect(etp.utils.version).toEqual('0.1.0');
  });
});

describe('etp.utils', () => {
  it('Check API status function', async () => {
    await etp.utils.status().then(response => {
      expect(response).toEqual('Online');
    });
  });
});
