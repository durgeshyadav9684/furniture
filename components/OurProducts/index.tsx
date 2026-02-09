"use client"
import { useState, useMemo } from "react";
import Image from "next/image"; // Next.js Image component
import { ShoppingCart } from "lucide-react";
import { products, categories, subcategories } from "../../public/data/data.js";

// --- TYPES ---
interface Product {
  id: number;
  category: string;
  subcategory: string;
  title: string;
  desc: string;
  image: string;
  rate: string;
}

interface Subcategories {
  [key: string]: string[];
}

// --- SUB-COMPONENT FOR IMAGE HANDLING ---
interface ProductImageProps {
  item: Product;
}

function ProductImage({ item }: ProductImageProps) {
  // Use a unique random furniture image for this specific ID if the primary fails
  const fallback = `https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800&sig=${item.id}`;
  const [imgSrc, setImgSrc] = useState<string>(item.image);

  return (
    <div className="relative overflow-hidden h-64">
      <Image
        src={imgSrc}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-110 transition duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        // If image fails, switch to the unique random fallback
        onError={() => setImgSrc(fallback)}
      />
    </div>
  );
}

export default function OurProducts() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("All");
  const [showCount, setShowCount] = useState<number>(6);

  const filteredProducts = useMemo(() => {
    return (products as Product[]).filter(p => {
      const categoryMatch = activeCategory === "All" || p.category === activeCategory;
      const subcategoryMatch = activeSubcategory === "All" || p.subcategory === activeSubcategory;
      return categoryMatch && subcategoryMatch;
    });
  }, [activeCategory, activeSubcategory]);

  const displayedProducts = filteredProducts.slice(0, showCount);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubcategory("All");
    setShowCount(6);
  };

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Our Premium Products</h2>
          <p className="text-gray-600 mt-3">Handcrafted furniture for every room.</p>
        </div>

        {/* Main Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {(categories as string[]).map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition duration-300 ${
                activeCategory === cat 
                ? "bg-indigo-600 text-white border-indigo-600" 
                : "bg-white text-gray-600 border-gray-300 hover:border-indigo-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subcategory Filter Bar */}
        {activeCategory !== "All" && (subcategories as Subcategories)[activeCategory] && (
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-top-2">
            <button
              onClick={() => { setActiveSubcategory("All"); setShowCount(6); }}
              className={`px-4 py-1.5 rounded-lg border text-xs uppercase tracking-wider transition ${
                activeSubcategory === "All"
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
            >
              All {activeCategory}
            </button>
            {(subcategories as Subcategories)[activeCategory].map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  setActiveSubcategory(sub);
                  setShowCount(6);
                }}
                className={`px-4 py-1.5 rounded-lg border text-xs uppercase tracking-wider transition ${
                  activeSubcategory === sub
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">
                
                {/* Refactored Image Component */}
                <ProductImage item={item} />

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{item.category}</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase">{item.subcategory}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.desc}</p>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-semibold text-gray-900">{item.rate}</span>
                    <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
                      <ShoppingCart size={18} /> Buy
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 italic">No products found in this subcategory.</p>
            </div>
          )}
        </div>

        {/* Expand Button */}
        {showCount < filteredProducts.length && (
          <div className="text-center mt-14">
            <button
              onClick={() => setShowCount(prev => prev + 6)}
              className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-700 transition"
            >
              View More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}