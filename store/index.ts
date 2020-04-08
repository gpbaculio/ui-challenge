import { createStore, combineReducers } from 'redux';

import users from './users/reducers';

const rootReducer = combineReducers({
  users
});

export type AppReduxState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);