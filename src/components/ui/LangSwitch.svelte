<script lang="ts">

import { locales } from "../../intl";
import { uiLanguage } from "../uiState";

const setLocale = (id: string) => $uiLanguage = (id as keyof typeof locales);

</script>

<div class="lang-switch">

	{#each Object.entries(locales) as [locale, name]}
		<button on:click={() => setLocale(locale)} class:active={$uiLanguage === locale}>
			{name}
		</button>
	{/each}
	
</div>

<style lang="scss">

	.lang-switch {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;

		button {
			display: block;
			padding: 0.25rem 0.5rem;
			border-radius: 0.5rem;
			transition: all 150ms ease;

			&:hover {
				cursor: pointer;
			}

			&.active {
				color: var(--app-color-button-text);
				background-color: var(--app-color-button-bg);
			}
		}
	}

</style>
