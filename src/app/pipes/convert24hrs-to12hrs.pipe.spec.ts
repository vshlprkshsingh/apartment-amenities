import { Convert24hrsTo12hrsPipe } from './convert24hrs-to12hrs.pipe';

describe('Convert24hrsTo12hrsPipe', () => {
  it('create an instance', () => {
    const pipe = new Convert24hrsTo12hrsPipe();
    expect(pipe).toBeTruthy();
  });
});
