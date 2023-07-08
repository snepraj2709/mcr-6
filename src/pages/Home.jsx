import CuisineType from '../components/CuisineType';
import RestaurentMenu from '../components/RestaurentMenu';

export default function Home() {
	return (
		<div>
			<h2>Food Ordering App</h2>
			<CuisineType />
			<RestaurentMenu />
		</div>
	);
}
