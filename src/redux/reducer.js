export const reducer = (action, state) => {
  if (action === 'ADD') {
    return { counter: state.counter + 1 };
  } else if (action === 'SUBSTRACT') {
    return { counter: state.counter - 1 };
  }
  return state;
};
