export type Host = {
  id: string;
  name: string;
  avatarUrl: string;
  rating: number; // 0-5
  tripsCount: number;
};

export type Memory = {
  id: string;
  title: string;
  imageUrl: string;
};

export type City =
  | "delhi"
  | "mumbai"
  | "goa"
  | "hampi"
  | "kyoto"
  | "paris"
  | "rome"
  | "barcelona";

export type UpcomingTrip = {
  id: string;
  city: City;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export type WallPost = {
  id: string;
  author: string;
  avatarUrl: string;
  daysAgo: number;
  content: string;
  imageUrl?: string;
};
