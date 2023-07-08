import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import { DataContext } from '../context/DataContext';

export default function RestaurantMenu() {
	const { state } = useContext(DataContext);

	return (
		<div>
			{state?.restaurants?.map(restaurant => (
				<div key={restaurant.id}>
					<h2>Dishes by {restaurant.name}</h2>
					<MenuItem restaurant={restaurant} menu={restaurant.menu} />
				</div>
			))}
		</div>
	);
}
