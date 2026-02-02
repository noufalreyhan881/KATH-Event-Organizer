import React from 'react';

const MeetOurTeam = () => {
  // Data dummy untuk 5 anggota tim sesuai gambar
  const teamMembers = [
    { name: "Name", role: "Role", image: "/path-to-team-1.jpg" },
    { name: "Name", role: "Role", image: "/path-to-team-2.jpg" },
    { name: "Name", role: "Role", image: "/path-to-team-3.jpg" },
    { name: "Name", role: "Role", image: "/path-to-team-4.jpg" },
    { name: "Name", role: "Role", image: "/path-to-team-5.jpg" },
  ];

  return (
    <section className="w-full bg-[#e5e5e5] py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#a68a2d] text-5xl md:text-6xl font-bold">
            Meet Our Team
          </h2>
        </div>

        {/* Team Grid */}
        {/* Menggunakan grid-cols-5 pada layar besar (lg) untuk meniru gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              
              {/* Foto Profil */}
              <div className="aspect-square w-full overflow-hidden mb-4 bg-gray-300">
                {/* Ganti src dengan foto asli */}
                <img 
                  src={member.image} 
                  alt={`Team Member ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Nama & Role */}
              <div className="text-left">
                <h3 className="text-black font-bold text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm font-normal mt-1">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetOurTeam;