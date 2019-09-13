export const tryCatchHandler = fn => {
  try {
    const res = fn();
    return [res, null];
  } catch (error) {
    const { message } = error;
    return [null, message];
  }
};
