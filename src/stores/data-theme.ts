import { writable } from "svelte/store";
import { browser } from "$app/environment";

type DataTheme = 'cupcake' | 'dracula' | 'system';

const checkIsDarkSchemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
const dataTheme = writable<DataTheme>('system');

if (browser) { // Ensure it's client-side
    const defaultTheme = checkIsDarkSchemePreferred() ? 'dracula' : 'cupcake'
    const storedTheme = localStorage.getItem("data-theme-svelte") as DataTheme;
    dataTheme.set(storedTheme || defaultTheme);

    dataTheme.subscribe(value => {
        localStorage.setItem("data-theme-svelte", value);
    });
}

export default dataTheme;