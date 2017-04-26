import React, { Component } from 'react';
// import './App.css';
// import from './components/FriendsList.js';
import friends from "../friends";
import Friend from '../Friend';

class FriendsList extends Component {
			constructor( props ){
				super( props );

					this.state = {
						searchText: "",
						searchLocation: "",
						orderBy: "name",
						order: "ascending"
					};
			}
			handleChange( field, event ) {
				this.setState( { [field]: event.target.value } );
			}
  render() {
	// 	const friendsList = friends
	// 	.filter( friend => friend.name.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1 )
	// .sort( ( a, b ) => a[ this.state.orderBy ] > b[ this.state.orderBy ] )
	// .map( friend => (
	// 		<Friend
	// 			currentLocation={ friend.current_location || {} }
	// 			friendCount={ friend.friend_count }
	// 			key={ friend.$$hashKey }
	// 			name={ friend.name }
	// 			pictureUrl={ friend.pic_square }
	// 			status={ friend.status ? friend.status.message : "" }
	// 		/>
	//// .filter(  function friends(){
	// 	var i = 0;
	// 	for(i = 0;i<friends.length;i++){
	// 		if (i === "current_location"){
	// 			return i;
	// 		}
	// 	}
	// })
	//
	// 	) );

		const locationList = friends

		.filter( friend => { console.log(friend.name)
			 friend.name.indexOf( this.state.searchLocation ) !== -1} )
	.sort( ( a, b ) => a[ this.state.orderBy ] > b[ this.state.orderBy ] )
	.map( friend => (
			<Friend
				currentLocation={ friend.current_location || {} }
				friendCount={ friend.friend_count }
				key={ friend.$$hashKey }
				name={ friend.name }
				pictureUrl={ friend.pic_square }
				status={ friend.status ? friend.status.message : "" }
			/>
		) );
console.log(friends[0].current_location.city)
		// const displayFriends = this.state.order === "ascending" ? friendsList : friendsList.slice().reverse();


    return (
			<div>
	<form className="form-inline searchForm" role="form">
		<div className="form-group">

			<input className="form-control"
			 placeholder="Search For Friends"
			  value={this.state.searchText}
				onChange={ this.handleChange.bind(this, "searchText")}/>

				<input className="form-control"
				 placeholder="Search For Location"
				  value={this.state.searchLocation}
					onChange={ this.handleChange.bind(this, "searchLocation")}/>

            <select className="input-medium"
						value={ this.state.orderBy }
						onChange={ this.handleChange.bind(this, "orderBy")}>
                <option value="name">Name</option>
                <option value="friend_count">#Friends</option>
            </select>

            <select className="input-medium"
						 value={this.state.order}
						 onChange={ this.handleChange.bind(this, "order")}>
                <option value={"descending"}>Descending</option>
                <option value={"ascending"}>Ascending</option>
            </select>

		</div>
	</form>

	<ul>

	{locationList}

		</ul>
</div>
    );
  }
}

export default FriendsList;
