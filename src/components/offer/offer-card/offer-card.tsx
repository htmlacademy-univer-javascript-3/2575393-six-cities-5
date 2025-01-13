/* eslint-disable react-refresh/only-export-components */
import {OfferShort} from '../../../types/offers/offer-short.ts';
import PremiumSign from '../../premium-sign/premium-sign.tsx';
import BookmarkButton from '../../bookmark-button/bookmark-button.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const.ts';
import Rating from '../../rating/rating.tsx';
import OfferPrice from '../offer-price.tsx';
import OfferCardTitle from './offer-card-title.tsx';
import {useOfferCard} from '../../../hooks/components/use-offer-card.ts';
import {OfferCardVariants} from '../../../types/variants.ts';
import {Nullable} from '../../../types/nullable.ts';
import {memo} from 'react';

type PlaceCardProps = {
  offerInfo: OfferShort;
  variant: OfferCardVariants;
  onCardHover?: (id: Nullable<string>) => void;
}

function OfferCard({offerInfo, variant, onCardHover}: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    previewImage
  } = offerInfo;

  const {
    handleButtonClick,
    placeCardClassName,
    cardInfoClassName,
    imageWrapperClassName,
    imageWidth,
    imageHeight
  } = useOfferCard({variant, offerInfo});

  return (
    <article
      className={placeCardClassName}
      onMouseEnter={() => onCardHover && onCardHover(id)}
      onMouseLeave={() => onCardHover && onCardHover(null)}
    >
      <PremiumSign show={isPremium} variant={'card'}/>
      <div className={imageWrapperClassName}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cardInfoClassName}>
        <div className="place-card__price-wrapper">
          <OfferPrice price={price} variant={'card'}/>
          <BookmarkButton isFavorite={isFavorite} variant={'card'} onClick={handleButtonClick}/>
        </div>
        <Rating value={rating} variant={'card'}/>
        <OfferCardTitle type={type} name={title} id={id}/>
      </div>
    </article>
  );
}

export default memo(OfferCard);
