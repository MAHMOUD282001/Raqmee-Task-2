module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {
      screens: {
        // xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1100px",
        "2xl": "1250px",
      },
      colors: {
        primary: "#DF6951",
        secondary: "#14183E",
        text: "#5E6282",
      },

      fontFamily: {
        navbarFont: ["googleSans", "sans-serif"],
        poppinsFont: ["Poppins", "sans-serif"],
        volkhovFont: ["Volkhov", "sans-serif"],
        openSansFont: ["Open Sans", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};
