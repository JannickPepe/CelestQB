"use client";

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { format } from 'date-fns';


type Tip = {
    id: number;
    title: string;
    text: string;
    date: Date;
    image?: string | null; // Allows string, undefined, or null
};

interface TipsListProps {
    tips: Tip[];
    totalPages: number;
    currentPage: number;
}

export default function TipsList({ tips, totalPages, currentPage }: TipsListProps) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (pageNum: number) => {
        const guidesPage = searchParams.get('guidesPage') || '1';
        const query = searchParams.get('query') || '';
        router.push(`/features?guidesPage=${guidesPage}&tipsPage=${pageNum}&query=${query}`);
    };


    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {tips.map((tip) => (
                <div key={tip.id} className="p-4 border rounded shadow">
                    <h2 className="text-xl font-semibold">{tip.title}</h2>
                    <p className="text-sm text-gray-600">
                        {format(new Date(tip.date), 'dd/MM/yyyy')} {/* Use consistent format */}
                    </p>
                    <p className="mt-2">{tip.text}</p>

                    {tip.image && (
                        <Image src={tip.image} alt={tip.title} className="mt-6" height={150} width={300} style={{borderRadius: 6}} />
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

                    {/*
                    <li>
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className="px-3 py-1 rounded bg-gray-200 text-purple-700"
                        >
                            Last Page
                        </button>
                    </li>
                    */}
                </ul>
            </div>
        </section>
    );
}
