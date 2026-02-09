"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Armchair,
  Stethoscope,
  ShoppingBag,
  Image as GalleryIcon,
  Menu,
  X,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Armchair },
    { name: "Doctors", href: "/doctors", icon: Stethoscope },
    { name: "Products", href: "/products", icon: ShoppingBag },
    { name: "Gallery", href: "/gallery", icon: GalleryIcon },
  ];

  return (
    <nav className="w-full sticky z-50 top-0 text-white border-b-2 border-secondary bg-[#684b3e]">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-[80px] px-4 md:px-20">

        {/* Logo */}
        <Link href={'/'} className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className=""
          />
          <h1 className="text-xl md:text-3xl font-extrabold">
            SVI DESIGN
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-secondary transition"
                >
                  <Icon size={18} />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact */}
        <div className="hidden lg:flex flex-col text-sm font-medium">
          <Link href="/" className="flex items-center gap-2 hover:text-secondary">
            <Mail size={16} />
            support@svidesign.com
          </Link>
          <Link href="/" className="flex items-center gap-2 hover:text-secondary">
            <Phone size={16} />
            +91 9829129117
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-secondary">
          <ul className="flex flex-col gap-6 px-6 py-6 text-sm font-medium">

            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 hover:text-secondary"
                  >
                    <Icon size={18} />
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Contact */}
            <div className="pt-4 border-t border-secondary flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-3">
                <Mail size={18} />
                support@svidesign.com
              </Link>
              <Link href="/" className="flex items-center gap-3">
                <Phone size={18} />
                +91 9829129117
              </Link>
            </div>

          </ul>
        </div>
      )}
    </nav>
  );
}
