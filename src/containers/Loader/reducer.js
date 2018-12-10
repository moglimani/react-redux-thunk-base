import * as CONSTANTS  from './../../constants';

const initState = false;

export default (state = initState, action) => {
  switch(action.type) {
    case CONSTANTS.LOADER_ON: 
      return true;
    case CONSTANTS.LOADER_OFF: 
      return false;

    default:
    return false;

  }
}