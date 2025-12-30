tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#030435",
                "primary-dark": "#020325",
                "primary-light": "#E7EEFF",
                "accent-yellow": "#FACC15",
                "background-light": "#FFFFFF",
                "background-dark": "#030435",
                "surface-light": "#FFFFFF",
                "surface-dark": "#030435",
                "text-dark": "#020325",
                "text-grey": "#64748b",
                "text-light": "#616f89",
                "text-white": "#FFFFFF",
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
