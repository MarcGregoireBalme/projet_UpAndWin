// eslint-disable-next-line import/prefer-default-export
export function dispatch(value) {
  // eslint-disable-next-line no-console
  return {
    type: 'CHECK_USER',
    payload: value,
  };
}
