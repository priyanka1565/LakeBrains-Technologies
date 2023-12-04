// App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherPopup from './components/Weather';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const searchWeather = async (city) => {
    const apiKey = '840de593b7028de6e424162454790fe5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setWeatherData(null);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={searchWeather} />
      {showPopup && <WeatherPopup data={weatherData} onClose={closePopup} />}
    </div>
  );
};

export default App;
