import ReviewRatingInput from './review-rating-input.tsx';
import {useReviewForm} from '../../hooks/components/use-review-form.ts';

function ReviewForm(): JSX.Element {
  const {
    handleSubmit,
    ratingValue,
    handleRatingChange,
    handleCommentChange,
    comment,
    isButtonDisabled
  } = useReviewForm();

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewRatingInput ratingValue={ratingValue} onRateChange={handleRatingChange}/>
      <textarea
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50</b> and no more than
          <b className="reviews__text-amount"> 300 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled}>
          Submit
        </button>
      </div>
    </form>

  );
}

export default ReviewForm;
