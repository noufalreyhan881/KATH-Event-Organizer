"use client";

import React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

const competitions = [
  {
    id: 'tech-summit-2026',
    category: 'Technology',
    title: 'Tech Summit 2026 Programming Contest',
    organizer: 'Global Tech',
    date: '15 Mar 2026',
    slots: 50,
    description: "Showcase your coding prowess in our annual programming contest. Solve algorithmic challenges, race against the clock, and climb the leaderboard. Great for competitive programmers of all levels.",
    requirements: [
        "Familiarity with at least one programming language (C++, Java, Python).",
        "Team size: 1-3 members.",
        "Access to a stable internet connection.",
    ]
  },
  {
    id: 'design-awards-2026',
    category: 'UI/UX Design',
    title: 'Creative Design Awards 2026',
    organizer: 'Design Hub',
    date: '22 Apr 2026',
    slots: 30,
    description: "The Creative Design Awards celebrate the best in user interface and user experience design. Submit your most innovative and user-friendly project. The theme for this year is 'Designing for Social Good'.",
    requirements: [
        "Must be an active university student or recent graduate.",
        "Team size: 2-4 members.",
        "Submission must include a case study and a link to a live or mocked-up prototype (Figma, Adobe XD, etc.)."
    ]
  },
  {
    id: 'startup-pitch-fest',
    category: 'Business',
    title: 'Startup Pitch Fest 2026',
    organizer: 'Venture Inc.',
    date: '10 May 2026',
    slots: 100,
    description: "Have a groundbreaking startup idea? This is your chance to pitch it to a panel of venture capitalists and industry leaders. Win seed funding and mentorship to turn your dream into reality.",
    requirements: [
        "The startup must be in its early stage (pre-seed or seed).",
        "Team size: 1-5 members.",
        "A comprehensive business plan and pitch deck are required for submission."
    ]
  }
];

const PublicCompetitionDetailPage = () => {
    const params = useParams();
    const slug = params.slug as string;
    
    const competition = competitions.find(c => c.id === slug);

    if (!competition) {
        notFound();
    }

    // This is where we construct the redirect URL
    const createTeamUrl = `/user/my-team-page/create-team?redirect=/competitions/${slug}`;

    return (
        <div className="bg-white">
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-base font-semibold text-[#a68a2d] uppercase tracking-wide">{competition.category}</p>
                    <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{competition.title}</h1>
                    <p className="mt-4 max-w-xl mx-auto text-lg text-gray-500">Organized by <strong>{competition.organizer}</strong></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">{competition.description}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 text-lg">
                                {competition.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Action Card */}
                    <div className="md:col-span-1">
                        <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
                            <h3 className="text-xl font-bold text-gray-900 text-center">Join the Challenge!</h3>
                            
                            <div className="mt-6 space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-medium">Registration Ends</span>
                                    <span className="font-bold text-gray-900">{competition.date}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 font-medium">Available Slots</span>
                                    <span className="font-bold text-gray-900">{competition.slots}</span>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <p className="text-xs text-center text-gray-500 mb-4">
                                    This is a team-based competition. You can create a new team after clicking register.
                                </p>
                                <Link
                                    href={createTeamUrl}
                                    className="w-full block text-center px-6 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-all shadow-lg shadow-gray-900/20"
                                >
                                    Register & Create Team
                                </Link>
                                <p className="text-xs text-center text-gray-400 mt-3">
                                    You will be redirected to create your team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                 {/* This is the logic that should be implemented properly with authentication context */}
                 <div className="mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
                    <strong>Note for Implementation:</strong> The "Register Now" button above is a placeholder. In a real application, we would check if the user is authenticated.
                    <ul className="list-disc list-inside mt-2">
                        <li>If **authenticated**, the link should be: <code className="text-xs bg-yellow-100 p-1 rounded">href="{createTeamUrl}"</code>.</li>
                        <li>If **not authenticated**, the link could redirect to login first: <code className="text-xs bg-yellow-100 p-1 rounded">href={`/auth/login?redirect=/competitions/${slug}`}</code>.</li>
                    </ul>
                 </div>

            </div>
        </div>
    );
};

export default PublicCompetitionDetailPage;
