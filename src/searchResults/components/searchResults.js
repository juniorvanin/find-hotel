import React from "react"

import Hotel from "searchResults/hotel/components/hotel"

import "searchResults/searchResults.css"

class SearchResults extends React.Component {
	render() {
		const hotels = [
			{
				id: "24556",
				generalDetails: {
					title: "Quentin Amsterdam Hotel",
					numberOfStars: 3,
					locationMessage: "120 m to city center - Jordan",
					usersRating: 7.8,
					tags: ["Good food", "Family friendly", "Great location", "Great staff"]
				},
				priceDetails: {
					regularPrice: "€ 115",
					bestPrice: {
						amount: "€ 104",
						freeCancellation: true,
						link:  "Booking.com"
					},
					otherPrices: [
						{
							site: "priceline.com",
							amount: "€115"
						},
						{
							site: "expedia.com",
							amount: "€132"
						},
						{
							site: "7ideas.com",
							amount: "€129"
						}
					]
				}
			},
			{
				id: "23324",
				generalDetails: {
					title: "Hotel Torenzicht",
					numberOfStars: 5,
					locationMessage: "300 m to city center - Jordan",
					usersRating: 9.2,
					tags: ["Amazing SPA", "Good food", "Family friendly", "Very clean"]
				},
				priceDetails: {
					regularPrice: "€ 254",
					bestPrice: {
						amount: "€ 223",
						freeCancellation: true,
						link:  "Expedia.nl"
					},
					otherPrices: [
						{
							site: "booking.com",
							amount: "€240"
						},
						{
							site: "agoda.com",
							amount: "€256"
						},
						{
							site: "hoteis.com",
							amount: "€229"
						}
					]
				}
			},
			{
				id: "23426",
				generalDetails: {
					title: "Doubletree by Hilton Hotel Amsterdam Central Station",
					numberOfStars: 4,
					locationMessage: "70 m to city center - Jordan",
					usersRating: 8.9,
					tags: ["Central Station", "Good food", "24 hours reception", "Great restaurant", "Canal view"]
				},
				priceDetails: {
					regularPrice: "€ 531",
					bestPrice: {
						amount: "€ 495",
						freeCancellation: true,
						link:  "Hotels.com"
					},
					otherPrices: [
						{
							site: "booking.com",
							amount: "€499"
						},
						{
							site: "expedia.com",
							amount: "€550"
						},
						{
							site: "7ideas.com",
							amount: "€511"
						}
					]
				}
			}
		]

		return (
			<ul>
				{
					hotels.map((hotel) => (
						<Hotel
							key={ hotel.id }
							generalDetails={ hotel.generalDetails }
							priceDetails={ hotel.priceDetails }
						/>
					))
				}
			</ul>
		)
	}
}

export default SearchResults
