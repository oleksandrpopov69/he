import {select, call, put, takeEvery} from 'redux-saga/effects';
import {toResult} from 'redux-saga-helpers';
import actions from '../actions';
import API from '../../api';
import {selectJokes} from '../selectors/jokes';

function* handleGet() {
  const [data, error] = yield call(toResult(API.getJokes));
  if (!error) {
    const jokes = yield select(selectJokes);
    if (!jokes) {
      yield put(actions.getJokes.success(data));
    } else {
      const uniqueJokes = data.filter(
        joke => !jokes.find(el => el.id === joke.id),
      );
      const mergedJokes = jokes.concat(uniqueJokes);
      yield put(actions.getJokes.success(mergedJokes));
    }
  } else {
    yield put(actions.getJokes.error(error));
  }
}

export default function*() {
  yield takeEvery(actions.getJokes.request, handleGet);
}
