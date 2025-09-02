"use client";

import SiteHeader from "@/components/common/SiteHeader";
import TripRow from "./TripRow";
import MyTripsSidebar from "./MyTripsSidebar";
import {
  PAST_TRIPS,
  SIDEBAR_NAV,
  UPCOMING_TRIPS,
  USER_SUMMARY,
} from "./mock-data";

export default function MyTripsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto px-4 md:px-8 lg:px-12 pt-8 md:pt-10 pb-10">
        <h1 className="font-garetheavy text-primary text-4xl leading-[44px] mb-6">
          My Trips
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
          <section className="order-2 lg:order-1 lg:flex-1 space-y-6">
            <div>
              <div className="bg-primary text-white rounded-md px-4 py-2 font-semibold mb-4 w-full inline-block">
                Upcoming Trips
              </div>
              <div className="space-y-4">
                {UPCOMING_TRIPS.map((t) => (
                  <TripRow key={t.id} trip={t} />
                ))}
              </div>
            </div>

            <div className="pt-4">
              <div className="bg-primary text-white rounded-md px-4 py-2 font-semibold mb-4 w-full inline-block">
                Past Trips
              </div>
              <div className="space-y-4">
                {PAST_TRIPS.map((t) => (
                  <TripRow key={t.id} trip={t} />
                ))}
              </div>
            </div>
          </section>

          <div className="order-1 lg:order-2 lg:basis-[320px] lg:w-[320px] lg:shrink-0 lg:self-start">
            <div className="lg:sticky lg:top-24">
              <MyTripsSidebar user={USER_SUMMARY} items={SIDEBAR_NAV} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
