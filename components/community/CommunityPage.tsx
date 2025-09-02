import SiteHeader from "@/components/common/SiteHeader";
import CommunityHeader from "./CommunityHeader";
import HostsRow from "./HostsRow";
import TripMemories from "./TripMemories";
import UpcomingTrips from "./UpcomingTrips";
import CommunityWall from "./CommunityWall";
import TopExplorers from "./TopExplorers";
import {
  CITIES,
  HOSTS,
  MEMORIES,
  UPCOMING_TRIPS,
  WALL_POSTS,
} from "./mock-data";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto px-4 md:px-12 lg:px-20 pt-8 md:pt-10 pb-16">
        <CommunityHeader />
        <HostsRow hosts={HOSTS} />
        <TripMemories memories={MEMORIES} />
        <UpcomingTrips trips={UPCOMING_TRIPS} cityOptions={CITIES} />
        <CommunityWall posts={WALL_POSTS} />
        <TopExplorers />
      </main>
    </div>
  );
}
