// /components/property/ReviewSection.tsx
import React, { useMemo, useState } from "react";
import { Review } from "@/interfaces";
import Image from "next/image";

const REVIEWS_PER_PAGE = 4;

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(reviews.length / REVIEWS_PER_PAGE));

  const paged = useMemo(() => {
    const start = (page - 1) * REVIEWS_PER_PAGE;
    return reviews.slice(start, start + REVIEWS_PER_PAGE);
  }, [reviews, page]);

  return (
    <section className="mt-4">
      <h3 className="text-2xl font-semibold">Reviews ({reviews.length})</h3>

      <div className="mt-4 space-y-4">
        {paged.map((r) => (
          <div key={r.id} className="bg-white border rounded p-4">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                {r.avatar ? (
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100">
                    {r.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-sm text-yellow-500">{r.rating} ★</p>
                  </div>
                  <p className="text-sm text-slate-400">{r.date}</p>
                </div>
                <p className="mt-2 text-slate-700">{r.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {page} / {pages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(pages, p + 1))}
          disabled={page === pages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
