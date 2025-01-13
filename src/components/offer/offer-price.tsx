import {useOfferPrice} from '../../hooks/components/use-offer-price.ts';
import {OfferPriceVariants} from '../../types/variants.ts';

type PlaceCardPriceProps = {
  price: number;
  variant: OfferPriceVariants;
  currencySymbol?: string;
}

function OfferPrice({price, variant, currencySymbol}: PlaceCardPriceProps): JSX.Element {
  const {
    priceClassName,
    priceValueClassName,
    priceTestClassName,
    slashSymbol,
    priceValue
  } = useOfferPrice({
    variant,
    price,
    currencySymbol
  });
  return (
    <div className={priceClassName}>
      <b className={priceValueClassName}>{priceValue}</b>
      <span className={priceTestClassName}>{slashSymbol}&nbsp;night</span>
    </div>
  );
}

export default OfferPrice;
