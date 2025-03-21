import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferChange: (offer: Offer) => void;
}

function OffersList({ offers, onActiveOfferChange }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onActiveOfferChange(offer)}
        />
      ))}
    </div>
  );
}

export default OffersList;
