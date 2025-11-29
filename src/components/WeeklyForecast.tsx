import { Cloud, CloudRain, Sun, CloudDrizzle, Wind } from 'lucide-react';

interface WeeklyForecastProps {
  isDarkMode: boolean;
}

export function WeeklyForecast({ isDarkMode }: WeeklyForecastProps) {
  const weeklyData = [
    { day: 'Monday', high: 76, low: 62, icon: Sun, condition: 'Sunny', precipitation: 0 },
    { day: 'Tuesday', high: 78, low: 64, icon: Sun, condition: 'Sunny', precipitation: 0 },
    { day: 'Wednesday', high: 74, low: 61, icon: Cloud, condition: 'Cloudy', precipitation: 20 },
    { day: 'Thursday', high: 70, low: 58, icon: CloudDrizzle, condition: 'Light Rain', precipitation: 40 },
    { day: 'Friday', high: 68, low: 56, icon: CloudRain, condition: 'Rainy', precipitation: 80 },
    { day: 'Saturday', high: 72, low: 59, icon: Cloud, condition: 'Cloudy', precipitation: 30 },
    { day: 'Sunday', high: 75, low: 62, icon: Sun, condition: 'Partly Sunny', precipitation: 10 },
  ];

  return (
    <div className={`backdrop-blur-md rounded-2xl p-6 shadow-xl transition-colors ${
      isDarkMode ? 'bg-purple-900/40 border border-purple-700/30' : 'bg-white/80'
    }`}>
      <h3 className={`mb-6 transition-colors ${
        isDarkMode ? 'text-white' : 'text-blue-900'
      }`}>7-Day Forecast</h3>
      <div className="space-y-3">
        {weeklyData.map((day, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
              isDarkMode ? 'hover:bg-purple-800/30' : 'hover:bg-blue-50'
            }`}
          >
            <div className="flex items-center gap-4 flex-1">
              <span className={`w-28 transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{day.day}</span>
              <div className="flex items-center gap-3">
                <day.icon className={`w-6 h-6 transition-colors ${
                  isDarkMode ? 'text-purple-400' : 'text-blue-500'
                }`} />
                <span className={`w-28 transition-colors ${
                  isDarkMode ? 'text-purple-200' : 'text-gray-600'
                }`}>{day.condition}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 text-sm">💧</span>
                <span className={`w-12 transition-colors ${
                  isDarkMode ? 'text-purple-200' : 'text-gray-600'
                }`}>{day.precipitation}%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{day.high}°</span>
                <span className={`transition-colors ${
                  isDarkMode ? 'text-purple-400' : 'text-gray-400'
                }`}>/</span>
                <span className={`transition-colors ${
                  isDarkMode ? 'text-purple-300' : 'text-gray-500'
                }`}>{day.low}°</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
