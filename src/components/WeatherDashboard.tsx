import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { CurrentWeather } from './CurrentWeather';
import { HourlyForecast } from './HourlyForecast';
import { WeeklyForecast } from './WeeklyForecast';
import { WeatherDetails } from './WeatherDetails';
import { WeatherChart } from './WeatherChart';

interface WeatherDashboardProps {
  isDarkMode: boolean;
}

export function WeatherDashboard({ isDarkMode }: WeatherDashboardProps) {
  const [location, setLocation] = useState('San Francisco, CA');
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setLocation(searchInput);
      setSearchInput('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className={`mb-2 transition-colors ${
              isDarkMode ? 'text-white' : 'text-white'
            }`}>Weather Dashboard</h1>
            <div className={`flex items-center gap-2 transition-colors ${
              isDarkMode ? 'text-purple-300' : 'text-blue-900'
            }`}>
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search location..."
                className={`pl-10 pr-4 py-2 rounded-lg border backdrop-blur-sm focus:outline-none focus:ring-2 transition-colors ${
                  isDarkMode 
                    ? 'border-purple-600 bg-purple-900/50 text-white placeholder-purple-300 focus:ring-purple-500' 
                    : 'border-blue-200 bg-white/90 text-gray-900 focus:ring-blue-500'
                }`}
              />
              <Search className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
                isDarkMode ? 'text-purple-400' : 'text-blue-400'
              }`} />
            </div>
          </form>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Current Weather - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <CurrentWeather isDarkMode={isDarkMode} />
        </div>
        
        {/* Weather Details */}
        <div>
          <WeatherDetails isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="mb-6">
        <HourlyForecast isDarkMode={isDarkMode} />
      </div>

      {/* Temperature Chart */}
      <div className="mb-6">
        <WeatherChart isDarkMode={isDarkMode} />
      </div>

      {/* Weekly Forecast */}
      <div>
        <WeeklyForecast isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
