/**
 * @format
 * @flow
 */

import {handleActions} from 'redux-actions';
import actions from '../actions';

type StateProps = {
  jokes: Array<Object> | null,
  loading: boolean,
};

const initialState: StateProps = {
  jokes: null,
  loading: false,
};

const getJokes = {
  [actions.getJokes.request]: state => ({
    ...state,
    loading: true,
  }),
  [actions.getJokes.success]: (state, action) => ({
    jokes: action.payload,
    loading: false,
  }),
  [actions.getJokes.error]: state => ({
    ...state,
    loading: false,
  }),
};

export default handleActions(
  {
    ...getJokes,
  },
  initialState,
);
