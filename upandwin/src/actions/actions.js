// eslint-disable-next-line import/prefer-default-export
export function login(value) {
  // eslint-disable-next-line no-console
  return {
    type: 'LOGIN',
    payload: value,
  };
}
