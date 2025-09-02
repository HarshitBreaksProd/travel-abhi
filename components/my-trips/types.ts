export type TripStatus = "upcoming" | "past";

export type TripAction =
  | { type: "primary"; label: string; href?: string }
  | { type: "secondary"; label: string; href?: string };

export type MyTrip = {
  id: string;
  title: string;
  summary: string;
  startDate: string; // yyyy-mm-ddZ or ISO
  endDate: string; // yyyy-mm-ddZ or ISO
  coverImageUrl: string;
  status: TripStatus;
  actions: TripAction[];
};

export type SidebarNavItem = {
  id: string;
  label: string;
  href: string;
  icon?: string; // path to local svg if needed
  active?: boolean;
};

export type UserSummary = {
  name: string;
  memberSinceYear: number;
  avatarUrl: string;
};
