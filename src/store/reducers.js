import {GET_USERLIST, SELECTED_USERS} from './actions';

import { combineReducers } from 'redux';

const getUserList = (state={userlist:[], page: 1, pagesize: 10}, action) => {
    switch(action.type){
        case GET_USERLIST:
            return { userlist: action.userlist, page: action.page, pagesize: action.pagesize } 
        default: 
            return state;
    }
}

const selectedUserList = (state={selectedUsers:[]}, action) => {
    switch(action.type){
        case SELECTED_USERS:
            var allusers = state.selectedUsers;
            allusers.push(action.user);
            return { selectedUsers: allusers } 
        default: 
            return state;
    }
}


const allReducers = combineReducers({
    userlist: getUserList,
    selectedUsers: selectedUserList
});

export default allReducers;