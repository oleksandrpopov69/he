import {spawn} from 'redux-saga/effects';
import jokesSaga from './jokes';

export default function*() {
  yield spawn(jokesSaga);
}
