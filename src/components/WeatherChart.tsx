import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface WeatherChartProps {
  isDarkMode: boolean;
}

export function WeatherChart({ isDarkMode }: WeatherChartProps) {
  const data = [
    { time: '12 AM', temp: 65, humidity: 75 },
    { time: '3 AM', temp: 63, humidity: 78 },
    { time: '6 AM', temp: 62, humidity: 80 },
    { time: '9 AM', temp: 68, humidity: 70 },
    { time: '12 PM', temp: 72, humidity: 65 },
    { time: '3 PM', temp: 75, humidity: 60 },
    { time: '6 PM', temp: 73, humidity: 62 },
    { time: '9 PM', temp: 68, humidity: 68 },
  ];

  return (
    <div className={`backdrop-blur-md rounded-2xl p-6 shadow-xl transition-colors ${
      isDarkMode ? 'bg-purple-900/40 border border-purple-700/30' : 'bg-white/80'
    }`}>
      <h3 className={`mb-6 transition-colors ${
        isDarkMode ? 'text-white' : 'text-blue-900'
      }`}>Temperature & Humidity Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isDarkMode ? '#a78bfa' : '#3b82f6'} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={isDarkMode ? '#a78bfa' : '#3b82f6'} stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorHumidity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isDarkMode ? '#c084fc' : '#06b6d4'} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={isDarkMode ? '#c084fc' : '#06b6d4'} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#6b21a8' : '#e0e7ff'} />
          <XAxis 
            dataKey="time" 
            stroke={isDarkMode ? '#c4b5fd' : '#64748b'}
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke={isDarkMode ? '#c4b5fd' : '#64748b'}
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDarkMode ? 'rgba(88, 28, 135, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
              borderRadius: '8px',
              border: isDarkMode ? '1px solid #7e22ce' : '1px solid #e0e7ff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              color: isDarkMode ? '#fff' : '#000'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="temp" 
            stroke={isDarkMode ? '#a78bfa' : '#3b82f6'} 
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTemp)"
            name="Temperature (°F)"
          />
          <Area 
            type="monotone" 
            dataKey="humidity" 
            stroke={isDarkMode ? '#c084fc' : '#06b6d4'} 
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorHumidity)"
            name="Humidity (%)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
