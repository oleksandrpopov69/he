import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from '../sagas';
import storage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (cb: ?() => void) => {
  const store = createStore(
      persistedReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  persistStore(store, null, () => {
    if (typeof cb === 'function') {
      cb();
    }
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
