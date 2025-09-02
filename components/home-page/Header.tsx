"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false); // close on >= sm screens
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="shadow-sm fixed z-100 max-w-[95vw] min-w-[95vw] bg-white mx-auto left-1/2 -translate-x-1/2 top-10 rounded-md">
      <div className="max-w-full mx-auto pr-4 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={"/images/logo.png"}
              alt="TravlAbhi"
              width={120}
              height={120}
            />
          </div>

          {/* Desktop actions */}
          <div className="hidden sm:flex items-center gap-6">
            <button className="bg-primary font-bebas hover:bg-primary/90 text-primary-foreground px-8 py-1 rounded-md font-medium transition-colors duration-200 cursor-pointer">
              LOGIN
            </button>
          </div>

          {/* Center link on sm+ */}
          <Link
            href={"/"}
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 font-garetheavy text-primary"
          >
            Explore All Trips
          </Link>

          {/* Burger button */}
          <button
            className="sm:hidden p-2 rounded-md border border-slate-200 text-primary"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-slate-200">
          <div className="px-4 py-3 flex flex-col gap-3">
            <Link href={"/"} className="font-garetheavy text-primary">
              Explore All Trips
            </Link>
            <button className="bg-primary font-bebas hover:bg-primary/90 text-primary-foreground px-8 py-2 rounded-md w-max">
              LOGIN
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
