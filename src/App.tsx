import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { WeatherDashboard } from './components/WeatherDashboard';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950' 
        : 'bg-gradient-to-br from-blue-50 to-blue-100'
    }`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <WeatherDashboard isDarkMode={isDarkMode} />
    </div>
  );
}
