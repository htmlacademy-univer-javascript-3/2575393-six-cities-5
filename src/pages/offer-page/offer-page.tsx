import Header from '../../components/header/header.tsx';
import Map from '../../components/map/map.tsx';
import OfferCardList from '../../components/offer/offer-card-list/offer-card-list.tsx';
import OfferDetail from '../../components/offer/offer-detail/offer-detail.tsx';
import {useOfferPage} from '../../hooks/pages/use-offer-page.ts';

function OfferPage(): JSX.Element | null {
  const {currentOffer, nearbyPoints, nearbyOffers} = useOfferPage();

  if (!currentOffer) {
    return null;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetail offer={currentOffer} />
          <Map
            city={currentOffer.city}
            points={[...nearbyPoints, {id: currentOffer.id, location: currentOffer.location}]}
            variant={'offer'}
            selectedPointId={currentOffer.id}
          />
        </section>

        <div className="container">
          <OfferCardList offers={nearbyOffers} variant={'nearby'}/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
