import { HERO_BG, PROPERTYLISTINGSAMPLE } from "@/constants";
import React from "react";
import Image from "next/image";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Beachfront",
  "Free Parking",
];

// Reusable Pill Component
const Pill: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition text-sm">
    {label}
  </button>
);

// Property Card Component
const PropertyCard: React.FC<{
  property: (typeof PROPERTYLISTINGSAMPLE)[0];
}> = ({ property }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
    <Image
      src={property.image}
      alt={property.name}
      width={400}
      height={300}
      className="w-full h-56 object-cover"
    />
    <div className="p-4">
      <h2 className="font-semibold text-lg">{property.name}</h2>
      <p className="text-sm text-gray-500">
        {property.address.city}, {property.address.country}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-600 font-semibold">
          ${property.price}/night
        </span>
        <span className="text-yellow-500 font-medium">
          ⭐ {property.rating}
        </span>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-[60vh] flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap justify-center gap-3 py-6 bg-gray-50">
        {filters.map((item, i) => (
          <Pill key={i} label={item} />
        ))}
      </section>

      {/* Listing Section */}
      <section className="px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
