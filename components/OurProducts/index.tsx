"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Reveal } from "../Reveal";

// --- TYPES ---
interface Product {
  id: number;
  category: string;
  subcategory: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

// --- IMAGE COMPONENT ---
function ProductImage({ item }: { item: Product }) {
  const fallback = `https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800&sig=${item.id}`;
  const [imgSrc, setImgSrc] = useState<string>(item.imageUrl || fallback);

  return (
    <div className="relative overflow-hidden h-64">
      <Image
        src={imgSrc}
        alt={item.name}
        fill
        className="object-cover group-hover:scale-110 transition duration-500"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        onError={() => setImgSrc(fallback)}
      />
    </div>
  );
}

export default function OurProducts() {

  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("All");
  const [showCount, setShowCount] = useState<number>(6);

  // ✅ FETCH FROM YOUR VERCEL API
  useEffect(() => {
    fetch("https://furniture-store.vercel.app/api/products")
      .then(res => res.json())
      .then(data => {console.log(data);setProducts(data)})
      .catch(err => console.log("API error:", err));
  }, []);

  // ✅ AUTO BUILD CATEGORY LIST FROM API DATA
  const categories = useMemo(() => {
    const unique = ["All", ...new Set(products.map(p => p.category))];
    return unique;
  }, [products]);

  // ✅ AUTO BUILD SUBCATEGORY LIST FROM API DATA
  const subcategories = useMemo(() => {
    const map: Record<string, string[]> = {};
    products.forEach(p => {
      if (!map[p.category]) map[p.category] = [];
      if (!map[p.category].includes(p.subcategory)) {
        map[p.category].push(p.subcategory);
      }
    });
    return map;
  }, [products]);

  // ✅ FILTER PRODUCTS
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const categoryMatch =
        activeCategory === "All" || p.category === activeCategory;
      const subMatch =
        activeSubcategory === "All" || p.subcategory === activeSubcategory;
      return categoryMatch && subMatch;
    });
  }, [products, activeCategory, activeSubcategory]);

  const displayedProducts = filteredProducts.slice(0, showCount);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubcategory("All");
    setShowCount(6);
  };

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Our Premium Products</h2>
            <p className="text-gray-600 mt-3">Handcrafted furniture for every room.</p>
          </div>

          {/* CATEGORY BAR */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition ${
                  activeCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-600 border-gray-300 hover:border-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SUBCATEGORY BAR */}
          {activeCategory !== "All" && subcategories[activeCategory] && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => { setActiveSubcategory("All"); setShowCount(6); }}
                className={`px-4 py-1.5 rounded-lg border text-xs uppercase tracking-wider ${
                  activeSubcategory === "All"
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >
                All {activeCategory}
              </button>

              {subcategories[activeCategory].map(sub => (
                <button
                  key={sub}
                  onClick={() => {
                    setActiveSubcategory(sub);
                    setShowCount(6);
                  }}
                  className={`px-4 py-1.5 rounded-lg border text-xs uppercase tracking-wider ${
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

          {/* PRODUCT GRID */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProducts.map(item => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group">

                <ProductImage item={item} />

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase">
                      {item.subcategory}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <span className="text-lg font-semibold text-gray-900">
                      ${item.price}
                    </span>

                    <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
                      <ShoppingCart size={18} /> Buy
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
