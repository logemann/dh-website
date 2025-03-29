"use client";
import {use} from "react";
import {ThemeContext} from "@/app/(website)/ThemeProvider";
import {Switch} from "@/components/ui/switch";


export const ThemedComponent = () => {
    const { theme, toggleTheme } = use(ThemeContext)!;

    return (
        <div>
            {/*<p>Current Theme: {theme.mode}</p>*/}
            {/*<button onClick={toggleTheme}>Toggle Theme</button>*/}
            <Switch
                checked={theme.mode === "light"}
                onCheckedChange={toggleTheme}>
            </Switch>
        </div>
    );
};