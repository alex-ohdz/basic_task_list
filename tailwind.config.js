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
