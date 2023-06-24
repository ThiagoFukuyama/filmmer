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
                movie: "#E74C3C",
                series: "#A6378F",
                game: "#CF445B",
            },
            backgroundImage: {
                "filmmer-gradient":
                    "linear-gradient(to right, #EC5D37 20%, #8D2EB0)",
            },
        },
    },
    plugins: [],
};
