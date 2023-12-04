// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
    };

    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border rounded-l px-4 py-2 outline-none"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
