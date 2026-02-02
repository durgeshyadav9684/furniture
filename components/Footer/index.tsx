import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">SVI DESIGN</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            We create premium custom-made furniture that perfectly fits your
            lifestyle, space, and comfort.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-white hover:text-black transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white transition">
              Custom Furniture Design
            </li>
            <li className="hover:text-white transition">
              Home Interior Solutions
            </li>
            <li className="hover:text-white transition">
              Office Furniture Setup
            </li>
            <li className="hover:text-white transition">
              Delivery & Installation
            </li>
            <li className="hover:text-white transition">
              Premium Wood Crafting
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-white" />
              Jaipur, Rajasthan, India
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-white" />
              +91 98291 29117
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-white" />
              support@svidesign.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-14 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SVI DESIGN. All rights reserved.
      </div>
    </footer>
  );
}
