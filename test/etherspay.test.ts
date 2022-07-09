import { expect, it, describe } from '@jest/globals';
import { Etherspay } from '../dist';

const etp = new Etherspay({ project_id: 'null', project_secret: 'null' });

describe('Init Etherspay pkg', () => {
  it('Check project ID', () => {
    expect(etp.get_project_id()).toEqual('project_id');
  });
});
