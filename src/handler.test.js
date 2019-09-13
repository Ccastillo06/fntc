import { tryCatchHandler } from './handler';

const NOT_A_FUNCTION = 'fn is not a function';
const mockResponse = 'mockResponse';

describe('Test tryCatchHandler', () => {
  it('should return an error when no function is defined', () => {
    const [res, err] = tryCatchHandler();

    expect(res).toBe(null);
    expect(err).toBe(NOT_A_FUNCTION);
  });

  it('should return an error when function is null', () => {
    const [res, err] = tryCatchHandler(null);

    expect(res).toBe(null);
    expect(err).toBe(NOT_A_FUNCTION);
  });

  it('should return a response when function is defined', () => {
    const fn = jest.fn(() => mockResponse);
    const [res, err] = tryCatchHandler(fn);

    expect(fn).toHaveBeenCalled();
    expect(res).toBe(mockResponse);
    expect(err).toBe(null);
  });
});
