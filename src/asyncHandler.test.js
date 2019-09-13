import { asyncTryCatchHandler } from './asyncHandler';

const NOT_A_FUNCTION = 'fn is not a function';
const mockResponse = 'mockResponse';

describe('Test asyncTryCatchHandler', () => {
  it('should return an error when no function is defined', async () => {
    const [res, err] = await asyncTryCatchHandler();

    expect(res).toBe(null);
    expect(err).toBe(NOT_A_FUNCTION);
  });

  it('should return an error when function is null', async () => {
    const [res, err] = await asyncTryCatchHandler(null);

    expect(res).toBe(null);
    expect(err).toBe(NOT_A_FUNCTION);
  });

  it('should return a response when function is defined and not async', async () => {
    const fn = jest.fn(() => mockResponse);
    const [res, err] = await asyncTryCatchHandler(fn);

    expect(fn).toHaveBeenCalled();
    expect(res).toBe(mockResponse);
    expect(err).toBe(null);
  });

  it('should return a response when an async function is defined', async () => {
    const fn = jest.fn(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      return mockResponse;
    });

    const [res, err] = await asyncTryCatchHandler(fn);

    expect(fn).toHaveBeenCalled();
    expect(res).toBe(mockResponse);
    expect(err).toBe(null);
  });
});