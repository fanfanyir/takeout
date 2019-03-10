import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer.js';
import contentListReducer from './contentListReducer.js';
import orderReducer from './orderReducer.js';
import scrollViewReducer from 'component/ScrollView/scrollViewReducer.js';


import { combineReducers } from 'redux';

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer,
  scrollViewReducer,
  orderReducer
})

export default reducers;