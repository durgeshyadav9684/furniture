import Image from "next/image";

export default function InspirationCollection() {
  const items = [
    {
      id: 1,
      img: "/images/insp1.png",
      rounded: "rounded-tl-[80px]",
    },
    {
      id: 2,
      img: "/images/insp2.png",
      rounded: "rounded-none",
    },
    {
      id: 3,
      img: "/images/insp3.png",
      rounded: "rounded-br-[80px]",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Inspiration Collection
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          
          {items.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden bg-gray-100 ${item.rounded}`}
            >
              <Image
                src={item.img}
                alt="Inspiration"
                width={335}
                height={434}
                className="max-w-[335px]  object-contain hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
