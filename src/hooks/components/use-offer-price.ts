import {OfferPriceVariants} from '../../types/variants.ts';

const variantData = {
  card: {
    priceClassName: 'place-card__price',
    priceValueClassName: 'place-card__price-value',
    priceTestClassName: 'place-card__price-text',
    slashSymbol: '/',
  },
  full: {
    priceClassName: 'offer__price',
    priceValueClassName: 'offer__price-value',
    priceTestClassName: 'offer__price-text',
    slashSymbol: '',
  },
};

type OfferPriceController = {
  variant: OfferPriceVariants;
  currencySymbol?: string;
  price: number;
}

export function useOfferPrice({variant, currencySymbol = '€', price}: OfferPriceController) {
  const data = variantData[variant];
  return {priceValue: `${currencySymbol}${price}`, ...data};
}
