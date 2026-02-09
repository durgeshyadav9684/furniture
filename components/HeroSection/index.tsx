import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* Background Wrapper */}
    <div className="relative w-full h-[80vh]  md:h-[80vh]">
        
        {/* Background Image */}
        <Image
          src="/images/hero-bg.webp"   // put image inside public folder
          alt="Furniture Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-16">
          
          {/* Card Box */}
          <div className="bg-[#f1efec] w-full max-w-[450px] rounded-xl p-8 md:p-10 shadow-lg">
            
            {/* Small Heading */}
            <p className="text-sm uppercase tracking-widest text-gray-600">
              New Arrival
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-3 leading-snug">
              Discover Our <br /> New Collection
            </h1>

            {/* Description */}
            <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            {/* Button */}
            <button className="mt-6 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-secondary transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
