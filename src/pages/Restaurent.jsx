import React, { useContext, useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import AddReviewModal from '../components/AddReviewModal';
import { DataContext } from '../context/DataContext';

export default function Restaurant() {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const { id } = useParams();
	const { state } = useContext(DataContext);
	let currentRestro = state.restaurants.find(restro => restro.id == id);
	const [current, setCurrent] = useState(currentRestro);

	const { name, address, menu, ratings, averageRating, description } = current;

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	useEffect(() => {
		const currentRestro = state.restaurants.find(restro => restro.id == id);

		setCurrent(currentRestro);
	}, [modal]);

	return (
		<div>
			<div className="restaurant-conatiner">
				<BiArrowBack className="icon" onClick={() => navigate('/')} />
				<div className="menu-detail">
					<h2>{name}</h2>
					{menu.map(item => (
						<span>{item.name} , </span>
					))}
					<p>{address}</p>
					<b>Average rating: {averageRating}</b>
					<hr />
				</div>
				<button className="primary-button" onClick={openModal}>
					Add Review
				</button>
				{modal && (
					<AddReviewModal
						closeModal={closeModal}
						currentRestro={currentRestro}
					/>
				)}
			</div>
			<div className="menu-detail">
				<h2>Reviews</h2>
				{ratings.map(({ rating, comment, revName, pp }) => (
					<div className="rating-container">
						<div className="rating-detail">
							<div className="rating-user">
								<img src={pp} alt={revName} />
								<b>{revName}</b>
							</div>
							<h4>
								{rating}
								<AiFillStar />
							</h4>
						</div>
						<p>{comment}</p>
					</div>
				))}
			</div>
		</div>
	);
}
