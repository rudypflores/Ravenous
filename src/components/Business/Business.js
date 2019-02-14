/*
	The Business Component for Ravenous
	@Author Rudy Flores
    @Date February 14, 2019
*/

//React Model
import React from 'react';

//Import of Business.css
import Style from './business.css';

//The Business Object
const business = {imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90
};

//Main Component Settings
class Business extends React.Component {
	render() {
		return (
			<div className="Business">
			  	<div className="image-container">
			    	<img 
			    		src= {business.imageSrc} 
			    		alt='Picture of pizza'/>
			  	</div>
			  		<h2>{business.name}</h2>
			 	 <div className="Business-information">
			    	<div className="Business-address">
			      		<p>{business.address}</p>
			      		<p>{business.city}</p>
			      		<p>{business.state + ' ' + business.zipCode}</p>
			    	</div>
			    <div className="Business-reviews">
			      	<h3>{business.category}</h3>
			      	<h3 className="rating">{business.rating}</h3>
			      	<p>{business.reviewCount}</p>
			    </div>
			  </div>
			</div>
		);
	}
};

//Export the Business Component
export default Business;