tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0a2463",
                "primary-dark": "#071a47",
                "primary-light": "#e0e7ff",
                "accent-yellow": "#ffd700",
                "background-light": "#f6f6f8",
                "background-dark": "#0B0F19",
                "surface-light": "#ffffff",
                "surface-dark": "#030129",
                "text-dark": "#030129",
                "text-grey": "#A2B5D7",
                "text-light": "#616f89",
                "text-white": "#ffffff",
                "border-light": "#e5e7eb",
                "border-dark": "#2a303c",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "body": ["Inter", "sans-serif"]
            },
            borderRadius: { 
                "DEFAULT": "0.5rem", 
                "lg": "0.5rem", 
                "xl": "0.75rem", 
                "full": "9999px" 
            },
        },
    },
}
