export default function(initialState = {}, reducer) {
  
  //notre objet state
  let state = initialState;
  
  //la methode pour accéder au
  //au state depuis l'extèrieur
  const getState = () => state;

  const dispatch = action => {
    if (action === 'ADD') {
      state.counter = state.counter + 1;
    } else if (action === 'SUBSTRACT') {
      state.counter = state.counter - 1;
    }
  };

  return {
    getState,
    dispatch,
  };
};
