import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { invoiceReducer } from '../components/Invoice/Invoice.reducer';

const rootReducer = combineReducers({
  invoiceReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);
