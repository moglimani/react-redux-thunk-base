import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as UsersActions  from './actions';
import { bindActionCreators } from 'redux';
import Loader from '../../components/Loader';
import ReactTable from 'react-table';

//import Employees from './Employees';
import { Button } from 'reactstrap';

class Admin extends Component {
  componentDidMount(){
    this.props.fetchAllEmployees();
  }
  render(){
    const employeeTableColumns = [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Full Name',
        accessor: 'name'
      },
      {
        Header: 'Username',
        accessor: 'username'
      },
      {
        Header: 'Email Id',
        accessor: 'email'
      },
      {
        Header: 'Address',
        accessor: 'address.street'
      },
      {
        Header: 'Contact Phone',
        accessor: 'phone'
      },
      {
        Header: 'Organization',
        accessor: 'company.name'
      },
      {
        Header: ' ',
        accessor: 'id',
        Cell: props =>  <Button color="danger" onClick = {(state)=>{this.props.deleteEmployee(props.original.id)} }>Delete</Button>
      }
    ];

    console.log(this.props);

    return (
      
      <div>
        <Loader isLoading={this.props.isLoading} />
        <h2>Users</h2>
        <ReactTable pageSize={5} showPageSizeOptions = {false}  data={this.props.employees} columns = {employeeTableColumns} 
        resolveData={data => data.map(row => row)} sorted={[{id:'name',desc:false}]} />
      </div>
    );
  };
}
const mapStateToProps = (state) => {
  return {
    employees: state.employees,
    users: state.users,
    isLoading: state.isLoading
  }
}

let mapDispatchActions = {
  fetchAllEmployees: UsersActions.fetchAllEmployees,
  deleteEmployee: UsersActions.deleteEmployee
};

const mapDispatchToProps = (dispatch) => 
    bindActionCreators(mapDispatchActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Admin);