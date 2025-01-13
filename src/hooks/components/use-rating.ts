import {RatingVariants} from '../../types/variants.ts';

const variantData = {
  card: {
    ratingClassName: 'place-card__rating rating',
    starsClassName: 'place-card__stars rating__stars',
  },
  full: {
    ratingClassName: 'offer__rating rating',
    starsClassName: 'offer__stars rating__stars',
  },
  review: {
    ratingClassName: 'reviews__rating rating',
    starsClassName: 'reviews__stars rating__stars',
  },
};

type RatingController = {
  value: number;
  variant: RatingVariants;
}

export function useRating({value, variant} : RatingController) {
  const {ratingClassName, starsClassName} = variantData[variant];
  const width = `${20 * Math.round(value)}%`;
  return {ratingClassName, starsClassName, width};
}
