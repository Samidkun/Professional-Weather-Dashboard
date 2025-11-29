import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';

interface HourlyForecastProps {
  isDarkMode: boolean;
}

export function HourlyForecast({ isDarkMode }: HourlyForecastProps) {
  const hourlyData = [
    { time: 'Now', temp: 72, icon: Cloud, condition: 'Cloudy' },
    { time: '2 PM', temp: 74, icon: Cloud, condition: 'Cloudy' },
    { time: '3 PM', temp: 75, icon: Sun, condition: 'Sunny' },
    { time: '4 PM', temp: 76, icon: Sun, condition: 'Sunny' },
    { time: '5 PM', temp: 75, icon: Sun, condition: 'Sunny' },
    { time: '6 PM', temp: 73, icon: Cloud, condition: 'Cloudy' },
    { time: '7 PM', temp: 70, icon: Cloud, condition: 'Cloudy' },
    { time: '8 PM', temp: 68, icon: CloudRain, condition: 'Rain' },
    { time: '9 PM', temp: 66, icon: CloudRain, condition: 'Rain' },
    { time: '10 PM', temp: 65, icon: Cloud, condition: 'Cloudy' },
  ];

  return (
    <div className={`backdrop-blur-md rounded-2xl p-6 shadow-xl transition-colors ${
      isDarkMode ? 'bg-purple-900/40 border border-purple-700/30' : 'bg-white/80'
    }`}>
      <h3 className={`mb-6 transition-colors ${
        isDarkMode ? 'text-white' : 'text-blue-900'
      }`}>Hourly Forecast</h3>
      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-max pb-2">
          {hourlyData.map((hour, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-colors min-w-[80px] ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-purple-800/50 to-transparent hover:from-purple-700/50' 
                  : 'bg-gradient-to-b from-blue-50 to-transparent hover:from-blue-100'
              }`}
            >
              <span className={`transition-colors ${
                isDarkMode ? 'text-purple-200' : 'text-gray-600'
              }`}>{hour.time}</span>
              <hour.icon className={`w-8 h-8 transition-colors ${
                isDarkMode ? 'text-purple-400' : 'text-blue-500'
              }`} />
              <span className={`transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>{hour.temp}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
