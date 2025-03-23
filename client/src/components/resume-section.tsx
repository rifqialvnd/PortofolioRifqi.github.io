import { BookOpen, User, Code } from "lucide-react";

export default function ResumeSection() {
  const education = [
    {
      period: "2020 - 2023",
      title: "SMA PGII 2 Bandung",
      description: "Jurusan MIPA dengan fokus pada mata pelajaran matematika dan ipa"
    },
    {
      period: "2017 - 2020",
      title: "SMPN 2 Bandung",
      description: "Pendidikan menengah pertama dengan beragam kegiatan ekstrakurikuler"
    },
    {
      period: "2011 - 2017",
      title: "SDN 037 Sabang",
      description: "Pendidikan dasar dengan pengembangan kemampuan sosial dan akademik"
    }
  ];

  const experience = [
    {
      period: "2024 - Sekarang",
      title: "Pengurus Harian JANTERA UPI Geografi",
      description: "Aktif dalam komunitas Pencinta Alam yang berfokus pada kegiatan alam, geografi, dan kepenulisan"
    },
    {
      period: "2024 - Sekarang",
      title: "Anggota komunitas SCALE - Himpunan SaIG",
      description: "Aktif dalam komunitas yang berfokus pada bidang kartografi dan visualisasi peta"
    },
    {
      period: "2021 - 2022",
      title: "Ketua Sekbid 7 OSIS SMA PGII 2 Bandung",
      description: "Memimpin bagian keolahragaan dan kesehatan jasmani dalam kegiatan sekolah"
    }
  ];

  const skills = [
    { name: "GIS Software (QGIS, ArcGIS)", percentage: 85 },
    { name: "Remote Sensing", percentage: 75 },
    { name: "Spatial Analysis", percentage: 80 },
    { name: "3D Visualization", percentage: 70 },
    { name: "Data Analysis", percentage: 65 },
    { name: "Cartography", percentage: 90 }
  ];

  return (
    <section id="resume" className="py-16 px-4 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h5 className="text-sm uppercase tracking-wider text-primary dark:text-primary-100 font-semibold mb-2">Perjalanan</h5>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-primary dark:text-primary-100 mr-3" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Pendidikan</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary/30 dark:border-primary/50">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 dark:bg-primary/30 text-primary-600 dark:text-primary-100 rounded mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-primary dark:text-primary-100 mr-3" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Pengalaman Organisasi</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-pink-200 dark:border-pink-900">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                  <div className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <Code className="h-6 w-6 text-primary dark:text-primary-100 mr-3" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Keterampilan</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-primary dark:text-primary-100">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-primary dark:text-primary-100">{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
