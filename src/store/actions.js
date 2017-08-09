import axios from 'axios';

export const GET_USERLIST = 'GET_USERLIST';
export const SELECTED_USERS = 'SELECTED_USERS';



export const getUsers = (page, pagesize) => dispatch => {
    var URL = 'https://randomuser.me/api/?page='+page+'&results='+pagesize+'&seed=abc';
    axios.get(URL).then(function(result){
        dispatch({
            type: GET_USERLIST, 
            userlist: result.data.results,
            page: page,
            pagesize: pagesize
        });
    })
}

export const pagination = (pagingType, page, pagesize) => dispatch => {
    if(pagingType === 'prev' ){
        page > 1 ? dispatch(getUsers(page-1, pagesize)) : null
    }
    if(pagingType === 'next' ){
        dispatch(getUsers(page+1, pagesize));
    }
}

export const selectUser = (item) => dispatch => {
    dispatch({
        type: SELECTED_USERS,
        user: item
    })
}




function gerUrl(page){
     var page = page || this.state.userlist.page;
     var pagesize = this.state.userlist.pagesize;
     var URL = 'https://randomuser.me/api/?page='+page+'&results='+pagesize+'&seed=abc';
     
     return URL;
}