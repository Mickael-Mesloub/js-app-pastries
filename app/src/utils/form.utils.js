export const checkFormValidity = (...args) => {
  return args.every((arg) => arg !== null && arg !== undefined && arg !== '');
};
