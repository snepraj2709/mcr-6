import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuItem({ restaurant, menu }) {
	const navigate = useNavigate();

	return (
		<div
			className="menu-container"
			onClick={() => navigate(`/restaurant/${restaurant?.id}`)}
		>
			{menu.map(({ name, imgSrc, price, qty }) => (
				<div className="menu-card" key={name}>
					<img src={imgSrc} alt={name} />
					<div className="menu-detail">
						<h3>{name}</h3>
						<span>
							Rs. {price} for {qty}
						</span>
						<p>{restaurant?.name}</p>
					</div>
				</div>
			))}
		</div>
	);
}
