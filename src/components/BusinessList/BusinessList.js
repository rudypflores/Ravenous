/*
	The Business List Component for Ravenous
	@Author Rudy Flores
	@Date February 14, 2019
*/

//Import React Model and Style Properties
import React from 'react';
import './BusinessList.css';

//Import for simulation of different Businesses
import Business from '../Business/Business';

//The Business List Component
class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				<Business />
			  	<Business /> 
			  	<Business /> 
			  	<Business /> 
			  	<Business /> 
			  	<Business />
			</div>
		);
	}
};

export default BusinessList;