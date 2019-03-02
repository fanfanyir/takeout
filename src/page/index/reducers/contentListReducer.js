import { LIST_DATA } from '../actions/contentListAction.js';

const initState = {
  list: []
}

const getListDate = (state, action) => {
  return {...state, list: action.obj.data.poilist};
}

const contentListReducer = (state=initState, action) => {
  switch(action.type) {
    case LIST_DATA: return getListDate(state, action);
    default: return state; 
  }
}

export default contentListReducer;