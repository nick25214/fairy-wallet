// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import states from './states';
import ledger from './ledger';
import connection from './connection';
import accounts from './accounts';
import settings from './settings';
import transactions from './transactions';
import loading from './loading';
import currency from './currency';

const rootReducer = combineReducers({
  ledger,
  states,
  connection,
  accounts,
  router,
  settings,
  transactions,
  loading,
  currency
});

export default rootReducer;
