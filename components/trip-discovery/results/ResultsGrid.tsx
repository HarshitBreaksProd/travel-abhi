import Image from "next/image";
import Link from "next/link";

export type Trip = {
  id: string;
  title: string;
  organizer: string;
  city: string;
  priceInInr: number;
  durationDays: number;
  imageUrl: string;
  category?: string;
};

export default function ResultsGrid({ trips }: { trips: Trip[] }) {
  if (!trips.length) {
    return (
      <div className="text-center text-slate-600 py-10">No trips found.</div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {trips.map((t) => (
        <TripCard key={t.id} trip={t} />
      ))}
    </div>
  );
}

function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link
      href={`/trips/${trip.id}`}
      className="block group rounded-lg overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={trip.imageUrl}
          alt={trip.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
          {trip.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Organized by {trip.organizer}
        </p>
        <div className="flex items-center justify-between mt-3 text-xs text-slate-700">
          <span>{trip.city}</span>
          <span>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            }).format(trip.priceInInr)}
          </span>
        </div>
        <div className="mt-1 text-xs text-slate-500">
          {trip.durationDays} Days
        </div>
      </div>
    </Link>
  );
}
