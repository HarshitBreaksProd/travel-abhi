import Image from "next/image";

export default function BookingSteps() {
  const steps = [
    {
      number: 1,
      title: "Search",
      description:
        "Search your ideal trip in check convenient way. You can find your hotel from all around the world.",
    },
    {
      number: 2,
      title: "Pay",
      description:
        "Very conveniently. Send a trip booking message to us, pay money and your job is done.",
    },
    {
      number: 3,
      title: "Travel & Share Your Story",
      description:
        "Travel and enjoy you wonderful trip, don't forget to take pictures and share with your friends.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div>
            <p className="text-primary font-medium mb-2">Easy and Fast</p>
            <h2 className="text-5xl font-bold text-primary mb-8 font-bebas tracking-wide leading-tight">
              Book Your Next Trip
              <br />
              In 3 Easy Steps
            </h2>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Trip Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/spotlight/capturing-moments.png"
                  alt="Trip to Greece"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Trip To Greece
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                14-29 June | by Robbie
              </p>

              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
                <span className="ml-3 text-sm text-gray-600">
                  24 people going
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-primary mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm">4.8</span>
                </div>
                <div>
                  <span className="text-gray-400 line-through text-sm">
                    ₹1,040
                  </span>
                  <span className="text-primary font-bold ml-2">₹840</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
