import expect from 'expect';

import Signal from '../src/';

describe('Signal', () => {
  let signal;
  const callback1 = expect.createSpy();
  const callback2 = expect.createSpy();
  const value = 1;

  beforeEach(() => {
    callback1.reset();
    callback2.reset();
    signal = Signal();
    signal.on(callback1);
    signal.on(callback2);
  });

  describe('#on', () => {
    beforeEach(() => {
      signal.emit(value);
    });

    [callback1, callback2].forEach((callback, i) => {
      it(`calls callback${i + 1} once`, () => {
        expect(callback.calls.length).toBe(1);
      });

      it(`calls callback${i + 1} with the emitted value`, () => {
        expect(callback).toHaveBeenCalledWith(value);
      });
    });
  });

  describe('#off', () => {
    beforeEach(() => {
      signal.off(callback1);
      signal.off(callback2);
      signal.emit(value);
    });

    [callback1, callback2].forEach((callback, i) => {
      it(`does not call callback${i + 1}`, () => {
        expect(callback.calls.length).toBe(0);
      });
    });
  });
});
