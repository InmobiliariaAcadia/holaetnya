import { Property } from '../types';

export const properties: Property[] = [
  {
    id: 'casa-damiana',
    name: 'Casa Damiana',
    neighborhood: 'Santa Ana',
    shortDescription: 'Colonial charm with a private pool in the heart of Mérida.',
    description: 'A beautifully restored colonial home featuring high ceilings, original pasta tiles, and a lush private courtyard with a swimming pool. Perfect for remote workers seeking inspiration and comfort.',
    pricePerNight: 185,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2.5,
    images: [
      'https://picsum.photos/seed/damiana1/1200/800',
      'https://picsum.photos/seed/damiana2/1200/800',
      'https://picsum.photos/seed/damiana3/1200/800',
    ],
    amenities: ['Fast Wi-Fi', 'Private Pool', 'A/C', 'Kitchen', 'Washer/Dryer', 'Work Desk'],
    features: ['Dedicated Workspace', 'Self Check-in', 'Weekly Cleaning', 'Coffee Maker'],
    bedroomDetails: [
      { name: 'Master Bedroom', bedType: 'King Bed' },
      { name: 'Guest Room', bedType: 'Queen Bed' }
    ],
    location: {
      lat: 20.9753,
      lng: -89.6222,
      address: 'Calle 47, Santa Ana, Mérida',
      areaDescription: 'Located steps away from Paseo de Montejo and the vibrant Santa Ana market, full of local flavor and artisan shops.'
    },
    rules: ['No smoking', 'No parties', 'Pets allowed with prior notice']
  },
  {
    id: 'loft-itzy',
    name: 'Loft Itzimná',
    neighborhood: 'Itzimná',
    shortDescription: 'Modern industrial loft in a quiet, leafy neighborhood.',
    description: 'This sleek, open-plan loft offers a minimalist aesthetic with maximum comfort. Floor-to-ceiling windows flood the space with natural light, ideal for a productive workday.',
    pricePerNight: 120,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    images: [
      'https://picsum.photos/seed/itzy1/1200/800',
      'https://picsum.photos/seed/itzy2/1200/800',
    ],
    amenities: ['Fiber Optic Wi-Fi', 'Smart TV', 'A/C', 'Fully Equipped Kitchen', 'Free Parking'],
    features: ['Ergonomic Chair', 'Blackout Curtains', 'Organic Toiletries'],
    bedroomDetails: [
      { name: 'Main Loft', bedType: 'Queen Bed' }
    ],
    location: {
      lat: 20.9921,
      lng: -89.6155,
      address: 'Calle 21, Itzimná, Mérida',
      areaDescription: 'Itzimná is one of Mérida\'s most traditional and peaceful neighborhoods, known for its beautiful park and church.'
    },
    rules: ['No smoking', 'Quiet hours after 10 PM']
  },
  // Adding more placeholders to reach 15 as requested
  ...Array.from({ length: 13 }).map((_, i) => ({
    id: `prop-${i + 3}`,
    name: `Etnya Residence ${i + 3}`,
    neighborhood: i % 2 === 0 ? 'Santiago' : 'García Ginerés',
    shortDescription: 'Thoughtfully designed for the modern nomad.',
    description: 'A premium stay experience combining local character with global standards of comfort and connectivity.',
    pricePerNight: 140 + (i * 10),
    guests: 2 + (i % 3),
    bedrooms: 1 + (i % 2),
    bathrooms: 1 + (i % 2),
    images: [`https://picsum.photos/seed/prop${i+3}/1200/800`],
    amenities: ['Fast Wi-Fi', 'A/C', 'Kitchen'],
    features: ['Work-friendly'],
    bedroomDetails: [{ name: 'Bedroom 1', bedType: 'Queen Bed' }],
    location: {
      lat: 20.97,
      lng: -89.62,
      address: 'Mérida Centro',
      areaDescription: 'A great local neighborhood.'
    },
    rules: ['Standard house rules apply']
  }))
];
