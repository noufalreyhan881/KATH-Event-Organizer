import Link from 'next/link';
import { DASHBOARD_ROUTES } from '@/config/routes';

// Icons
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default function MyProfilePage() {
  const user = {
    name: "Ferry S",
    role: "UI/UX Designer & Frontend Developer",
    location: "Jakarta, Indonesia",
    email: "ferry.s@example.com",
    phone: "+62 812 3456 7890",
    about: "Passionate designer and developer with a keen eye for detail. I love creating user-centric interfaces and bringing them to life with clean code. Always eager to learn new technologies and participate in competitive programming and design challenges.",
    skills: ["UI/UX Design", "React.js", "Next.js", "Tailwind CSS", "Figma", "TypeScript"],
    stats: {
      competitions: 12,
      wins: 5,
      certificates: 8
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Cover Image */}
              <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-800 relative">
                <div className="absolute inset-0 opacity-20 pattern-grid-lg"></div>
              </div>

              <div className="px-8 pb-8">
                <div className="relative flex justify-between items-end -mt-16 mb-6">
                  <div className="relative">
                    <div className="h-32 w-32 rounded-full border-4 border-white bg-[#a68a2d] flex items-center justify-center text-4xl font-bold text-white shadow-md">
                      FS
                    </div>
                    <div className="absolute bottom-2 right-2 h-5 w-5 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div className="flex gap-3 mb-1">
                    <Link href={DASHBOARD_ROUTES.USER_PROFILE_EDIT} className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-transparent rounded-xl text-sm font-bold text-white hover:bg-black transition-colors shadow-lg shadow-gray-900/20">
                      <EditIcon />
                      Edit Profile
                    </Link>
                  </div>
                </div>

                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                  <p className="text-lg text-gray-500 font-medium mt-1">{user.role}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <MapPinIcon />
                      {user.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MailIcon />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PhoneIcon />
                      {user.phone}
                    </div>
                  </div>
                </div>

                {/* Stats Grid - Clickable Links */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6 mb-8">
                  <Link href={`${DASHBOARD_ROUTES.USER_PROFILE_HISTORY}?tab=competitions`} className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors block group cursor-pointer">
                    <span className="block text-3xl font-bold text-gray-900 mb-1 group-hover:text-[#a68a2d] transition-colors">{user.stats.competitions}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors">Competitions</span>
                  </Link>
                  <Link href={`${DASHBOARD_ROUTES.USER_PROFILE_HISTORY}?tab=wins`} className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors border-l border-r border-gray-100 block group cursor-pointer">
                    <span className="block text-3xl font-bold text-gray-900 mb-1 group-hover:text-[#a68a2d] transition-colors">{user.stats.wins}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors">Wins</span>
                  </Link>
                  <Link href={`${DASHBOARD_ROUTES.USER_PROFILE_HISTORY}?tab=certificates`} className="text-center p-4 rounded-xl hover:bg-gray-50 transition-colors block group cursor-pointer">
                    <span className="block text-3xl font-bold text-gray-900 mb-1 group-hover:text-[#a68a2d] transition-colors">{user.stats.certificates}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-600 transition-colors">Certificates</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">About Me</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {user.about}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
      </div>
    </>
  );
}
