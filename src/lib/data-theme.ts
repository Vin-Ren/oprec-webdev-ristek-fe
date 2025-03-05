import { writable } from "svelte/store";
import { browser } from "$app/environment";

type DataTheme = 'cupcake' | 'dracula' | 'system';

export const dataTheme = writable<DataTheme>('system');

if (browser) { // Ensure it's client-side
    const storedTheme = localStorage.getItem("data-theme-svelte") as DataTheme | null;
    dataTheme.set(storedTheme ?? 'system');

    dataTheme.subscribe(value => {
        localStorage.setItem("data-theme-svelte", value);
    });
}
