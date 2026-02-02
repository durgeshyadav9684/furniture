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
    <nav className="w-full text-white border-2 border-sky-400 bg-primary">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-6">
        
        {/* Logo */}
          <Image src="/images/logo.jpeg" className="rounded-full" alt="Logo" width={60} height={60} /> 
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-[14px] font-medium">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-sky-500"
                >
                  {/* Icon */}
                  <Icon size={18} />

                  {/* Text */}
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Burger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t-2 border-sky-400 bg-primary">
          <ul className="flex flex-col items-start gap-6 py-6 px-6 text-[15px] font-medium">

            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 hover:text-sky-500"
                  >
                    {/* Icon */}
                    <Icon size={20} />

                    {/* Text */}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
