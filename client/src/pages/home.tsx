import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import AboutSection from "@/components/about-section";
import ResumeSection from "@/components/resume-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  // Scroll animation effect
  useEffect(() => {
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    };
    
    // Add initial classes
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-700', 'ease-out');
    });
    
    // Run once on load
    setTimeout(animateOnScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-dark-900 dark:text-gray-100 font-sans min-h-screen flex flex-col">
      <Navbar />
      <Header />
      
      <main className="flex-grow">
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
