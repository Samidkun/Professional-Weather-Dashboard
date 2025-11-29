import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react';

interface CurrentWeatherProps {
  isDarkMode: boolean;
}

export function CurrentWeather({ isDarkMode }: CurrentWeatherProps) {
  return (
    <div className={`backdrop-blur-md rounded-2xl p-8 shadow-xl transition-colors ${
      isDarkMode ? 'bg-purple-900/40 border border-purple-700/30' : 'bg-white/80'
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <p className={`mb-2 transition-colors ${
            isDarkMode ? 'text-purple-300' : 'text-blue-600'
          }`}>Current Weather</p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className={`text-6xl transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>72°</span>
            <span className={`text-2xl transition-colors ${
              isDarkMode ? 'text-purple-400' : 'text-gray-500'
            }`}>F</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Cloud className={`w-5 h-5 transition-colors ${
              isDarkMode ? 'text-purple-400' : 'text-blue-500'
            }`} />
            <span className={`transition-colors ${
              isDarkMode ? 'text-purple-100' : 'text-gray-700'
            }`}>Partly Cloudy</span>
          </div>
          <p className={`transition-colors ${
            isDarkMode ? 'text-purple-300' : 'text-gray-500'
          }`}>Feels like 70°F</p>
        </div>
        
        <div className={`transition-colors ${
          isDarkMode ? 'text-purple-400' : 'text-blue-500'
        }`}>
          <Cloud className="w-24 h-24" />
        </div>
      </div>

      <div className={`grid grid-cols-2 gap-4 mt-8 pt-6 border-t transition-colors ${
        isDarkMode ? 'border-purple-700/30' : 'border-blue-100'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isDarkMode ? 'bg-purple-800/50' : 'bg-blue-50'
          }`}>
            <Wind className={`w-5 h-5 transition-colors ${
              isDarkMode ? 'text-purple-400' : 'text-blue-500'
            }`} />
          </div>
          <div>
            <p className={`text-sm transition-colors ${
              isDarkMode ? 'text-purple-300' : 'text-gray-500'
            }`}>Wind Speed</p>
            <p className={`transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>12 mph</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isDarkMode ? 'bg-purple-800/50' : 'bg-blue-50'
          }`}>
            <Droplets className={`w-5 h-5 transition-colors ${
              isDarkMode ? 'text-purple-400' : 'text-blue-500'
            }`} />
          </div>
          <div>
            <p className={`text-sm transition-colors ${
              isDarkMode ? 'text-purple-300' : 'text-gray-500'
            }`}>Humidity</p>
            <p className={`transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>65%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isDarkMode ? 'bg-purple-800/50' : 'bg-blue-50'
          }`}>
            <CloudRain className={`w-5 h-5 transition-colors ${
              isDarkMode ? 'text-purple-400' : 'text-blue-500'
            }`} />
          </div>
          <div>
            <p className={`text-sm transition-colors ${
              isDarkMode ? 'text-purple-300' : 'text-gray-500'
            }`}>Precipitation</p>
            <p className={`transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>10%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isDarkMode ? 'bg-purple-800/50' : 'bg-blue-50'
          }`}>
            <Sun className={`w-5 h-5 transition-colors ${
              isDarkMode ? 'text-purple-400' : 'text-blue-500'
            }`} />
          </div>
          <div>
            <p className={`text-sm transition-colors ${
              isDarkMode ? 'text-purple-300' : 'text-gray-500'
            }`}>UV Index</p>
            <p className={`transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>5 (Moderate)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
