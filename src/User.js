import React from 'react';
import UserProfileImage from './UserProfileImage'; 


class User extends React.Component {
	constructor(){
		super();
		this.state = {isOpen: false, selected: false};
		this.clickHandler = this.clickHandler.bind(this);
		this.selected = this.selected.bind(this);
	}

	clickHandler(){
		this.setState({isOpen: !this.state.isOpen});
	}

	selected(){
		this.setState({selected: !this.state.selected});
		console.log(this.state)
	}



	render(){
		var user = this.props.user;
		return(
			<div className="user-box">
			    <div>
					<div className="collapse-header">
						<UserProfileImage pic={user.picture.thumbnail} />
						<span className="user-name camel-case">{user.name.title+' '+user.name.first+ ' '+user.name.last}</span>
						<span onClick={this.clickHandler} className="expand-icon pull-right">&#x276E;</span>
					</div>
					<div className={"user-detail-body " +(this.state.isOpen ? '':'hide' )}>
						<div><span><b>Email: </b>{user.email}</span></div>
						<div><span><b>Cell: </b>{user.cell}</span> | <span><b>phone: </b>{user.phone}</span></div>
						<div><span><b>Address: </b>{user.location.street+' '+user.location.city+' '+user.location.postcode+' '+user.location.state}</span></div>
					    <div>
							{this.state.selected===false ? <button className="btn"  onClick={ ()=>{this.selected(); this.props.userSelected(user)} }>Select User</button> : <span className="user-selected-text">User Selected</span>}
							
						</div>
					</div>
				</div>
			</div>
		)	
	} 
};

export default User;