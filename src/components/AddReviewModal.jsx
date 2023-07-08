import React, { useContext, useState } from 'react';
import { BiX } from 'react-icons/bi';
import { DataContext } from '../context/DataContext';
import '../css/Modal.css';

export default function AddReviewModal({ closeModal, currentRestro }) {
	const [rating, setRating] = useState('');
	const [comment, setComment] = useState('');
	const { state, dispatch } = useContext(DataContext);

	const handleRatingChange = e => {
		setRating(e.target.value);
	};

	const handleCommentChange = e => {
		setComment(e.target.value);
	};

	let updatedRestaurent = {
		...currentRestro,
		ratings: [
			...currentRestro.ratings,
			{
				rating: rating,
				comment: comment,
				revName: 'Riya',
				pp:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0'
			}
		]
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({ type: 'AddReview', payload: updatedRestaurent });
		console.log('updatedRestaurent', updatedRestaurent);
		closeModal();
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
							<select id="rating" value={rating} onChange={handleRatingChange}>
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
								onChange={handleCommentChange}
							></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}
