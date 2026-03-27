export interface Property {
  id: string;
  name: string;
  neighborhood: string;
  description: string;
  shortDescription: string;
  pricePerNight: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  amenities: string[];
  features: string[];
  bedroomDetails: {
    name: string;
    bedType: string;
  }[];
  location: {
    lat: number;
    lng: number;
    address: string;
    areaDescription: string;
  };
  rules: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}
