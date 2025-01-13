import {useAppDispatch, useAppSelector} from '../services/redux.ts';
import {ChangeEvent, FormEvent, useState} from 'react';
import {postReviewAction} from '../../store/api-actions.ts';
import {MAX_REVIEW_COMMENT_LENGTH, MIN_REVIEW_COMMENT_LENGTH} from '../../const.ts';
import {getOfferDetailed} from '../../store/detailed-data-process/detailed-data-process.selectors.ts';

export function useReviewForm() {
  const dispatch = useAppDispatch();
  const offerId = useAppSelector(getOfferDetailed)?.id;
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => setComment(evt.target.value);
  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value));
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (offerId) {
      setFormSubmitting(() => true);
      dispatch(postReviewAction({reviewData: {comment, rating}, offerId}))
        .then(() => {
          setComment(() => '');
          setRating(() => NaN);
        })
        .then(() => setFormSubmitting(() => false));
    }
  };

  const isButtonDisabled =
    comment.length < MIN_REVIEW_COMMENT_LENGTH ||
    comment.length > MAX_REVIEW_COMMENT_LENGTH ||
    isNaN(rating) ||
    formSubmitting;

  return {handleSubmit, ratingValue: rating, handleRatingChange, handleCommentChange, comment, isButtonDisabled};
}
