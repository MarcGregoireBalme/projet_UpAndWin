import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './Reducers';
import answers from './answersReducers';

const reducers = {
  users,
  answers,
};
const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
