import {CityName, CityObject} from './const.ts';
import {City} from './types/city.ts';
import {Reviews} from './types/review.ts';
import {OffersShort} from './types/offers/offer-short.ts';

export function capitalizeFirstLetter(word: string) : string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric'}).format(
    new Date(date)
  );

export const getCityObjectByName = (cityName: string) : City | undefined => {
  switch (cityName) {
    case CityName.Paris:
      return CityObject.Paris;
    case CityName.Cologne:
      return CityObject.Cologne;
    case CityName.Hamburg:
      return CityObject.Hamburg;
    case CityName.Brussels:
      return CityObject.Brussels;
    case CityName.Dusseldorf:
      return CityObject.Dusseldorf;
    case CityName.Amsterdam:
      return CityObject.Amsterdam;
  }
};

export const getRandomCity = () : City => {
  const cities = Object.values(CityObject);
  const randomIndex = Math.floor(Math.random() * cities.length);

  return cities[randomIndex];
};

export function getFirstTenSortedReviews(allReviews: Reviews) {
  return allReviews.toSorted((a, b) => (
    new Date(b.date).getTime() - new Date(a.date).getTime()))
    .slice(0, 10);
}

export function filterAndCategorizeFavorites(allFavorites: OffersShort) {
  const allAvailableCities = Object.values(CityName);
  return allAvailableCities
    .map((city) => (
      {[city]: allFavorites.filter((card) => card.city.name === city)}
    ))
    .reduce((accumulator, value) => ({...accumulator, ...value}), {});
}
