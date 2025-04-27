/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f6f6',
          100: '#e4edec',
          200: '#bdd4d3',
          300: '#9bbab9',
          400: '#7D9D9C', // Main primary
          500: '#608482',
          600: '#4c6a68',
          700: '#3a5251',
          800: '#273736',
          900: '#141c1b',
        },
        secondary: {
          50: '#fefcf9',
          100: '#fdf9f3',
          200: '#FBF2E3',
          300: '#F8F0E5', // Main secondary
          400: '#f3e3cd',
          500: '#edd3b0',
          600: '#deb888',
          700: '#c6974d',
          800: '#9e742f',
          900: '#6b4e21',
        },
        accent: {
          50: '#fef9e7',
          100: '#fcf3cf',
          200: '#f9e79f',
          300: '#f6dc70',
          400: '#F4D03F',
          500: '#EEBA0B', // Main accent
          600: '#cb9902',
          700: '#9f7702',
          800: '#745601',
          900: '#483401',
        },
        dark: {
          50: '#ededef',
          100: '#dcdadf',
          200: '#b9b5bf',
          300: '#96909f',
          400: '#736b7f',
          500: '#5c5567',
          600: '#4c4656',
          700: '#3A3845', // Main dark
          800: '#2a2831',
          900: '#15141a',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};