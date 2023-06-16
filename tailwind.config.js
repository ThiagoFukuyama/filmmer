/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-gray": {
                    100: "#1B1B1B",
                    200: "#121212",
                },
            },
        },
    },
    plugins: [],
};
