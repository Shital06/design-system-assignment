/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',     // blue-700
          light: '#3B82F6',       // blue-500
          dark: '#1E40AF',        // blue-800
        },
        secondary: {
          DEFAULT: '#6B7280',     // gray-600
          light: '#9CA3AF',       // gray-400
          dark: '#4B5563',        // gray-700
        },
        success: '#10B981',       // green-500
        warning: '#F59E0B',       // yellow-500
        error: '#EF4444',         // red-500
        info: '#3B82F6',          // blue-500
        surface: '#FFFFFF',
        background: '#F9FAFB',
        border: '#E5E7EB',
        text: '#111827',
      },
    },
  },
  plugins: [],
}


