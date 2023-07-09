import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

export default function CuisineType() {
	const { state, dispatch } = useContext(DataContext);
	const [cuisine, setCuisine] = useState('');

	const restroData = JSON.parse(localStorage.getItem('data'));

	const cuisineRestaurentData = restroData?.restaurants?.filter(restaurant => {
		const updatedMenu = restaurant?.menu;

		const hasCuisineType = updatedMenu.some(
			menuItem =>
				menuItem.name.toLowerCase().includes(cuisine) ||
				restaurant.description.toLowerCase().includes(cuisine)
		);
		return hasCuisineType;
	});

	useEffect(() => {
		dispatch({ type: 'specialCuisineData', payload: cuisineRestaurentData });
	}, [cuisine]);

	return (
		<div>
			<h4>Select your Cuisine</h4>
			<div className="button-container">
				{state?.cuisineTypes?.map(({ id, name }) => (
					<button
						key={id}
						className="secondary-button"
						onClick={() => setCuisine(name.toLowerCase())}
					>
						{name}
					</button>
				))}
			</div>
		</div>
	);
}
