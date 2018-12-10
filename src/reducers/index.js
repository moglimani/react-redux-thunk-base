import { combineReducers } from 'redux';
import employeesReducer  from './../containers/AdminPage/reducer';
import loaderReducer from './../containers/Loader/reducer'

const rootReducer = combineReducers({
    employees: employeesReducer,
    isLoading: loaderReducer
  });

export default rootReducer;
