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
];

const CATEGORIES: CategoryOption[] = [
  { label: "Adventure", value: "adventure" },
  { label: "Culture", value: "culture" },
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
  },
  {
    id: "barcelona",
    title: "Discover the Charm of Barcelona",
    organizer: "Wanderlust Adventures",
    city: "Barcelona",
    priceInInr: 54000,
    durationDays: 6,
    imageUrl: "/images/trip-discovery/barcelona.png",
  },
  {
    id: "paris",
    title: "Experience the Magic of Paris",
    organizer: "Global Explorers",
    city: "Paris",
    priceInInr: 70000,
    durationDays: 4,
    imageUrl: "/images/trip-discovery/paris.png",
  },
  {
    id: "rome",
    title: "Uncover the Beauty of Rome",
    organizer: "Roman Holiday Tours",
    city: "Rome",
    priceInInr: 61000,
    durationDays: 5,
    imageUrl: "/images/trip-discovery/rome.png",
  },
  {
    id: "delhi",
    title: "Uncover the Beauty of Delhi",
    organizer: "Delhi Holiday Tours",
    city: "Delhi",
    priceInInr: 11000,
    durationDays: 3,
    imageUrl: "/images/trip-discovery/paris.png",
  },
  {
    id: "brazil",
    title: "Uncover the Beauty of Brazil",
    organizer: "Brzilian Holiday Tours",
    city: "Brazil",
    priceInInr: 36000,
    durationDays: 5,
    imageUrl: "/images/trip-discovery/kyoto.png",
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

  const visibleTrips = useMemo(() => {
    const filtered = ALL_TRIPS.filter((t) => {
      const byCity = selectedCity
        ? t.city.toLowerCase() === selectedCity
        : true;
      const byBudget = t.priceInInr >= budget[0] && t.priceInInr <= budget[1];
      const byDuration =
        t.durationDays >= duration[0] && t.durationDays <= duration[1];
      const byCategory = selectedCategory ? true : true; // UI-only placeholder
      return byCity && byBudget && byDuration && byCategory;
    });
    return filtered;
  }, [selectedCity, budget, duration, selectedCategory]);

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
              onCityChange={setSelectedCity}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              budget={budget}
              onBudgetChange={setBudget}
              duration={duration}
              onDurationChange={setDuration}
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
