"use client";

import SiteHeader from "@/components/common/SiteHeader";
import DashboardSidebar, { DashboardSidebarItem } from "./DashboardSidebar";
import SummaryCards from "./SummaryCards";
import MyTripsTable from "./MyTripsTable";
import BookingsTable from "./BookingsTable";
import EarningsSection from "./EarningsSection";
import ProfileVerification from "./ProfileVerification";
import {
  bookingsData,
  earningsData,
  profileData,
  summaryData,
  tripsData,
} from "./mock-data";

export default function DashboardPage() {
  const items: DashboardSidebarItem[] = [
    {
      id: "overview",
      label: "Dashboard Overview",
      href: "/dashboard",
      active: true,
    },
    { id: "my-trips", label: "My Trips", href: "/my-trips" },
    { id: "bookings", label: "Bookings", href: "/dashboard#bookings" },
    { id: "earnings", label: "Earnings", href: "/dashboard#earnings" },
    {
      id: "profile",
      label: "Profile/Verification",
      href: "/dashboard#profile",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto px-4 md:px-8 lg:px-12 pt-8 md:pt-10 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10">
          <div className="order-1 lg:order-1 lg:basis-[320px] lg:w-[320px] lg:shrink-0 lg:self-stretch">
            <DashboardSidebar profile={profileData} items={items} />
          </div>

          <section className="order-2 lg:order-2 lg:flex-1">
            <h1 className="font-garetheavy text-primary text-3xl md:text-4xl leading-[44px] mb-6">
              Dashboard Overview
            </h1>

            <div className="mb-6">
              <div className="text-sm font-semibold text-slate-800 mb-3">
                Summary
              </div>
              <SummaryCards cards={summaryData} />
            </div>

            <div className="mb-6">
              <div className="text-sm font-semibold text-slate-800 mb-3">
                My Trips
              </div>
              <MyTripsTable trips={tripsData} />
            </div>

            <div id="bookings" className="mb-6">
              <div className="text-sm font-semibold text-slate-800 mb-3">
                Bookings
              </div>
              <BookingsTable bookings={bookingsData} />
            </div>

            <div id="earnings" className="mb-6">
              <div className="text-sm font-semibold text-slate-800 mb-3">
                Earnings
              </div>
              <EarningsSection earnings={earningsData} />
            </div>

            <div id="profile" className="mb-6">
              <div className="text-sm font-semibold text-slate-800 mb-3">
                Profile/Verification
              </div>
              <ProfileVerification profile={profileData} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
