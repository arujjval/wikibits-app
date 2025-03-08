/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter_400Regular'],
        'thin': ['Inter_100Thin'],
        'extralight': ['Inter_200ExtraLight'],
        'light': ['Inter_300Light'],
        'normal': ['Inter_400Regular'],
        'medium': ['Inter_500Medium'],
        'semibold': ['Inter_600SemiBold'],
        'bold': ['Inter_700Bold'],
        'extrabold': ['Inter_800ExtraBold'],
        'black': ['Inter_900Black'],
      },
    },
  },
  plugins: [],
}