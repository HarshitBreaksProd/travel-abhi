import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-sm fixed z-100 max-w-[95vw] min-w-[95vw] bg-white mx-auto left-1/2 -translate-x-1/2 top-10 rounded-md">
      <div className="max-w-full mx-auto pr-4">
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

          {/* Explore Button */}
          <div className="">
            <Link href={"/"} className="font-garetheavy text-primary">
              Explore All Trips
            </Link>
          </div>

          {/* Login Button */}
            <button className="bg-primary font-bebas hover:bg-primary/90 text-primary-foreground px-8 py-1 rounded-md font-medium transition-colors duration-200 cursor-pointer">
              LOGIN
            </button>
        </div>
      </div>
    </header>
  );
}
