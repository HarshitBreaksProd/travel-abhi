import Image from "next/image";

export default function CommunitySpotlight() {
  const travelers = [
    {
      id: 1,
      name: "Mike's Story",
      description: "From a solo adventure to finding a travel buddy.",
      image: "/images/spotlight/mark.png",
      followers: "50.4k followers",
    },
    {
      id: 2,
      name: "Maria's Adventure",
      description: "Discovering hidden gems across Southeast Asia.",
      image: "/images/spotlight/sarah.png",
      followers: "42.3k followers",
    },
    {
      id: 3,
      name: "Friendships Found",
      description: "How travel brought lifelong friendships.",
      image: "/images/spotlight/friendship-found.png",
      followers: "38.1k followers",
    },
    {
      id: 4,
      name: "Capturing Moments",
      description: "Through the lens of a travel photographer.",
      image: "/images/spotlight/capturing-moments.png",
      followers: "55.7k followers",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Community Spotlight</p>
          <h2 className="text-5xl font-bold text-primary font-bebas tracking-wide">
            TravlBirdie
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelers.map((traveler) => (
            <div key={traveler.id} className="group cursor-pointer">
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={traveler.image}
                  alt={traveler.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {traveler.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-2">
                    {traveler.description}
                  </p>
                  <p className="text-xs opacity-75">{traveler.followers}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
