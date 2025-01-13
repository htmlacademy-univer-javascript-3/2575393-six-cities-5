import OfferCard from '../offer-card/offer-card.tsx';
import {OffersShort} from '../../../types/offers/offer-short.ts';
import {Nullable} from '../../../types/nullable.ts';

type OfferCardListContainerProps = {
  offers: OffersShort;
  className?: string;
  onCardHover?: (id: Nullable<string>) => void;
}

function OfferCardsContainer({offers, className, onCardHover}: OfferCardListContainerProps) {
  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offerInfo={offer} variant={'main'} onCardHover={onCardHover}/>
      ))}
    </div>
  );
}

export default OfferCardsContainer;
