/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Manual dark mode via class
    theme: {
        extend: {
            colors: {
                cream: '#F5FBE6',
                navy: '#233D4D',
                teal: '#215E61',
            },
            borderRadius: {
                'xl': '12px',
            },
        },
    },
    plugins: [],
}
