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
        navy: {
          "100": "#16289e",
          "200": "rgba(22, 40, 158, 0.83)",
        },
        black: "#000",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.3)",
        },
        darkslategray: {
          "100": "#474747",
          "200": "#33363f",
        },
        dimgray: "#555",
        silver: "rgba(196, 196, 196, 0)",
        burlywood: "#e0b973",
        darkblue: "#0c22af",
        skyblue: "#84ccea",
        blue: "#0029ff",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        adamina: "Adamina",
      },
      borderRadius: {
        "81xl": "100px",
        "31xl": "50px",
        xl: "20px",
        mini: "15px",
        "79xl": "98px",
        "44xl": "63px",
        "6xl": "25px",
        "92xl": "111px",
        "12xs": "1px",
      },
    },
    fontSize: {
      base: "1rem",
      "21xl": "2.5rem",
      xl: "1.25rem",
      "29xl": "3rem",
      "61xl": "5rem",
      "45xl": "4rem",
      "13xl": "2rem",
      "17xl": "2.25rem",
      "5xl": "1.5rem",
      "51xl": "4.375rem",
      "6xl": "1.563rem",
      "11xl": "1.875rem",
      "41xl": "3.75rem",
      "14xl": "2.063rem",
      "34xl": "3.313rem",
      "12xl": "1.938rem",
      "77xl": "6rem",
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
