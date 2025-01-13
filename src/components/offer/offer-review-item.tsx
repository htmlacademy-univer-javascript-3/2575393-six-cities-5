/* eslint-disable react-refresh/only-export-components */
import Rating from '../rating/rating.tsx';
import {formatDate} from '../../utils.ts';
import {Review} from '../../types/review.ts';
import {memo} from 'react';

type OfferReviewItemProps = {
  item: Review;
}

function OfferReviewItem({item}: OfferReviewItemProps) {
  const {user, rating, comment, date} = item;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating value={rating} variant={'review'}/>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
    </li>
  );
}

export default memo(OfferReviewItem);
