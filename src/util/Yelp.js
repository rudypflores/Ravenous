const apiKey = 'nPeEc14pMhuR3ietRX03csj7WGree5JL5CKm63odAebMyii1ILvPcDdT_XMPf6G6eZyEsZYnBFVwdw4UQMACFSXxeA7z6o0BOSfTj0x3u_N4qNgM8FTQ0yhYip2EXHYx';

const yelp = {

	//Search and utilize CORS anywhere for API request
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: {Authorization:`Bearer ${apiKey}`}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count
					};
				});
			}

		});
	}
};

export default yelp;