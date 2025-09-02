import { City, Host, Memory, UpcomingTrip, WallPost } from "./types";

export const HOSTS: Host[] = [
  {
    id: "arjun",
    name: "Arjun Verma",
    avatarUrl: "/images/trip-discovery/profile-pic.png",
    rating: 4.8,
    tripsCount: 12,
  },
  {
    id: "priya",
    name: "Priya Sharma",
    avatarUrl: "/images/trip-discovery/profile-pic.png",
    rating: 4.9,
    tripsCount: 15,
  },
  {
    id: "rohan",
    name: "Rohan Kapoor",
    avatarUrl: "/images/trip-discovery/profile-pic.png",
    rating: 4.7,
    tripsCount: 10,
  },
];

export const MEMORIES: Memory[] = [
  {
    id: "hampi",
    title: "Exploring the ancient ruins of Hampi",
    imageUrl: "/images/home/top-destinations/Rectangle-1.png",
  },
  {
    id: "coorg",
    title: "Trekking through the lush green hills of Coorg",
    imageUrl: "/images/trip-discovery/kyoto.png",
  },
  {
    id: "goa-sunset",
    title: "Enjoying a serene sunset in Goa",
    imageUrl: "/images/trip-discovery/rome.png",
  },
];

export const CITIES: { label: string; value: City }[] = [
  { label: "Delhi", value: "delhi" },
  { label: "Mumbai", value: "mumbai" },
  { label: "Goa", value: "goa" },
];

export const UPCOMING_TRIPS: UpcomingTrip[] = [
  {
    id: "delhi-walk",
    city: "delhi",
    title: "Delhi Heritage Walk",
    subtitle: "Explore the historical landmarks of Delhi",
    imageUrl: "/images/trip-discovery/paris.png",
  },
  {
    id: "mumbai-food",
    city: "mumbai",
    title: "Mumbai Street Food Tour",
    subtitle: "Indulge in the diverse street food scene",
    imageUrl: "/images/trip-discovery/barcelona.png",
  },
  {
    id: "goa-getaway",
    city: "goa",
    title: "Goa Beach Getaway",
    subtitle: "Relax on the beautiful beaches of Goa",
    imageUrl: "/images/trip-discovery/rome.png",
  },
];

export const WALL_POSTS: WallPost[] = [
  {
    id: "anika",
    author: "Anika Sharma",
    avatarUrl: "/images/trip-discovery/profile-pic.png",
    daysAgo: 2,
    content:
      "Just back from an amazing trip to Rajasthan! The forts and palaces were breathtaking. Highly recommend visiting Jaipur and Udaipur.",
    imageUrl: "/images/trip-discovery/paris.png",
  },
  {
    id: "vikram",
    author: "Vikram Singh",
    avatarUrl: "/images/trip-discovery/profile-pic.png",
    daysAgo: 3,
    content:
      "Had a fantastic time trekking in the Himalayas. The views were absolutely stunning! Looking forward to my next adventure.",
  },
];
