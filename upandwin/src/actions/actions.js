export default function dispatch(value) {
  // eslint-disable-next-line no-console
  console.log(value);
  return {
    type: 'CHECK_USER',
    payload: value,
  };
}
