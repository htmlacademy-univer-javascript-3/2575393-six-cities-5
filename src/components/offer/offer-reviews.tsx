/* eslint-disable react-refresh/only-export-components */
import ReviewForm from '../review-form/review-form.tsx';
import OfferReviewItem from './offer-review-item.tsx';
import {useAuthorization} from '../../hooks/services/use-authorization.ts';
import {useAppSelector} from '../../hooks/services/redux.ts';
import {getFirstTenSortedReviews} from '../../utils.ts';
import {getReviews} from '../../store/detailed-data-process/detailed-data-process.selectors.ts';
import {memo} from 'react';

function OfferReviews() {
  const isAuthorized = useAuthorization();
  const allReviews = useAppSelector(getReviews);
  const reviews = getFirstTenSortedReviews(allReviews);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{allReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <OfferReviewItem item={review} key={review.id}/>
        ))}
      </ul>
      {isAuthorized && <ReviewForm/>}
    </section>
  );
}

export default memo(OfferReviews);


