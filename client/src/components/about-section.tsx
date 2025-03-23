import { MapPin, Globe, Mail, User } from "lucide-react";

export default function AboutSection() {
  const skills = [
    "GIS", 
    "Remote Sensing", 
    "Data Visualization", 
    "3D Modeling", 
    "Spatial Analysis"
  ];
  
  const contactInfo = [
    { icon: <MapPin className="text-primary dark:text-primary-100 h-5 w-5 mr-3" />, text: "Bandung, Indonesia" },
    { icon: <Globe className="text-primary dark:text-primary-100 h-5 w-5 mr-3" />, text: "Universitas Pendidikan Indonesia" },
    { icon: <Mail className="text-primary dark:text-primary-100 h-5 w-5 mr-3" />, text: "rifqialvnd@upi.edu" },
    { icon: <User className="text-primary dark:text-primary-100 h-5 w-5 mr-3" />, text: "Mahasiswa Aktif" }
  ];
  
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-dark-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h5 className="text-sm uppercase tracking-wider text-primary dark:text-primary-100 font-semibold mb-2">Perkenalan</h5>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tentang Saya</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
        </div>
        
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]">
              <img 
                src="/assets/img/profile-new.png" 
                alt="Rifqi Alviandi" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-sm font-medium">Sains Informasi Geografi</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Saya adalah mahasiswa S1 di Universitas Pendidikan Indonesia (UPI). Saya kuliah di jurusan Ilmu Informasi Geografis (SaIG), yang berfokus pada penginderaan jauh, kartografi, dan pemetaan survei. Dengan minat mendalam di bidang geospasial, data SIG, dan minat pada visualisasi 3D, saya bersemangat untuk menerapkan konsep geospasial dalam memecahkan masalah dunia nyata.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  {item.icon}
                  <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-primary/10 dark:bg-primary/30 text-primary-600 dark:text-primary-100 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
