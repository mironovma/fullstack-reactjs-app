import { useContext } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "app/providers/ThemeProvider/lib/ThemeContext";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.BLUE;
                break;
            case Theme.BLUE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.DARK;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    document.body.classList.add(theme || "");

    // if (!document.body.classList.contains(/app_.*_theme/gm))

    return {
        theme: theme || Theme.DARK,
        toggleTheme,
    };
}
