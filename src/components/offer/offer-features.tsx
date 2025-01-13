/* eslint-disable react-refresh/only-export-components */
import {capitalizeFirstLetter} from '../../utils.ts';
import {OfferDetailed} from '../../types/offers/offer-detailed.ts';
import {memo} from 'react';

type OfferFeaturesProps = {
    type: OfferDetailed['type'];
    bedrooms: OfferDetailed['bedrooms'];
    maxAdults: OfferDetailed['maxAdults'];
};

function OfferFeatures({type, bedrooms, maxAdults}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalizeFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default memo(OfferFeatures);
