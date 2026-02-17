import Image from "next/image";
import { Reveal } from "../Reveal";

export default function BeautySection() {
  return (
    <section className="w-full bg-[#f5f9ff] py-16">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Main Flex */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-18">

            {/* Left Content */}
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-2xl md:text-5xl font-semibold text-gray-800">
                Beautify Your Space
              </h2>

              <p className="text-gray-500 mt-8 text-sm md:text-lg leading-relaxed">
                Do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <button className="mt-8 px-8 py-3 rounded-full bg-[#003b5c] text-white font-medium hover:bg-[#002a42] transition">
                LEARN MORE
              </button>
            </div>

            {/* Right Image with Shape */}
            <div className="relative flex justify-center">
              
              {/* Image */}
                <Image
                  src="/images/beauty.webp"
                  alt="Beautify Space"
                  width={568}
                  height={600}
                  className="object-cover max-w-[568px] max-h-[600px] rounded-tl-[80px] rounded-br-[80px]"
                />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
