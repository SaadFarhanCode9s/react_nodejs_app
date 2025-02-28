import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg_green: "#4cab72", 
      },
    },
  },
  plugins: [],
} satisfies Config;


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/views/**/*.{js,ts,jsx,tsx}",
//     "./src/views/*.{js,ts,jsx,tsx}",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/matrix-react-sdk/src/**/*.{js,ts,jsx,tsx}" //Remember to remove this content once in production phase
//   ],
//   important: true,
//   theme: {
//     extend: {
//       fontFamily: {
//         'poppins': ['PoppinsRegular', 'sans-serif'],
//         'poppins-semibold':['PoppinsSemiBold'],
//         'poppins-regular':['PoppinsRegular'],
//         'lato':['Lato'],
//         'lato-semibold':['LatoSemibold'],
//       },
//       colors: {
//         primaryDark: "#345DEE",
//         primaryLight: "#162150",
//         bg_gray: "#13131A",
//         backgroundBlack: "#14141F",
//         notificationGreeen: "rgba(61, 214, 170, 0.25)",
//         filterInactive: "rgba(85, 59, 160, 0.1)"
//       }
//     },
//     screens: {
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       fd: "1440px",
//       xl: "1280px",
//       xxl: "1450px"
//     }
//   },
//   plugins: []
// };