import Image from "next/image";

export default function WhyTravlAbhi() {
  const features = [
    {
      id: 1,
      icon: "/images/services/global-destination.svg",
      title: "Global Destinations",
      description:
        "Explore destinations worldwide with our extensive network and local expertise.",
    },
    {
      id: 2,
      icon: "/images/services/organizers.svg",
      title: "Discover Your Preferences",
      description:
        "Find trips that match your interests and travel style with our smart recommendation system.",
    },
    {
      id: 3,
      icon: "/images/services/safe-secure.svg",
      title: "Safe & Secure",
      description:
        "Travel with confidence knowing your safety and security are our top priorities.",
    },
    {
      id: 4,
      icon: "/images/services/scheduling.svg",
      title: "Flexible Scheduling",
      description:
        "Plan your trips according to your schedule with our flexible booking options.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary mb-4 font-bebas tracking-wide">
            Why TravlAbhi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group">
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
