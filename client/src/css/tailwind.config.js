{
  import('tailwindcss').Config;
}

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './utils/**/*.{jsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      orange: '#ff7849',
      green: '#13ce66',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
  plugins: [],
};
