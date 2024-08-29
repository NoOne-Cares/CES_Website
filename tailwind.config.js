/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // Adjust the path to where your files are located
        './public/index.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
