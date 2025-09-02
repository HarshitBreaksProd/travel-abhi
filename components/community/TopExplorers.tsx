import Image from "next/image";

export default function TopExplorers() {
  const AVATARS = [
    "/images/trip-discovery/profile-pic.png",
    "/images/trip-discovery/profile-pic.png",
    "/images/trip-discovery/profile-pic.png",
    "/images/trip-discovery/profile-pic.png",
    "/images/trip-discovery/profile-pic.png",
  ];
  return (
    <section className="mt-8 md:mt-10 lg:mt-12">
      <h2 className="text-slate-900 font-semibold mb-3">Top Explorers</h2>
      <div className="flex -space-x-2">
        {AVATARS.map((a, idx) => (
          <Image
            key={idx}
            src={a}
            alt="Explorer"
            width={28}
            height={28}
            className="rounded-full border-2 border-white"
          />
        ))}
      </div>
    </section>
  );
}
