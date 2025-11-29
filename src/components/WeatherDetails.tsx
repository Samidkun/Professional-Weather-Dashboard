import { Gauge, Eye, Sunrise, Sunset, Navigation } from 'lucide-react';

interface WeatherDetailsProps {
  isDarkMode: boolean;
}

export function WeatherDetails({ isDarkMode }: WeatherDetailsProps) {
  const details = [
    { icon: Gauge, label: 'Pressure', value: '30.12 inHg', color: isDarkMode ? 'text-purple-400' : 'text-purple-500', bg: isDarkMode ? 'bg-purple-900/50' : 'bg-purple-50' },
    { icon: Eye, label: 'Visibility', value: '10 mi', color: isDarkMode ? 'text-green-400' : 'text-green-500', bg: isDarkMode ? 'bg-green-900/50' : 'bg-green-50' },
    { icon: Sunrise, label: 'Sunrise', value: '6:24 AM', color: isDarkMode ? 'text-orange-400' : 'text-orange-500', bg: isDarkMode ? 'bg-orange-900/50' : 'bg-orange-50' },
    { icon: Sunset, label: 'Sunset', value: '7:45 PM', color: isDarkMode ? 'text-pink-400' : 'text-pink-500', bg: isDarkMode ? 'bg-pink-900/50' : 'bg-pink-50' },
    { icon: Navigation, label: 'Wind Direction', value: 'NW', color: isDarkMode ? 'text-blue-400' : 'text-blue-500', bg: isDarkMode ? 'bg-blue-900/50' : 'bg-blue-50' },
  ];

  return (
    <div className={`backdrop-blur-md rounded-2xl p-6 shadow-xl transition-colors ${
      isDarkMode ? 'bg-purple-900/40 border border-purple-700/30' : 'bg-white/80'
    }`}>
      <h3 className={`mb-6 transition-colors ${
        isDarkMode ? 'text-white' : 'text-blue-900'
      }`}>Weather Details</h3>
      <div className="space-y-4">
        {details.map((detail, index) => (
          <div key={index} className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
            isDarkMode ? 'hover:bg-purple-800/30' : 'hover:bg-blue-50/50'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${detail.bg} flex items-center justify-center`}>
                <detail.icon className={`w-5 h-5 ${detail.color}`} />
              </div>
              <span className={`transition-colors ${
                isDarkMode ? 'text-purple-200' : 'text-gray-600'
              }`}>{detail.label}</span>
            </div>
            <span className={`transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
