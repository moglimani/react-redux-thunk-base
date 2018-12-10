import * as CONSTANTS  from '../../constants';

const initState = [];

export default (state = initState, action) => {
  switch(action.type) {
    case CONSTANTS.FETCH_EMPLOYEES: 
      return [
        ...action.payload
      ];
    case CONSTANTS.DELETE_EMPLOYEES: 
    return [...action.payload];

    default:
    return [...state]

  }
}
