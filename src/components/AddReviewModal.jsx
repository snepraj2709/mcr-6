import React, { useContext, useEffect, useState } from 'react';
import { BiX } from 'react-icons/bi';
import { DataContext } from '../context/DataContext';
import '../css/Modal.css';

export default function AddReviewModal({ closeModal, currentRestro }) {
	const [rating, setRating] = useState('');
	const [comment, setComment] = useState('');
	const { state, dispatch } = useContext(DataContext);
	const [updatedRestro, setUpdatedRestro] = useState(currentRestro);

	const handleSubmit = e => {
		e.preventDefault();

		const updatedRatings = [
			...currentRestro.ratings,
			{
				rating: rating,
				comment: comment,
				revName: 'You',
				pp:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0'
			}
		];

		const updatedRestroWithRatings = {
			...updatedRestro,
			ratings: updatedRatings
		};
		const avgRating = calculateAverageRating(updatedRatings);

		const updatedRestroWithAvgRating = {
			...updatedRestroWithRatings,
			averageRating: avgRating
		};

		setUpdatedRestro(updatedRestroWithAvgRating);
		dispatch({ type: 'AddReview', payload: updatedRestroWithAvgRating });
		closeModal();
	};

	useEffect(() => {
		setUpdatedRestro(currentRestro);
	}, [currentRestro]);

	const calculateAverageRating = ratings => {
		if (ratings.length === 0) return 0;

		const sumOfRatings = ratings.reduce(
			(acc, curr) => acc + parseInt(curr.rating),
			0
		);
		return sumOfRatings / ratings.length;
	};

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h2 className="modal-heading">Add Review</h2>
					<BiX className="cancel-icon" onClick={() => closeModal()} />
				</div>
				<div className="modal-body">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="rating">Rating:</label>
							<select
								id="rating"
								value={rating}
								onChange={e => setRating(e.target.value)}
							>
								<option value="">Select rating</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="comment">Comment:</label>
							<textarea
								id="comment"
								value={comment}
								onChange={e => setComment(e.target.value)}
							></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}
