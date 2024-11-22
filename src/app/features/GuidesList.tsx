"use client";

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { format } from 'date-fns';


type Guide = {
    id: number;
    title: string;
    text: string;
    date: Date;
    image?: string | null; // Allows string, undefined, or null
};

interface GuidesListProps {
    guides: Guide[];
    totalPages: number;
    currentPage: number;
}

export default function GuidesList({ guides, totalPages, currentPage }: GuidesListProps) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (pageNum: number) => {
        const tipsPage = searchParams.get('tipsPage') || '1';
        const query = searchParams.get('query') || '';
        router.push(`/features?guidesPage=${pageNum}&tipsPage=${tipsPage}&query=${query}`);
    };


    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {guides.map((guide) => (
                <div key={guide.id} className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">{guide.title}</h2>
                    <p className="text-sm text-gray-600">
                        {format(new Date(guide.date), 'dd/MM/yyyy')} {/* Use consistent format */}
                    </p>
                    <p className="mt-2">{guide.text}</p>

                    {guide.image && (
                        <Image src={guide.image} alt={guide.title} className="mt-6" height={150} width={300} style={{borderRadius: 6}} />
                    )}
                </div>
                ))}
            </div>

           {/* Pagination */}
            <div className="flex justify-center mt-6">
                <ul className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <li key={pageNum}>
                            <button
                                onClick={() => handlePageChange(pageNum)}
                                className={`px-3 py-1 rounded ${
                                pageNum === currentPage ? 'bg-purple-500 text-black' : 'bg-gray-200 text-black'
                                }`}
                            >
                                {pageNum}
                            </button>
                        </li>
                    ))}

                    <li>
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className="px-3 py-1 rounded bg-gray-200 text-purple-700"
                        >
                            Last Page
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
}
