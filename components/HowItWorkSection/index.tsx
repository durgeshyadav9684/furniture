import { Reveal } from "../Reveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "1.",
      title: "Purchase Securely",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "/images/PurchaseSecurelyBanner.png",
    },
    {
      number: "2.",
      title: "Ships From Warehouse",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "3.",
      title: "Style Your Room",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <Reveal>
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Image Box */}
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[320px] object-cover rounded-xl"
                  />

                  {/* Number Circle */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="mt-10 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm mt-3 px-6">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
