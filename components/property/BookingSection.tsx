// /components/property/BookingSection.tsx
import React, { useMemo, useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  // store ISO date strings (YYYY-MM-DD)
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);

  // calculate nights (difference in days)
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn + "T00:00:00");
    const outDate = new Date(checkOut + "T00:00:00");

    // ensure we only count full days; negative means invalid
    const diffMs = outDate.getTime() - inDate.getTime();
    const day = 1000 * 60 * 60 * 24;
    const days = Math.round(diffMs / day);
    return days > 0 ? days : 0;
  }, [checkIn, checkOut]);

  const subtotal = nights * price;
  const serviceFee = Math.round(subtotal * 0.1); // example 10%
  const total = subtotal + serviceFee;

  const handleReserve = () => {
    if (!nights)
      return alert("Please choose valid check-in and check-out dates.");
    // TODO: wire to booking API or redirect to checkout
    alert(`Reserved for ${nights} night(s). Total: $${total}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">${price}</p>
          <p className="text-sm text-slate-500">per night</p>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          type="date"
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Check-out</label>
        <input
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          type="date"
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <div className="mt-3">
        <label className="block text-sm">Guests</label>
        <input
          type="number"
          min={1}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value || 1))}
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <div className="mt-4 border-t pt-3 text-sm">
        <div className="flex justify-between">
          <span>
            {price} × {nights} nights
          </span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Service fee</span>
          <span>${serviceFee}</span>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <button
        onClick={handleReserve}
        disabled={nights === 0}
        className={`mt-4 w-full py-2 rounded ${
          nights === 0
            ? "bg-slate-300 text-slate-600 cursor-not-allowed"
            : "bg-green-600 text-white"
        }`}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
