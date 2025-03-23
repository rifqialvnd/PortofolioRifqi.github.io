import { Mail, Linkedin, Phone, Github } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { href: "#about", label: "Tentang" },
    { href: "#resume", label: "Resume" },
    { href: "#portfolio", label: "Portofolio" },
    { href: "#contact", label: "Kontak" }
  ];
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary-100">RA</Link>
            <p className="text-gray-400 mt-2 text-sm">Sains Informasi Geografi | UPI</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/rifqi-alviandi-ab734a272" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:rifqialvnd@upi.edu" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+6287738996689" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
              <Phone className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Rifqi Alviandi. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
