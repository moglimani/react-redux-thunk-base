import axios from 'axios';
import * as CONSTANTS from '../../constants';

const apiURL = `https://jsonplaceholder.typicode.com/`;

export const updateLoader = (val) => {
    let loaderType = (val===true)?CONSTANTS.LOADER_ON:CONSTANTS.LOADER_OFF;
    return {
        type: loaderType
    }
}
export const fetchEmployees = (employees) => {
    return {
        type: CONSTANTS.FETCH_EMPLOYEES,
        payload: employees
    }
} 

export const deleteEmployeeHandler = (id,employees) =>{
    let emp = employees.filter((e) => e.id !== id);
    return {
        type: CONSTANTS.DELETE_EMPLOYEES,
        payload: emp
    }
}
export const fetchAllEmployees = () => {
    return (dispatch) => {
        dispatch(updateLoader(true));
         return axios.get(`${apiURL}users`)
            .then(res => {
                dispatch(fetchEmployees(res.data));
                dispatch(updateLoader(false));
            })
            .catch(error => {
                throw(error);
            });
    }
}

export const deleteEmployee = (id) => {
   
    return (dispatch,getState) =>{
        dispatch(updateLoader(true));
        let employees = getState().employees;
        dispatch(deleteEmployeeHandler(id,employees));
        dispatch(updateLoader(false));
    }
    
}



