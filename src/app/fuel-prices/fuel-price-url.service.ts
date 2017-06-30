
const FUEL_PRICE_API_BASE_URL = 'http://localhost:4000';


export class FuelPriceUrlService {
    forCities() : string {
      return `${FUEL_PRICE_API_BASE_URL}/cities`;
    }

    forPrice(city : string) : string {
      return `${FUEL_PRICE_API_BASE_URL}/price/${city}`;
    }
}
