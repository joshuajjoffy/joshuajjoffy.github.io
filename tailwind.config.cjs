/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // Preflight styles are already contained in the imported FCUI library stylesheet
    preflight: false,
  },
  prefix: "fc-",
  content: ["src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
      grey: {
        50: "#FDFDFC",
        100: "#F0F1F1",
        200: "#E4E4E5",
        400: "#A4A7AC",
        500: "#8A8E96",
        600: "#71767F",
        700: "#4B515D",
        900: "#0B1324",
      },
      pearl: {
        200: "#F9F7F4",
        500: "#EFEAE4",
        800: "#605E5B",
      },
      green: {
        500: "#35A58E",
      },
      red: {
        100: "#FBD8D7",
        500: "#EB4544",
        700: "#AC1312",
      },
      blue: {
        50: "#CBD9F1",
        500: "#3A70CA",
        700: "#1F3F74",
      },
      teal: {
        100: "#CCE4DF",
        700: "#014838",
      },
      amber: {
        100: "#FCF2DC",
        700: "#91712F",
      },
      purple: {
        100: "#EDE9FE",
        400: "#A78BFA",
        800: "#5B21B6",
      },
      pink: {
        100: "#FCE7F3",
        400: "#F472B6",
        800: "#9D174D",
      },
      slate: {
        900: "#0f172a",
      },
    },
    extend: {},
  },
  plugins: [],
};
