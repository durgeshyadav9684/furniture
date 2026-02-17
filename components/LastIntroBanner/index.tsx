import { Reveal } from "../Reveal";

export default function LastIntroSection() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center bg-cover bg-center object-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <Reveal>
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Let’s Create Furniture <br />
            That Fits Your Lifestyle
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-gray-200 text-base md:text-lg leading-relaxed">
            Get premium custom-made furniture designed exclusively for your home or
            workspace.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            {/* Primary Button */}
            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Get Custom Quote
            </button>

            {/* Outline Button */}
            <button className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              Call Now
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
