export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface Address {
  city: string;
  country: string;
  street?: string;
}

export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  date?: string;
}

// export interface PropertyProps {
//   id: string;
//   name: string;
//   rating: number;
//   pricePerNight: number;
//   address: Address;
//   description: string;
//   images: string[]; // array of image URLs
//   category: string[]; // amenities list
//   reviews: Review[];
//   host?: {
//     name: string;
//     avatar?: string;
//     about?: string;
//   };
// }
