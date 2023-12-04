// WeatherPopup.js
import React from 'react';

const WeatherPopup = ({ data, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-4 shadow-md rounded">
                <h2 className="text-lg font-bold mb-4">{data.name}</h2>
                <p>Temperature: {data.main.temp}°C</p>
                {/* Add more weather data fields as needed */}
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
};

export default WeatherPopup;
