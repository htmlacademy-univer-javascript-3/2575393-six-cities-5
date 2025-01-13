/* eslint-disable react-hooks/exhaustive-deps */
import {OfferCardVariants} from '../../types/variants.ts';
import {toggleOfferFavoriteStatus} from '../../store/api-actions.ts';
import {useAppDispatch} from '../services/redux.ts';
import {OfferShort} from '../../types/offers/offer-short.ts';
import classNames from 'classnames';
import {useCallback} from 'react';

const variantData = {
  main: {
    classPrefix: 'cities',
    imageSizes: {width: '260', height: '200'}
  },
  favorites: {
    classPrefix: 'favorites',
    imageSizes: {width: '150', height: '110'}
  },
};

type OfferCardController = {
  variant: OfferCardVariants;
  offerInfo: OfferShort;
}

export function useOfferCard({variant, offerInfo}: OfferCardController) {
  const {
    classPrefix,
    imageSizes
  } = variantData[variant];

  const dispatch = useAppDispatch();
  const handleButtonClick = useCallback(() => {
    dispatch(toggleOfferFavoriteStatus(offerInfo));
  }, []);

  const placeCardClassName = classNames(`${classPrefix}__card`, 'place-card');
  const cardInfoClassName = classNames('place-card__info', {'favorites__card-info': classPrefix === 'favorites'});
  const imageWrapperClassName = classNames('place-card__image-wrapper', `${classPrefix}__image-wrapper`);

  return {
    handleButtonClick,
    placeCardClassName,
    cardInfoClassName,
    imageWrapperClassName,
    imageWidth: imageSizes.width,
    imageHeight: imageSizes.height
  };
}
