import { Cloud, Moon, Sun, Settings, Bell } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-purple-900/30 border-purple-700/30' 
        : 'bg-white/30 border-blue-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isDarkMode ? 'bg-purple-500' : 'bg-blue-500'
            }`}>
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`transition-colors ${
                isDarkMode ? 'text-white' : 'text-blue-900'
              }`}>WeatherPro</h2>
              <p className={`text-xs ${
                isDarkMode ? 'text-purple-300' : 'text-blue-600'
              }`}>Professional Dashboard</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-purple-800/50 text-purple-200' 
                : 'hover:bg-blue-100 text-blue-600'
            }`}>
              <Bell className="w-5 h-5" />
            </button>

            {/* Settings */}
            <button className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'hover:bg-purple-800/50 text-purple-200' 
                : 'hover:bg-blue-100 text-blue-600'
            }`}>
              <Settings className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all ${
                isDarkMode 
                  ? 'bg-purple-500 text-white hover:bg-purple-600' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
