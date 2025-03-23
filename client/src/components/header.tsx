import { Mail, Linkedin, Phone, Github } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-dark-900 dark:to-dark-800 text-center">
      <div className="container mx-auto max-w-4xl animate-fade-in">
        <div className="profile-img mb-6 inline-block">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-dark-700 shadow-lg overflow-hidden">
            <img 
              src="/assets/img/profile-new.png" 
              alt="Rifqi Alviandi" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Rifqi Alviandi
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Sains Informasi Geografi | Komunitas SCALE | JANTERA UPI Geografi
        </p>
        
        <div className="social-links flex justify-center space-x-4 mb-8">
          <a 
            href="https://www.linkedin.com/in/rifqi-alviandi-ab734a272" 
            className="social-icon bg-blue-50 dark:bg-dark-700 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-dark-600 p-3 rounded-full transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:rifqialvnd@upi.edu" 
            className="social-icon bg-red-50 dark:bg-dark-700 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-dark-600 p-3 rounded-full transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href="tel:+6287738996689" 
            className="social-icon bg-green-50 dark:bg-dark-700 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-dark-600 p-3 rounded-full transition-colors"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="social-icon bg-purple-50 dark:bg-dark-700 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-dark-600 p-3 rounded-full transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
        
        <div className="flex justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Hubungi Saya
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
