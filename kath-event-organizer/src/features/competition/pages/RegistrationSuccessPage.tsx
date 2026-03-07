"use client";

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PUBLIC_ROUTES, DASHBOARD_ROUTES } from '@/config/routes';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const RegistrationSuccessPage = () => {
    const searchParams = useSearchParams();
    const teamName = searchParams.get('teamName') || 'Your Team';
    const competitionName = searchParams.get('competitionName') || 'the competition';

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-2xl shadow-lg">
                
                <div>
                    <div className="mx-auto flex items-center justify-center h-16 w-16 text-green-500">
                        <CheckCircleIcon />
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Pendaftaran Berhasil!
                    </h2>
                    <p className="mt-2 text-base text-gray-600">
                        Selamat! Tim <strong>{teamName}</strong> telah berhasil terdaftar di <strong>{competitionName}</strong>.
                    </p>
                </div>

                <div className="bg-gray-50/70 p-6 rounded-lg border border-gray-200 text-left space-y-4">
                    <h3 className="font-bold text-gray-900">Apa Langkah Selanjutnya?</h3>
                    <ul className="list-decimal list-inside text-sm text-gray-600 space-y-2">
                        <li>Cek email Anda untuk konfirmasi pendaftaran dan detail teknis.</li>
                        <li>Lengkapi profil tim dan data anggota di halaman "My Team".</li>
                        <li>Tunggu pengumuman dari panitia mengenai jadwal Technical Meeting.</li>
                        <li>Siapkan diri dan ide terbaik Anda!</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link
                        href={DASHBOARD_ROUTES.USER_COMPETITIONS}
                        className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-bold rounded-md text-white bg-gray-900 hover:bg-black transition-all"
                    >
                        Lihat Lomba Saya
                    </Link>
                    <Link
                        href={PUBLIC_ROUTES.HOME}
                        className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 shadow-sm text-sm font-bold rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all"
                    >
                        Kembali ke Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSuccessPage;
