import { useState } from "react";
import { Mail, ArrowRight, Linkedin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua kolom yang wajib diisi.",
        variant: "destructive"
      });
      return;
    }
    
    // Form is valid - would normally send data to server
    toast({
      title: "Pesan terkirim!",
      description: "Terima kasih telah menghubungi.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "rifqialvnd@upi.edu",
      action: { href: "mailto:rifqialvnd@upi.edu", text: "Kirim Email" }
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+62 877 3899 6689",
      action: { href: "tel:+6287738996689", text: "Hubungi" }
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      details: "Rifqi Alviandi",
      action: { href: "https://www.linkedin.com/in/rifqi-alviandi-ab734a272", text: "Profil LinkedIn" }
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h5 className="text-sm uppercase tracking-wider text-primary dark:text-primary-100 font-semibold mb-2">Hubungi</h5>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Kontak Saya</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui salah satu metode berikut:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-block p-4 rounded-full bg-primary/10 dark:bg-primary/30 text-primary dark:text-primary-100 mb-4">
                {method.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{method.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{method.details}</p>
              <a 
                href={method.action.href} 
                className="text-primary dark:text-primary-100 hover:underline inline-flex items-center"
              >
                {method.action.text} <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Contact Form */}
        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Kirim Pesan</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nama</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nama lengkap Anda"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6 space-y-2">
              <Label htmlFor="subject">Subjek</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Topik pesan Anda"
                value={formData.subject}
                onChange={handleChange}
                className="border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700"
                required
              />
            </div>
            
            <div className="mb-6 space-y-2">
              <Label htmlFor="message">Pesan</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tuliskan pesan Anda di sini..."
                value={formData.message}
                onChange={handleChange}
                className="border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" /> Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
