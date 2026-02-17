import { Truck, Headphones, ShieldCheck } from "lucide-react";
import { Reveal } from "../Reveal";

export default function FeaturesBar() {
  const features = [
    {
      title: "Free Delivery",
      desc: "Lorem ipsum dolor sit amet.",
      icon: Truck,
    },
    {
      title: "Support 24/7",
      desc: "Lorem ipsum dolor sit amet.",
      icon: Headphones,
    },
    {
      title: "100% Authentic",
      desc: "Lorem ipsum dolor sit amet.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-[#F2F5FF]">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Feature Box Wrapper */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6  rounded-md py-6 px-8">
            
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 text-center md:text-left"
                >
                  {/* Icon */}
                  <Icon size={32} className="text-black" />

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
