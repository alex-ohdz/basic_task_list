// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#007FFF",
        "blue-gray": "#04142F",
        "customGray": '#EAF0F5',
        "customGray2": "#8A94A6",
        "customBlue":' #0D55CF',

      },
      boxShadow: {
        custom1: '0px 4px 8px 0px rgba(0, 0, 0, 0.04)',
        custom2: '0px 8px 16px 0px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  variants: {
    extend: {
      caretColor: ["responsive", "focus"],
    },
  },

  plugins: [],
};
