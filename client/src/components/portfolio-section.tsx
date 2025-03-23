import { Button } from "./ui/button";
import { FolderPlus } from "lucide-react";

export default function PortfolioSection() {
  const categories = [
    { name: "Semua", active: true },
    { name: "GIS", active: false },
    { name: "Remote Sensing", active: false },
    { name: "Visualisasi 3D", active: false }
  ];

  return (
    <section id="portfolio" className="py-16 px-4 bg-white dark:bg-dark-800">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h5 className="text-sm uppercase tracking-wider text-primary dark:text-primary-100 font-semibold mb-2">Karya</h5>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Portofolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Saat ini belum ada proyek yang ditampilkan. Bagian ini akan diisi dengan proyek-proyek geospasial dan visualisasi data yang akan datang.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={category.active 
                ? "bg-primary text-white rounded-full text-sm" 
                : "bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-dark-600"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Empty Portfolio with Placeholder */}
        <div className="text-center p-8 bg-gray-50 dark:bg-dark-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-dark-600">
          <FolderPlus className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Belum ada proyek</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Proyek-proyek akan ditambahkan segera setelah tersedia.</p>
        </div>
      </div>
    </section>
  );
}
