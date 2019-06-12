import { createStore } from 'redux';
import users from './Reducers';

const store = createStore(users);

export default store;
