import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const themes = {
    midnight: {
        name: 'Midnight Purple',
        colors: {
            background: '15 7 32', // #0f0720
            surface: '30 27 75',    // #1e1b4b
            primary: '168 85 247',  // #a855f7
            secondary: '236 72 153',// #ec4899
            accent: '34 211 238',   // #22d3ee
            text: '243 232 255',    // #f3e8ff
            muted: '148 163 184'    // #94a3b8
        }
    },
    classic: {
        name: 'Classic Minimal',
        colors: {
            background: '255 255 255', // #ffffff
            surface: '249 250 251',    // #f9fafb
            primary: '0 0 0',          // #000000
            secondary: '75 85 99',     // #4b5563
            accent: '209 213 219',     // #d1d5db
            text: '17 24 39',          // #111827
            muted: '107 114 128'       // #6b7280
        }
    },
    cream: {
        name: 'Cream & Teal',
        colors: {
            background: '255 255 240', // #FFFFF0
            surface: '255 255 255',    // #FFFFFF
            primary: '20 184 166',     // #14b8a6
            secondary: '249 115 22',   // #f97316
            accent: '250 204 21',      // #facc15
            text: '31 41 55',          // #1f2937
            muted: '107 114 128'       // #6b7280
        }
    },
    forest: {
        name: 'Forest Deep',
        colors: {
            background: '5 46 22',     // #052e16
            surface: '6 78 59',        // #064e3b
            primary: '52 211 153',     // #34d399
            secondary: '251 191 36',   // #fbbf24
            accent: '167 243 208',     // #a7f3d0
            text: '236 253 245',       // #ecfdf5
            muted: '110 231 183'       // #6ee7b7
        }
    },
    sunset: {
        name: 'Sunset Vibes',
        colors: {
            background: '255 247 237', // #fff7ed
            surface: '255 237 213',    // #ffedd5
            primary: '244 63 94',      // #f43f5e
            secondary: '245 158 11',   // #f59e0b
            accent: '251 191 36',      // #fbbf24
            text: '136 19 55',         // #881337
            muted: '190 18 60'         // #be123c
        }
    },
    ocean: {
        name: 'Ocean Breeze',
        colors: {
            background: '236 254 255', // #ecfeff
            surface: '207 250 254',    // #cffafe
            primary: '14 165 233',     // #0ea5e9
            secondary: '99 102 241',   // #6366f1
            accent: '56 189 248',      // #38bdf8
            text: '12 74 110',         // #0c4a6e
            muted: '3 105 161'         // #0369a1
        }
    },
    crimson: {
        name: 'Crimson Night',
        colors: {
            background: '25 4 4',      // #190404
            surface: '43 6 6',         // #2b0606
            primary: '239 68 68',      // #ef4444
            secondary: '245 158 11',   // #f59e0b
            accent: '254 202 202',     // #fecaca
            text: '254 242 242',       // #fef2f2
            muted: '185 28 28'         // #b91c1c
        }
    },
    pastel: {
        name: 'Pastel Dream',
        colors: {
            background: '255 250 250', // #ufffafa
            surface: '255 240 245',    // #fff0f5
            primary: '244 114 182',    // #f472b6 (Pink)
            secondary: '167 139 250',  // #a78bfa (Purple)
            accent: '165 243 252',     // #a5f3fc (Cyan)
            text: '71 85 105',         // #475569
            muted: '148 163 184'       // #94a3b8
        }
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('classic');

    useEffect(() => {
        const theme = themes[currentTheme];
        const root = document.documentElement;

        // Apply CSS variables
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value);
        });
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};
