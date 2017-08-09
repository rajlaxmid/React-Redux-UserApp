import React from 'react';
import axios from 'axios';
import User from './User';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { getUsers, pagination, selectUser } from './store/actions';

class UserList extends React.Component {
  constructor(){
     super();
     this.userSelected = this.userSelected.bind(this);
     this.paginationClickHandler = this.paginationClickHandler.bind(this);
  }
  
  componentDidMount(){ 
    console.log('page: ', this.props.page, 'pagesize: ', this.props.pagesize)
    this.props.getUsers(this.props.page || 1, this.props.pagesize || 10);
  }
  userSelected(user){
    // var selectedUsers = this.state.selectedUsers;
    // selectedUsers.push(user);
    // this.setState({selectedUsers: selectedUsers});
    // console.log(this.state.selectedUsers);
    this.props.selectUser(user);
  }

  paginationClickHandler(e){
    var target = e.target.id; //get id of btn 'prev' OR 'next'
    this.props.pagination(target, this.props.paging.page, this.props.paging.pagesize);
  }

  render() {
      if(this.props.users.length === 0){
        return(<h1>Loading...</h1>);
      }
      return (
        <div>
          {
            this.props.users.map( (item, i)=>{
              return <div key={i}>
                <User user={item} userSelected={this.userSelected}/>
              </div>
            })
          }
          <div>
            <button onClick={this.paginationClickHandler} className="btn" id="prev">&#x276C;&#x276C; Prev</button> &nbsp; 
            <button onClick={this.paginationClickHandler} className="btn" id="next">Next &#x276D;&#x276D;</button>
          </div>    
        </div> 
      );
  }
}

//export default UserList;

function mapDispatchToProps(dispatch){
  return {
    getUsers: bindActionCreators(getUsers, dispatch),
    pagination: bindActionCreators(pagination, dispatch),
    selectUser: bindActionCreators(selectUser, dispatch)
  }
}

function mapStateToProps(state){
    return{
        users: state.userlist.userlist,
        paging: {page: state.userlist.page, pagesize: state.userlist.pagesize}
    }
}

const _UserList = connect(mapStateToProps, mapDispatchToProps )(UserList);

export default _UserList;