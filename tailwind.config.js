const vars = {
    "--gray-1": "0deg 0% 0%",
    "--gray-2": "0deg 0% 10%",
    "--gray-3": "0deg 0% 20%",
    "--gray-4": "0deg 0% 30%",

    "--text-1": "0deg 0% 0%",
    "--text-2": "0deg 0% 10%",
    "--text-3": "0deg 0% 20%",
    "--text-4": "0deg 0% 30%",
}

const tokens = {
    "gray-1": "hsl(var(--gray-1) / <alpha-value>)",
    "gray-2": "hsl(var(--gray-2) / <alpha-value>)",
    "gray-3": "hsl(var(--gray-3) / <alpha-value>)",
    "gray-4": "hsl(var(--gray-4) / <alpha-value>)",

    "text-1": "hsl(var(--text-1) / <alpha-value>)",
    "text-2": "hsl(var(--text-2) / <alpha-value>)",
    "text-3": "hsl(var(--text-3) / <alpha-value>)",
    "text-4": "hsl(var(--text-4) / <alpha-value>)",

    "background": "hsl(var(--gray-1) / <alpha-value>)",
    "white": "hsl(0deg 0% 100% / <alpha-value>)",
    "black": "hsl(0deg 0% 0% / <alpha-value>)",
}


/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{js,ts,svelte}"],
    theme: {
        colors: {
            ...tokens,
        }
    },
    plugins: [require("@tailwindcss/forms"),{
        handler({ addBase }) {
            addBase({
                "*": {
                    ...vars,
                },
            })
        }
    }]
}
