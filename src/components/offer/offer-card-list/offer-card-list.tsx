/* eslint-disable react-refresh/only-export-components */
import {OffersShort} from '../../../types/offers/offer-short.ts';
import {OfferCardListVariants} from '../../../types/variants.ts';
import DropdownFilter from '../../dropdown-offers-filter/dropdown-filter.tsx';
import OfferCardsContainer from './offer-cards-container.tsx';
import {useOfferCardList} from '../../../hooks/components/use-offer-card-list.ts';
import {memo} from 'react';

type OfferCardListProps = {
  cityName?: string;
  offers: OffersShort;
  offersCount?: number;
  variant: OfferCardListVariants;
}

function OfferCardList({cityName, offers, variant, offersCount}: OfferCardListProps) {
  const {
    handleHoverCard,
    sectionClassName,
    headerClassName,
    headerContent,
    isHeaderActive,
    isFoundActive,
    isFormActive,
    containerClassName,
  } = useOfferCardList({variant});

  return (
    <section className={sectionClassName}>
      {isHeaderActive && <h2 className={headerClassName}>{headerContent}</h2>}
      {isFoundActive && <b className="places__found">{offersCount} places to stay in {cityName}</b>}
      {isFormActive && <DropdownFilter />}
      <OfferCardsContainer offers={offers} className={containerClassName} onCardHover={handleHoverCard}/>
    </section>
  );
}

export default memo(OfferCardList);
