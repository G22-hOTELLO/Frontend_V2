/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#14274a",
          "200": "rgba(20, 39, 74, 0)",
          "300": "rgba(51, 37, 1, 0.46)",
          "400": "#010101",
          "500": "rgba(51, 37, 1, 0.6)",
          "800": "rgba(20, 39, 74, 0.5)",
        },
        black: "#000",
        darkslategray: {
          "100": "#474747",
          "200": "#33363f",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.3)",
        },
        navy: {
          "100": "#16289e",
          "200": "rgba(22, 40, 158, 0.83)",
        },
        dimgray: "#555",
        skyblue: "#84ccea",
        burlywood: "#e0b973",
        darkblue: "#0c22af",
        silver: "rgba(196, 196, 196, 0)",
        blue: "#0029ff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        adamina: "Adamina",
      },
      borderRadius: {
        "81xl": "100px",
        "12xs": "1px",
        "31xl": "50px",
        mini: "15px",
        xl: "20px",
        "79xl": "98px",
        "44xl": "63px",
        "6xl": "25px",
        "92xl": "111px",
      },
    },
    fontSize: {
      base: "1rem",
      "6xl": "1.563rem",
      "17xl": "2.25rem",
      "13xl": "2rem",
      "11xl": "1.875rem",
      "41xl": "3.75rem",
      "61xl": "5rem",
      "12xl": "1.938rem",
      "21xl": "2.5rem",
      xl: "1.25rem",
      "29xl": "3rem",
      "34xl": "3.313rem",
      "45xl": "4rem",
      "77xl": "6rem",
      "51xl": "4.375rem",
      "14xl": "2.063rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
