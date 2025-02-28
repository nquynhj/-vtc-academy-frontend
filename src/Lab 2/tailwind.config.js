/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        musicBg: "#1F2937", // Màu nền tối (tùy chọn)
        customBlue: "#1E90FF", // Màu xanh cho tiêu đề
      },
    },
  },
  plugins: [],
};
