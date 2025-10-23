import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-72 object-cover rounded-2xl mb-6"
      />

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">{property.name}</h1>
        <span className="text-green-600 font-bold text-lg">
          {property.discount}
        </span>
      </div>

      <p className="text-gray-500 mb-3">
        {property.address.city}, {property.address.state},{" "}
        {property.address.country}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {property.category.map((cat, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-yellow-500 font-semibold">⭐ {property.rating}/5</p>
        <p className="text-xl font-bold text-blue-600">${property.price}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 text-gray-600">
        <div>🛏️ {property.offers.bed}</div>
        <div>🚿 {property.offers.shower}</div>
        <div>👤 {property.offers.occupants}</div>
      </div>
    </div>
  );
};

export default PropertyDetail;
