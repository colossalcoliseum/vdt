import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const searchRef = useRef(null);

    // Debounce функция за ограничаване на заявките
    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            setIsOpen(false);
            return;
        }

        const timeoutId = setTimeout(() => {
            performSearch(query);
        }, 300); // 300ms delay

        return () => clearTimeout(timeoutId);
    }, [query]);

    // Функция за търсене
    const performSearch = async (searchQuery) => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/search?q=${encodeURIComponent(searchQuery)}`);
            setResults(response.data);
            setIsOpen(true);
        } catch (error) {
            console.error('Search error:', error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    // Затваряне на dropdown при клик извън него
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Избиране на резултат
    const handleSelectResult = (result) => {
        setQuery(result.name); // или каквото искаш да се покаже
        setIsOpen(false);
        // Тук можеш да добавиш логика за това какво да се случи при избор
        console.log('Selected:', result);
    };

    return (
        <div className="relative w-full max-w-md" ref={searchRef}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Търсене..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Loading indicator */}
            {loading && (
                <div className="absolute right-3 top-3">
                    <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
            )}

            {/* Dropdown резултати */}
            {isOpen && results.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {results.map((result) => (
                        <div
                            key={result.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                            onClick={() => handleSelectResult(result)}
                        >
                            <div className="font-medium">{result.name}</div>
                            <div className="text-sm text-gray-600">{result.email}</div>
                        </div>
                    ))}
                </div>
            )}

            {/* Няма резултати */}
            {isOpen && !loading && results.length === 0 && query.length >= 2 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <div className="px-4 py-2 text-gray-500 text-center">
                        Няма намерени резултати
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBox;
