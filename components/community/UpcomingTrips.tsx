"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { City, UpcomingTrip } from "./types";

export default function UpcomingTrips({
  trips,
  cityOptions,
}: {
  trips: UpcomingTrip[];
  cityOptions: { label: string; value: City }[];
}) {
  const [city, setCity] = useState<City | "all">("all");

  const filtered = useMemo(() => {
    return city === "all" ? trips : trips.filter((t) => t.city === city);
  }, [trips, city]);

  return (
    <section className="mt-8 md:mt-10 lg:mt-12">
      <h2 className="text-slate-900 font-semibold mb-3">
        Upcoming Local Trips
      </h2>

      <div className="flex items-center gap-2 text-xs">
        <button
          onClick={() => setCity("all")}
          className={`px-3 py-1 rounded-full border ${
            city === "all"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200"
          }`}
        >
          All
        </button>
        {cityOptions.map((c) => (
          <button
            key={c.value}
            onClick={() => setCity(c.value)}
            className={`px-3 py-1 rounded-full border ${
              city === c.value
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {filtered.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden"
          >
            <div className="relative aspect-[16/9] sm:aspect-[4/3]">
              <Image
                src={t.imageUrl}
                alt={t.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <div className="text-sm font-medium text-slate-900">
                {t.title}
              </div>
              <div className="text-xs text-slate-600">{t.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3">
        <button className="text-sm rounded-md border border-slate-300 px-4 py-2 bg-white">
          Explore all trips
        </button>
      </div>
    </section>
  );
}
