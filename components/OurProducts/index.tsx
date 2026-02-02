"use client"
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function OurProducts() {
  // Full Products List
  const products = [
    {
      title: "Luxury Sofa Set",
      desc: "Modern comfort with premium fabric and wooden finish.",
      image:
        "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1170&auto=format&fit=crop",
      rate: "$200",
    },
    {
      title: "King Size Bed",
      desc: "Elegant design with strong build quality for luxury bedrooms.",
      image:
        "https://images.unsplash.com/photo-1635594202056-9ea3b497e5c0?q=80&w=880&auto=format&fit=crop",
      rate: "$350",
    },
    {
      title: "Wooden Chair Set",
      desc: "Minimal chairs crafted with premium teak wood finishing.",
      image:
        "https://images.unsplash.com/photo-1722268994698-b85790171832?q=80&w=1077&auto=format&fit=crop",
      rate: "$120",
    },

    // Extra Products (Hidden Initially)
    {
      title: "Dining Table",
      desc: "Spacious dining table for modern and classic interiors.",
      image:
        "https://plus.unsplash.com/premium_photo-1675616563537-25cfe7f089e4?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rate: "$450",
    },
    {
      title: "Wardrobe Cabinet",
      desc: "Stylish wardrobe with large storage and premium finishing.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1170&auto=format&fit=crop",
      rate: "$500",
    },
    {
      title: "Office Desk",
      desc: "Perfect desk setup for workspace productivity and comfort.",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rate: "$250",
    },
  ];

  // Show Only 3 Initially
  const [showAll, setShowAll] = useState(false);

  // Products to Display
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Premium Products
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Explore our handcrafted furniture collection designed for luxury,
            comfort, and modern living spaces.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Price + Button */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-semibold text-indigo-600">
                    {item.rate}
                  </span>

                  <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
                    <ShoppingCart size={18} />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand Button */}
        <div className="text-center mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700 transition"
          >
            {showAll ? "Show Less Products" : "View More Products"}
          </button>
        </div>
      </div>
    </section>
  );
}
