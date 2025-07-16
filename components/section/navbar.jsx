"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/service" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 ${
        isScrolled
          ? "bg-text-dark  shadow-xl transition-all duration-300"
          : "bg-transparent transition-all duration-300"
      }`}
    >
      <nav className="containerBody flex justify-between items-center py-5 transition-all duration-300">
        <div className="hidden md:flex gap-4">
          {links.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button
                variant="link"
                className={`${
                  pathname === item.href
                    ? "text-accent underline"
                    : "text-tertiary"
                } transition-all duration-300 pl-0`}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        {/* Book Now Button */}
        <Link href="/contact">
          <Button variant="outline">Book An Appointment</Button>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-tertiary cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-tertiary text-text-dark">
              <SheetHeader>
                <SheetTitle>
                  <VisuallyHidden>Mobile Navigation</VisuallyHidden>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-6 items-center text-center">
                {links.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant="link"
                      className={`${
                        pathname === item.href
                          ? "text-accent underline"
                          : "text-text-dark"
                      } transition-all duration-300 pl-0`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
