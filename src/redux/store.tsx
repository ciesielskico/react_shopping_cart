import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { reducer } from './rootReducer';

const persistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(persistedReducer, middleware);

const persistor = persistStore(store);

export { persistor, store };
