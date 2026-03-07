import React from 'react';
import Link from 'next/link';

const competitions = [
  {
    id: 'tech-summit-2026',
    category: 'Technology',
    title: 'Tech Summit 2026 Programming Contest',
    organizer: 'Global Tech',
    date: '15 Mar 2026',
    slots: 50,
  },
  {
    id: 'design-awards-2026',
    category: 'UI/UX Design',
    title: 'Creative Design Awards 2026',
    organizer: 'Design Hub',
    date: '22 Apr 2026',
    slots: 30,
  },
  {
    id: 'startup-pitch-fest',
    category: 'Business',
    title: 'Startup Pitch Fest 2026',
    organizer: 'Venture Inc.',
    date: '10 May 2026',
    slots: 100,
  }
];

const CompetitionListPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider">Find Your Challenge</p>
          <h1 className="mt-2 text-4xl font-extrabold text-[#a68a2d] sm:text-5xl md:text-6xl">
            Jelajahi Kompetisi
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Temukan tantangan baru, asah kemampuanmu, dan menangkan hadiah menarik di berbagai bidang.
          </p>
        </div>

        <div className="mt-12">
          {/* Filters would go here */}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {competitions.map((comp) => (
            <div key={comp.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-[#a68a2d] hover:shadow-2xl">
              <div className="p-6">
                <div className="flex justify-between items-start">
                    <p className="text-sm font-semibold text-[#a68a2d] uppercase tracking-wide">{comp.category}</p>
                    <div className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{comp.slots} Slots</div>
                </div>
                <h2 className="mt-2 text-xl font-bold text-gray-900 h-16">{comp.title}</h2>
                <p className="mt-2 text-sm text-gray-600">Diselenggarakan oleh: <strong>{comp.organizer}</strong></p>
                <p className="mt-1 text-sm text-gray-500">Batas Pendaftaran: {comp.date}</p>
                <div className="mt-6">
                  <Link 
                    href={`/competitions/${comp.id}`} 
                    className="w-full text-center block px-4 py-3 bg-[#a68a2d] text-white font-bold rounded-lg hover:bg-[#8e7526] transition-colors shadow-lg shadow-[#a68a2d]/20"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitionListPage;
