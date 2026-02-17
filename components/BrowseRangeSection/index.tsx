import { Reveal } from "../Reveal";

export default function BrowseRange() {
  const categories = [
    {
      title: "Dining",
      image:
        "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Living",
      image:
        "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <Reveal>
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Browse The Range
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <div key={index} className="text-center">
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
