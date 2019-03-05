import { LIST_DATA } from '../actions/contentListAction.js';

const initState = {
  list: []
}

const getListDate = (state, action) => {
  console.log(action.obj.data);
  if(action.currentPage === 0){
    return {...state, list: action.obj.data.poilist};
  }else {
    let list = state.list;
    return {...state, list: list.concat(action.obj.data.poilist)}
  }
}

const contentListReducer = (state = initState, action) => {
  switch(action.type) {
    case LIST_DATA: return getListDate(state, action);
    default: return state; 
  }
}

export default contentListReducer;