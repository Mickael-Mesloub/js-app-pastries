export const checkAddPastryFormValidity = (...args) => {
  return args.every((arg) => arg !== null && arg !== undefined && arg !== '');
};

export const checkUpdatePastryFormValidity = (...args) => {
  return args.some((arg) => arg !== null && arg !== undefined && arg !== '');
};
