/**
 * @format
 * @flow
 */

import {combineReducers} from 'redux';

import jokesReducer from './jokes';

export default combineReducers({
  jokes: jokesReducer,
});
