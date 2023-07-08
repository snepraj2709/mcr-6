import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function CuisineType() {
	const { state } = useContext(DataContext);
	return (
		<div>
			<h4>Select your Cuisine</h4>
			<div>
				{state?.cuisineTypes?.map(({ id, name }) => (
					<button key={id}>{name}</button>
				))}
			</div>
		</div>
	);
}
