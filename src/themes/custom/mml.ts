// Custom Theme Template
// Rename this file to custom-theme.ts (or any name you prefer)
// Then set theme: "custom" in src/config.ts - it will work automatically!

export const customTheme = {
  primary: {
    50: "#FDFDFC",   // Main bg — warm white - brand colour
    100: "#F7F4EE",  // Alt bg / cards — your brand colour
    200: "#E8E3D8",  // Borders, dividers
    300: "#D4CCBA",  // Muted borders
    400: "#B0A88E",  // Muted text
    500: "#807A65",  // Eyebrow / secondary text — your brand colour
    600: "#5E5947",  // Medium emphasis
    700: "#444136",  // Body text — your brand colour
    800: "#282726",  // Dark bg (his base-900)
    900: "#1C1B1A",  // Darker bg (his base-950)
    950: "#100F0F"   // Deepest bg (his black)
  },
  highlight: {
    50: "#F4F7EE",  // Very light accent
    100: "#E6EDD6",  // Light accent
    200: "#CCDAAD",  // Light accent
    300: "#B3C884",  // Medium light
    400: "#98AA6E",  // Base accent BRAND COLOUR
    500: "#7D8F5A",  // Darker accent
    600: "#637448",  // Dark accent
    700: "#4A5836",  // Deeper
    800: "#323D25",  // Very dark
    900: "#1E2416",  // Darkest
    950: "#111309"   // Near black
  }
};

// Usage in src/config.ts:
// theme: "custom",
// customTheme: customTheme
