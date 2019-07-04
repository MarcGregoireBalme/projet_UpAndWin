import { combineReducers, createStore } from 'redux';
import userReducer from './Reducers';
import LolFilterReducer from './LolFilterReducer';
import answersReducers from './answersReducers';

const reducers = combineReducers({
  users: userReducer,
  lolFilter: LolFilterReducer,
  answers: answersReducers,
});

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
