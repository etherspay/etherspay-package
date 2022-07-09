import { expect, it, describe } from '@jest/globals';
import { Etherspay } from '../dist';

const etp = new Etherspay('project_id');

describe('blah', () => {
  it('works', () => {
    expect(etp.get_project_id()).toEqual('project_id');
  });
});
