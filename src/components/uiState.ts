import { writable } from "svelte/store";
import { locales } from "../intl";

type UiTheme = 'dark' | 'light';

export const uiTheme = writable<UiTheme>(localStorage.getItem('theme') as UiTheme | null || 'dark');
uiTheme.subscribe(value => {
    localStorage.setItem('theme', value);
	document.querySelector('html')?.setAttribute('data-theme', value);
});

export const uiLanguage = writable<keyof typeof locales>(localStorage.getItem('lang') as any || 'en');
uiLanguage.subscribe(value => {
    localStorage.setItem('lang', value);
});
