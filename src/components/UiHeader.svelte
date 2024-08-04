<script lang="ts">

import ThemeSwitch from "./ui/ThemeSwitch.svelte";
import LangSwitch from "./ui/LangSwitch.svelte";

import appIntl from '../data/app-intl.json';
import { intlText } from "../intl";
import { uiLanguage as lang } from "./uiState";

</script>

<nav class="uicontrols">

	<div class="header">
		{intlText(appIntl.app.header.title, $lang)}
	</div>

	
	<div class="controls">
		
		<LangSwitch />
	
		<ThemeSwitch />

	</div>

</nav>

<style lang="scss">

	nav {
		display: flex;
		flex-flow: row wrap;
		gap: 2rem;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
	}

	.controls {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;
		align-items: center;
	}

</style>
