import { useState } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "./ui/theme-toggle";
import { Menu, X } from "lucide-react";

const NavbarLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#resume", label: "Resume" },
  { href: "#portfolio", label: "Portofolio" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary dark:text-primary-100">
          RA
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          {NavbarLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        
        <button 
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-dark-800 shadow-md`}>
        <div className="flex flex-col px-4 pt-2 pb-4 space-y-3">
          {NavbarLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-100 transition-colors"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="py-2 flex">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
