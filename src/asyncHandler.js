export const asyncTryCatchHandler = async fn => {
  try {
    const res = await fn();
    return [res, null];
  } catch (error) {
    const { message } = error;
    return [null, message];
  }
};
