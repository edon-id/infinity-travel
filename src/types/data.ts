export interface Location {
  city?: string;
  address?: string;
  country?: string;
  region?: string;
  destination?: string;
}

export interface Image {
  url: string;
  thumbnail: string;
  location: Location;
  description: string;
}

export type State = "Free" | "Reserved" | "Busy";

export type PropertyType = "Apartment" | "Hotel";

export interface Price {
  prices: number[];
  lastMinutePrices?: number[];
}

export interface ApartmentAndHotelCard {
  id: number;
  name: string;
  rating?: number;
  location: Location;
  description: string;
  description2?: string;
  detailsDesc3?: string;
  detailsDesc4?: string;
  prices: Price[];
  propertyType?: string;
}

export interface FilterNames {
  id: number;
  name: string;
  slug: string;
  country: string;
  destination?: string;
}

export interface TestimonialsType {
  id: number;
  img: string;
  hotelname: string;
  stars: number;
  description: string;
}
