/**
 * @format
 * @flow
 */

import {createSelector} from 'reselect';

const selectJokesReducer = (state: Object) => state && state.jokes;

const selectJokes = createSelector(
  selectJokesReducer,
  reducer => reducer.jokes,
);

const selectLoading = createSelector(
  selectJokesReducer,
  reducer => reducer.loading,
);

export {selectJokes, selectLoading};
