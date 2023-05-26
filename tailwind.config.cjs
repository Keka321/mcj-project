/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "Museo-Slab": ["museo-slab", "serif"],
      },
      colors: {
        dark: "#010101",
      },
    },
  },
  plugins: [],
};
