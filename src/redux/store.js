import reducer from './reducer.js';
import initialState from './initialState.js';

const Store = function(initialState = {}, reducer) {
  
  //notre objet state
  let state = initialState;
  
  let listeners = [];

  //la methode pour accéder au
  //au state depuis l'extèrieur
  const getState = () => state;

  const dispatch = action => {
    state = reducer(action, state);
    listeners.forEach(fn => fn());
  };

  const subscribe = fn => listeners.push(fn);

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const store = new Store(initialState, reducer);
export default store;