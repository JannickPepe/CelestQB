// components/SearchBar.tsx
"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';


interface SearchBarProps {
    initialQuery?: string;
}

export default function SearchBar({ initialQuery = '' }: SearchBarProps) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState(initialQuery);

    const handleSearch = () => {
        router.push(`/features?query=${encodeURIComponent(searchTerm)}`);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
        handleSearch();
        }
    };

    return (
        <section className='max-w-lg mx-auto mb-6'>
            <div className="flex justify-center items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search by title..."
                    className="border p-2 text-black appearance-none focus:outline-none"
                    style={{borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}
                />
                <button onClick={handleSearch} className="px-2 py-2 bg-violet-600 text-zinc-200" style={{borderTopRightRadius: 10, borderBottomRightRadius: 10}}>
                    Search
                </button>
            </div>
        </section>
    );
}
