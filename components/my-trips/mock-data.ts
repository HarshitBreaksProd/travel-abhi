import { MyTrip, SidebarNavItem, UserSummary } from "./types";

export const USER_SUMMARY: UserSummary = {
  name: "Sophia",
  memberSinceYear: 2022,
  avatarUrl: "/images/trip-discovery/profile-pic.png",
};

export const SIDEBAR_NAV: SidebarNavItem[] = [
  { id: "my-trips", label: "My Trips", href: "/my-trips", active: true },
  { id: "saved", label: "Saved Trips", href: "#" },
  { id: "profile", label: "Profile", href: "#" },
  { id: "community", label: "Community", href: "#" },
];

export const UPCOMING_TRIPS: MyTrip[] = [
  {
    id: "andes-2025",
    title: "Explore the Wonders of the Andes",
    summary:
      "Embark on an unforgettable journey through the majestic Andes Mountains, discovering ancient ruins and breathtaking landscapes.",
    startDate: "2025-10-15T00:00:00+05:30",
    endDate: "2025-10-22T23:59:59+05:30",
    coverImageUrl: "/images/trip-discovery/rome.png",
    status: "upcoming",
    actions: [
      { type: "primary", label: "View Details", href: "/trip-details" },
      { type: "secondary", label: "Join WhatsApp Group", href: "#" },
      { type: "secondary", label: "Chat with Organizer", href: "#" },
    ],
  },
];

export const PAST_TRIPS: MyTrip[] = [
  {
    id: "southeast-asia-2023",
    title: "Discover the Hidden Gems of Southeast Asia",
    summary:
      "Uncover the rich cultures and stunning scenery of Southeast Asia, from bustling cities to serene beaches.",
    startDate: "2023-07-10T00:00:00+05:30",
    endDate: "2023-07-20T23:59:59+05:30",
    coverImageUrl: "/images/trip-discovery/kyoto.png",
    status: "past",
    actions: [
      { type: "primary", label: "Review Trip", href: "#" },
      { type: "secondary", label: "Upload Photos", href: "#" },
      { type: "secondary", label: "Explorer Badge", href: "#" },
    ],
  },
];
