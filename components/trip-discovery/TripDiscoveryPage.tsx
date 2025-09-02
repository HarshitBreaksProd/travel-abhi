"use client";

import { useMemo, useState } from "react";
import TripDiscoveryHeader from "./TripDiscoveryHeader";
import FiltersSidebar, {
  CityOption,
  CategoryOption,
} from "./filters/FiltersSidebar";
import ResultsGrid, { Trip } from "./results/ResultsGrid";
import PaginationControl from "./results/PaginationControl";

type BudgetRange = [number, number];
type DurationRange = [number, number];

const CITIES: CityOption[] = [
  { label: "Kyoto", value: "kyoto" },
  { label: "Barcelona", value: "barcelona" },
  { label: "Paris", value: "paris" },
  { label: "Rome", value: "rome" },
  { label: "Delhi", value: "delhi" },
  { label: "Brazil", value: "brazil" },
];

const CATEGORIES: CategoryOption[] = [
  { label: "Adventure", value: "adventure" },
  { label: "Culture", value: "culture" },
  { label: "Food", value: "food" },
  { label: "History", value: "history" },
];

const ALL_TRIPS: Trip[] = [
  {
    id: "kyoto",
    title: "Explore the Wonders of Kyoto",
    organizer: "Travel Enthusiasts",
    city: "Kyoto",
    priceInInr: 62000,
    durationDays: 5,
    imageUrl: "/images/trip-discovery/kyoto.png",
    category: "culture",
    startDate: "2025-03-01T00:00:00+05:30",
    endDate: "2025-03-15T23:59:59+05:30",
  },
  {
    id: "barcelona",
    title: "Discover the Charm of Barcelona",
    organizer: "Wanderlust Adventures",
    city: "Barcelona",
    priceInInr: 54000,
    durationDays: 6,
    imageUrl: "/images/trip-discovery/barcelona.png",
    category: "history",
    startDate: "2025-04-10T00:00:00+05:30",
    endDate: "2025-04-20T23:59:59+05:30",
  },
  {
    id: "paris",
    title: "Experience the Magic of Paris",
    organizer: "Global Explorers",
    city: "Paris",
    priceInInr: 70000,
    durationDays: 4,
    imageUrl: "/images/trip-discovery/paris.png",
    category: "food",
    startDate: "2025-05-05T00:00:00+05:30",
    endDate: "2025-05-12T23:59:59+05:30",
  },
  {
    id: "rome",
    title: "Uncover the Beauty of Rome",
    organizer: "Roman Holiday Tours",
    city: "Rome",
    priceInInr: 61000,
    durationDays: 5,
    imageUrl: "/images/trip-discovery/rome.png",
    category: "history",
    startDate: "2025-06-01T00:00:00+05:30",
    endDate: "2025-06-10T23:59:59+05:30",
  },
  {
    id: "delhi",
    title: "Uncover the Beauty of Delhi",
    organizer: "Delhi Holiday Tours",
    city: "Delhi",
    priceInInr: 11000,
    durationDays: 3,
    imageUrl: "/images/trip-discovery/paris.png",
    category: "adventure",
    startDate: "2025-02-01T00:00:00+05:30",
    endDate: "2025-02-05T23:59:59+05:30",
  },
  {
    id: "brazil",
    title: "Uncover the Beauty of Brazil",
    organizer: "Brzilian Holiday Tours",
    city: "Brazil",
    priceInInr: 36000,
    durationDays: 5,
    imageUrl: "/images/trip-discovery/kyoto.png",
    category: "adventure",
    startDate: "2025-07-10T00:00:00+05:30",
    endDate: "2025-07-20T23:59:59+05:30",
  },
];

export default function TripDiscoveryPage() {
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined
  );
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [budget, setBudget] = useState<BudgetRange>([50000, 70000]);
  const [duration, setDuration] = useState<DurationRange>([3, 6]);
  const [page, setPage] = useState<number>(1);
  const pageSize = 4;
  const [startDateZ, setStartDateZ] = useState<string>("");
  const [endDateZ, setEndDateZ] = useState<string>("");

  const IST_OFFSET = "+05:30";
  const toStartOfDayZoned = (yyyyMmDd: string) =>
    yyyyMmDd ? `${yyyyMmDd}T00:00:00${IST_OFFSET}` : "";
  const toEndOfDayZoned = (yyyyMmDd: string) =>
    yyyyMmDd ? `${yyyyMmDd}T23:59:59${IST_OFFSET}` : "";

  const visibleTrips = useMemo(() => {
    const filtered = ALL_TRIPS.filter((t) => {
      const byCity = selectedCity
        ? t.city.toLowerCase() === selectedCity
        : true;
      const byBudget = t.priceInInr >= budget[0] && t.priceInInr <= budget[1];
      const byDuration =
        t.durationDays >= duration[0] && t.durationDays <= duration[1];
      const byCategory = selectedCategory
        ? t.category === selectedCategory
        : true;
      const byDates = (() => {
        if (!startDateZ && !endDateZ) return true;
        const tripStart = t.startDate ? new Date(t.startDate).getTime() : NaN;
        const tripEnd = t.endDate ? new Date(t.endDate).getTime() : NaN;
        const selStart = startDateZ
          ? new Date(startDateZ).getTime()
          : -Infinity;
        const selEnd = endDateZ ? new Date(endDateZ).getTime() : Infinity;
        if (Number.isNaN(tripStart) || Number.isNaN(tripEnd)) return true; // keep if data missing
        // overlap check
        return tripStart <= selEnd && tripEnd >= selStart;
      })();
      return byCity && byBudget && byDuration && byCategory && byDates;
    });
    return filtered;
  }, [selectedCity, budget, duration, selectedCategory, startDateZ, endDateZ]);

  const totalPages = Math.max(1, Math.ceil(visibleTrips.length / pageSize));
  const clampedPage = Math.min(Math.max(1, page), totalPages);
  const pagedTrips = useMemo(() => {
    const start = (clampedPage - 1) * pageSize;
    return visibleTrips.slice(start, start + pageSize);
  }, [clampedPage, pageSize, visibleTrips]);

  return (
    <div className="min-h-screen bg-white">
      <TripDiscoveryHeader />

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 pt-8 md:pt-10">
        <h1 className="font-garetheavy text-primary text-4xl leading-[44px] mb-8">
          Discover Trips
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[320px,1fr] gap-10">
          <aside>
            <FiltersSidebar
              cities={CITIES}
              categories={CATEGORIES}
              selectedCity={selectedCity}
              onCityChange={(v) => {
                setPage(1);
                setSelectedCity(v);
              }}
              selectedCategory={selectedCategory}
              onCategoryChange={(v) => {
                setPage(1);
                setSelectedCategory(v);
              }}
              budget={budget}
              onBudgetChange={(v) => {
                setPage(1);
                setBudget(v);
              }}
              duration={duration}
              onDurationChange={(v) => {
                setPage(1);
                setDuration(v);
              }}
              onDatesChange={(s, e) => {
                setPage(1);
                setStartDateZ(toStartOfDayZoned(s));
                setEndDateZ(toEndOfDayZoned(e));
              }}
            />
          </aside>

          <section>
            <ResultsGrid trips={pagedTrips} />
            <div className="my-8">
              <PaginationControl
                currentPage={clampedPage}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
