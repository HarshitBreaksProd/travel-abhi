"use client";

import Image from "next/image";
import Link from "next/link";
import { MyTrip } from "./types";

function formatDateRange(startIso: string, endIso: string) {
  try {
    const start = new Date(startIso);
    const end = new Date(endIso);
    const short = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
    });
    return `${short.format(start)} - ${short.format(end)}`;
  } catch {
    return "";
  }
}

function formatCompleted(endIso: string) {
  try {
    const end = new Date(endIso);
    const long = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    return `Completed on ${long.format(end)}`;
  } catch {
    return "";
  }
}

export default function TripRow({ trip }: { trip: MyTrip }) {
  const headerLabel =
    trip.status === "upcoming"
      ? formatDateRange(trip.startDate, trip.endDate)
      : formatCompleted(trip.endDate);

  return (
    <article className="rounded-lg border border-slate-200 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="p-5 md:p-6 order-2 md:order-1 md:flex-1">
          {headerLabel && (
            <div className="text-[12px] text-slate-500 mb-2">{headerLabel}</div>
          )}
          <h3 className="text-slate-900 font-semibold text-lg md:text-xl">
            {trip.title}
          </h3>
          <p className="text-slate-600 text-sm mt-2 max-w-prose leading-relaxed">
            {trip.summary}
          </p>

          <div className="mt-4">
            {trip.actions.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {trip.actions.map((a, idx) => {
                  const className =
                    a.type === "primary"
                      ? "bg-primary text-white px-4 py-2 rounded-md text-sm"
                      : "border border-slate-300 text-slate-800 px-4 py-2 rounded-md text-sm bg-white";
                  const El = a.href ? Link : ("button" as any);
                  return (
                    <El
                      key={`${trip.id}-${idx}`}
                      href={a.href as any}
                      className={className}
                    >
                      {a.label}
                    </El>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="relative order-1 md:order-2 w-full md:w-[360px] md:shrink-0 aspect-[16/9] md:aspect-auto md:h-[220px] lg:h-[240px]">
          <Image
            src={trip.coverImageUrl}
            alt={trip.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 360px"
            priority={trip.status === "upcoming"}
          />
        </div>
      </div>
    </article>
  );
}
