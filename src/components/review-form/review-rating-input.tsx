import {ChangeEvent, Fragment} from 'react';

const rates = [
  { value: 1, title: 'terribly' },
  { value: 2, title: 'badly' },
  { value: 3, title: 'not bad' },
  { value: 4, title: 'good' },
  { value: 5, title: 'perfect' },
];

type ReviewRatingInputProps = {
  ratingValue: number;
  onRateChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function ReviewRatingInput({ratingValue, onRateChange}: ReviewRatingInputProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        rates.toReversed().map(({value, title}) => (
          <Fragment key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={onRateChange}
              checked={value === ratingValue}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>))
      }
    </div>
  );
}

export default ReviewRatingInput;
